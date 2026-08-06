#!/usr/bin/env node
/**
 * Construit une capture "nouvelle page proposee" a partir d'un gabarit existant.
 *
 *   node build-nouvelle-page.js <capture-source> <nouveau-nom> <ancien-slug> <nouveau-slug> <fichier.html> "<titre>" "<notes>"
 *
 * Exemple :
 *   node build-nouvelle-page.js amv-moto-ktm amv-moto-zontes assurance-moto-ktm assurance-moto-zontes \
 *     ~/.../redaction-assurance-moto-zontes.html "AMV - Assurance moto Zontes (creation)" "Nouvelle page marque"
 *
 * Le contenu du gabarit est masque (mode creation) et le nouveau contenu injecte.
 * Etat par defaut : version finale, bouton pour revealer ce qui est nouveau.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const [src, name, oldSlug, newSlug, htmlFile, title, notes] = process.argv.slice(2);
if (!notes) {
  console.error('Arguments manquants. Voir l\'en-tete du fichier.');
  process.exit(1);
}

const root = __dirname;
const srcDir = path.join(root, 'captures', src);
const dstDir = path.join(root, 'captures', name);
if (!fs.existsSync(srcDir)) throw new Error('Capture source introuvable : ' + src);
if (fs.existsSync(dstDir)) fs.rmSync(dstDir, { recursive: true });
execSync(`cp -R ${JSON.stringify(srcDir)} ${JSON.stringify(dstDir)}`);

const meta = JSON.parse(fs.readFileSync(path.join(dstDir, 'meta.json'), 'utf8'));
const domain = meta.domain;
const pagesRoot = path.join(dstDir, 'mirror', domain);

// 1. renomme le repertoire de la page
const parent = path.dirname(path.join(pagesRoot, meta.entryPath.replace(/^\/|\/$/g, '')));
fs.renameSync(path.join(parent, oldSlug), path.join(parent, newSlug));
const pageDir = path.join(parent, newSlug);
const entryPath = meta.entryPath.replace(oldSlug, newSlug);

// 2. meta.json
fs.writeFileSync(path.join(dstDir, 'meta.json'), JSON.stringify({
  name, title,
  sourceUrl: `https://${domain}${entryPath} (nouvelle page proposee)`,
  domain, entryPath,
  capturedAt: new Date().toISOString().slice(0, 10),
  notes,
}, null, 2) + '\n');

// 3. contenu du gabarit a masquer : on releve ses propres textes
const indexHtml = fs.readFileSync(path.join(pageDir, 'index.html'), 'utf8');
const strike = [];
const seen = new Set();
for (const m of indexHtml.matchAll(/<(h2|h3|h4|p|li|span)[^>]*>([\s\S]*?)<\/\1>/g)) {
  const t = m[2].replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;|&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
  if (t.length < 25 || t.length > 400) continue;
  const key = t.slice(0, 60);
  if (seen.has(key)) continue;
  seen.add(key);
  strike.push(key);
}

// 4. notre contenu -> items {h2|h3|p|ul|table}
const html = fs.readFileSync(htmlFile, 'utf8');
const clean = (s) => s
  .replace(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '[[LINK:$1]]$2[[/LINK]]')
  .replace(/<\/?(strong|b|em|i)>/g, '')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const items = [];
const re = /<(h1|h2|h3|p|ul|table)\b[^>]*>([\s\S]*?)<\/\1>/g;
let H1 = '';
for (const m of html.matchAll(re)) {
  const tag = m[1], inner = m[2];
  if (tag === 'h1') { H1 = clean(inner); continue; }
  if (tag === 'ul') {
    items.push({ ul: [...inner.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((li) => clean(li[1])) });
  } else if (tag === 'table') {
    const head = [...inner.matchAll(/<th>([\s\S]*?)<\/th>/g)].map((c) => clean(c[1]));
    const rows = [...inner.matchAll(/<tr>((?:\s*<td>[\s\S]*?<\/td>\s*)+)<\/tr>/g)]
      .map((r) => [...r[1].matchAll(/<td>([\s\S]*?)<\/td>/g)].map((c) => clean(c[1])));
    items.push({ table: { head, rows } });
  } else {
    items.push({ [tag]: clean(inner) });
  }
}
// separe le corps de la FAQ : tout ce qui suit le H2 "Questions frequentes"
const cut = items.findIndex((it) => it.h2 && /questions fr/i.test(it.h2));
const BODY = cut === -1 ? items : items.slice(0, cut);
const FAQ = cut === -1 ? [] : items.slice(cut);

// 5. ecrit le _redline.js : moteur du modele 3-roues + etat "version finale" par defaut
const engine = fs.readFileSync(path.join(root, 'captures', 'amv-scooter-3-roues', 'mirror', domain, '_redline.js'), 'utf8');
const header = engine.slice(0, engine.indexOf('(function(){'));
let body = engine.slice(engine.indexOf('(function(){'));
const varLine = body.match(/\n\s*var H1=[\s\S]*?OFFTOPIC=\[\];\n/);
if (!varLine) throw new Error('Bloc de variables introuvable dans le moteur');
body = body.replace(varLine[0], '\n  var H1=' + JSON.stringify(H1) +
  ', BODY=' + JSON.stringify(BODY) +
  ', FAQ=' + JSON.stringify(FAQ) +
  ', STRIKE=' + JSON.stringify(strike) + ', OFFTOPIC=[];\n');

// etat par defaut = version finale (decision du 28/07), bouton a deux etats
body = body.replace(
  /var b=el\("button",null,'<span class="dot"><\/span> Modifications'\);/,
  `var b=el("button",null,'<span class="dot"></span> Voir les modifications');`)
  .replace(
    /b\.addEventListener\("click",function\(\)\{document\.body\.classList\.toggle\("rl-on"\);\}\);/,
    `b.addEventListener("click",function(){var d=document.body,on=d.classList.toggle("rl-on");d.classList.toggle("rl-final",!on);b.innerHTML='<span class="dot"></span> '+(on?"Version finale":"Voir les modifications");});`)
  .replace(/document\.body\.classList\.add\("rl-on"\);/, 'document.body.classList.add("rl-final");');

// mode creation : le gabarit garde ses propres sections apres le hero, on les masque
// toutes (sauf les notres), on reecrit le H1, le fil d'ariane et le title.
const creation = `
    /* --- mode creation --- */
    var box=document.querySelector("main > div.mx-auto");
    if(box&&!window.__rlCrea){
      var kids=[].slice.call(box.children);
      kids.forEach(function(k,i){
        if(i<2)return;                            /* fil d'ariane + hero */
        if(k.classList.contains("rl-add"))return; /* notre contenu */
        if(k.querySelector&&k.querySelector(".rl-add"))return;
        if(i===kids.length-1)return;              /* pagination de bas de page */
        k.classList.add("rl-del");
      });
      var hh=document.querySelector("h1");
      if(hh&&H1){hh.textContent=H1;}
      var bc=box.children[0];
      if(bc){var last=bc.lastElementChild;if(last)last.textContent=H1;}
      if(H1)document.title=H1+" | AMV";
      var hb=document.getElementById("rl-h1box");if(hb)hb.style.display="none";
      /* le visuel de marque du gabarit n'a rien a faire sur une autre marque */
      var hero=hh?(hh.closest(".gap-amv40")||hh.parentElement.parentElement):null;
      if(hero){[].slice.call(hero.querySelectorAll("img,picture")).forEach(function(im){im.classList.add("rl-del");});}
      window.__rlCrea=true;
    }
`;
body = body.replace('    return !!(h1&&document.getElementById("rl-body"));', creation + '    return !!(h1&&document.getElementById("rl-body"));');

fs.writeFileSync(path.join(pagesRoot, '_redline.js'),
  `// Maquette AMV : NOUVELLE PAGE proposee (gabarit ${src}, contenu du gabarit masque).\n` +
  `// Page proposee : ${entryPath}\n` + body);

// 6. CSS : ajoute les regles de l'etat "version finale" si absentes
const cssPath = path.join(pagesRoot, '_redline.css');
let css = fs.readFileSync(cssPath, 'utf8');
// Tester la regle DECISIVE, pas des sous-chaines : les gabarits sources contiennent
// deja "rl-final" ailleurs, ce qui faisait sauter silencieusement tout le bloc et
// laissait le nouveau contenu en display:none (cache par body:not(.rl-on) .rl-add).
if (!css.includes('body.rl-final .rl-add')) {
  css += `
/* Etat "version finale" : rendu tel qu'il sera en ligne (defaut depuis le 28/07/2026) */
body.rl-final .rl-badge,
body.rl-final .rl-hntag,
body.rl-final #rl-legend { display: none !important; }
/* le nouveau contenu EST la page en etat final : il doit rester visible */
body.rl-final .rl-add { display: block !important; background: transparent !important; border: 0 !important; padding: 0 !important; }
body.rl-final .rl-add.rl-inline { display: none !important; }
/* tableaux : rendu neutre en etat final, vert seulement en mode modifications */
body.rl-final .rl-add .rl-table th { background: #f3f3f3 !important; color: #101010 !important; }
body.rl-final .rl-add .rl-table th, body.rl-final .rl-add .rl-table td { border-color: #dcdcdc !important; }
/* typographie du site : releve sur les H2 et paragraphes natifs d'amv.fr */
body.rl-final .rl-add .rl-nh2 { font-size: 22px !important; font-weight: 600 !important; line-height: 28px !important; color: #00a850 !important; margin: 32px 0 16px !important; }
body.rl-final .rl-add .rl-nh3 { font-size: 17px !important; font-weight: 700 !important; line-height: 24px !important; color: #00a850 !important; margin: 22px 0 8px !important; }
body.rl-final .rl-add .rl-np { font-size: 14px !important; line-height: 21px !important; color: #455359 !important; margin: 0 0 12px !important; }
body.rl-final .rl-add .rl-nul { font-size: 14px !important; line-height: 21px !important; color: #455359 !important; margin: 0 0 16px 20px !important; }
body.rl-final .rl-add .rl-nul li { margin: 0 0 6px !important; }
body.rl-final .rl-add .rl-table { font-size: 14px !important; }
body.rl-final .rl-add .rl-table th { font-weight: 600 !important; }
body.rl-final .rl-add a { color: #00a850 !important; text-decoration: underline; }
body.rl-final #rl-toggle .dot { background: #888 !important; }
body.rl-final .rl-del, body.rl-final .rl-del * { display: none !important; }
body.rl-on .rl-del { opacity: .45; text-decoration: line-through; background: #fde8e8; }
`;
  fs.writeFileSync(cssPath, css);
}

console.log(`OK ${name}`);
console.log(`   page       : ${entryPath}`);
console.log(`   H1         : ${H1}`);
console.log(`   corps      : ${BODY.length} blocs (dont ${BODY.filter((i) => i.table).length} tableau(x))`);
console.log(`   FAQ        : ${FAQ.length} blocs`);
console.log(`   masques    : ${strike.length} textes du gabarit`);
console.log(`   test local : node serve.js ${name}`);
