// Reconstruit la home (FR racine + EN /en/) avec un layout réorganisé :
// header + hero plein écran + grille 3 colonnes + bandeau édito + footer.
// Mêmes fonts (futura-pt / minion-pro, locales) et DA (B&W éditorial).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, 'mirror', 'quel-vetement.com');

const arts = JSON.parse(fs.readFileSync(path.join(__dirname, '_articles.json'), 'utf8'));

// FR -> EN pour titres/extraits (réutilise les paires de traduction)
const PAIRS = [
  ["The 10 Best Men's Summer T-Shirt Styles For 2026", "Les 10 meilleurs styles de t-shirts d'été pour homme en 2026"],
  ["A T-shirt is what you'll be living in through summer so it pays to have a good selection to call on.", "Le t-shirt, c'est ce que vous porterez tout l'été : autant avoir une bonne sélection sous la main."],
  ["Become More Stylish in 2026: 13 Fixes To Make Today", "Devenez plus élégant en 2026 : 13 ajustements à faire dès aujourd'hui"],
  ["10 High-Summer Pieces Every Man Needs In 2026", "10 pièces de plein été que tout homme doit avoir en 2026"],
  ["15 Luxury Brands Making The Finest Men's Wardrobe Essentials", "15 marques de luxe qui font les meilleurs essentiels du vestiaire masculin"],
  ["The Most Stylish Gifts For Father's Day 2026", "Les cadeaux les plus élégants pour la fête des pères 2026"],
  ["10 Summer Fashion Rules All Men Should Ignore", "10 règles de mode estivale que tout homme devrait ignorer"],
  ["7 Lightweight Knits Every Man Needs This Summer", "7 mailles légères que tout homme doit avoir cet été"],
  ["Resort Wear Pieces Every Man Should Have In His Vacation Wardrobe", "Les pièces resort que tout homme devrait avoir dans son vestiaire de vacances"],
  ["Premium Basics: The Best Quality Men's T-Shirt Brands For All Budgets", "Basiques premium : les meilleures marques de t-shirts pour homme, tous budgets"],
  ["Smart Casual Dress Code: A Modern Man's Guide For 2026", "Dress code smart casual : le guide de l'homme moderne pour 2026"],
  ["Buy Once, Wear Forever: The Smartest Men's Style Investments", "Acheter une fois, porter toujours : les investissements style les plus malins pour homme"],
  ["15 Budget Summer Colognes That Smell Expensive", "15 parfums d'été abordables qui sentent le luxe"],
  ["20 Things Men Waste Far Too Much Money On", "20 choses sur lesquelles les hommes gaspillent bien trop d'argent"],
  ["The Best Lightweight Trousers For Summer 2026", "Les meilleurs pantalons légers pour l'été 2026"],
  ["Ape's Top 10 Of The Month: June 2026", "Le top 10 du mois : juin 2026"],
  ["11 Luxury Pieces That Will Upgrade Your Summer Wardrobe", "11 pièces de luxe qui sublimeront votre vestiaire d'été"],
  ["7 Affordable Spirits Every Drinks Cabinet Needs", "7 spiritueux abordables que tout bar maison doit avoir"],
  ["15 Luxury Men's Summer Colognes That Are Worth The Money", "15 parfums d'été de luxe pour homme qui valent leur prix"],
  ["30 Things Every Man Should Stop Wasting Time On", "30 choses sur lesquelles tout homme devrait arrêter de perdre son temps"],
  ["10 Summer Outfits Every Man Should Master", "10 tenues d'été que tout homme devrait maîtriser"],
  ["7 Men's Spring/Summer Shirt Options (That Aren't Boring)", "7 chemises homme pour le printemps/été (qui ne sont pas ennuyeuses)"],
  ["20 Relaxed Tailoring Brands All Stylish Men Should Know", "20 marques de tailoring décontracté que tout homme élégant devrait connaître"],
  ["10 Habits That Instantly Make You Look Better Dressed", "10 habitudes qui vous font instantanément paraître mieux habillé"],
  ["The Luxury Loafer Brands That Are Worth The Money", "Les marques de mocassins de luxe qui valent leur prix"],
  ["First Class: 7 Luxury Accessories That Make Travelling A Pleasure", "Première classe : 7 accessoires de luxe qui rendent le voyage agréable"],
  ["Affordable Denim: The Best Jeans Brands For Men On A Budget", "Denim abordable : les meilleures marques de jeans pour homme à petit budget"],
  ["The Coolest Independent Sunglasses Brands for Men", "Les marques de lunettes de soleil indépendantes les plus cool pour homme"],
  ["Why Are Clothes So Expensive Now (And What's Still Worth The Money)?", "Pourquoi les vêtements sont-ils si chers aujourd'hui (et qu'est-ce qui vaut encore le coup) ?"],
  ["What Well-Dressed Men Are Wearing Right Now", "Ce que portent les hommes bien habillés en ce moment"],
];
const fr2en = {}; PAIRS.forEach(([e, f]) => fr2en[f] = e);
const toEN = s => fr2en[s] || s;

// citation édito (FR / EN)
const QUOTE_FR = "Le gentleman moderne n'est pas l'aboutissement de l'évolution de Darwin. Un vrai gentleman cherche toujours à s'enrichir par l'expérience, le travail sur soi et le goût de la qualité, sans jamais perdre de vue la valeur des choses.";
const QUOTE_EN = "The modern gentleman is not the final stage in evolution. A true gentleman is always looking to enrich himself through experience, self-improvement and the enjoyment of quality, while keeping an eye on real value.";

const NAV = [
  ['Mode homme', 'Menswear', '/category/mode-homme/'],
  ['Costume', 'Suits', '/category/costume/'],
  ['Lin', 'Linen', '/category/lin/'],
  ['Été', 'Summer', '/category/ete/'],
  ['Mode femme', "Women's fashion", '/category/mode-femme/'],
  ['À propos', 'About', '/about/'],
];
const FOOT = [
  ['Mode homme', "Men's Fashion", '/category/fashion/'],
  ['Soins homme', "Men's Grooming", '/category/grooming/'],
  ['Style homme', "Men's Style", '/category/fashion/'],
  ['Tenues homme', 'Outfits For Men', '/category/fashion/outfit-inspiration/'],
  ['Marques de vêtements homme', "Men's Clothing Brands", '/category/fashion/mens-clothing-brands/'],
  ['Mode femme', "Women's Fashion", '/category/mode-femme/'],
];
const ICON = {
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.12C21.33 1.35 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0z"/><path d="M12 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4z"/><circle cx="18.41" cy="5.59" r="1.44"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25h6.83l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z"/></svg>',
};
const SOCIAL = [
  ['instagram', 'https://www.instagram.com/quel-vetement/'],
  ['facebook', 'https://www.facebook.com/quel-vetement/'],
  ['x', 'https://twitter.com/quel-vetement/'],
];
const socIcons = () => SOCIAL.map(([k, href]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join('');

const FONTCSS = '/__ext/use.typekit.net/bki1nqp.css';

function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#16130f;--paper:#fbfaf8;--muted:#8a8278;--line:#e9e4dc;--sans:"futura-pt",Helvetica,Arial,sans-serif;--serif:"minion-pro",Georgia,"Times New Roman",serif}
html{-webkit-font-smoothing:antialiased}
body{font-family:var(--serif);color:var(--ink);background:var(--paper);line-height:1.5;font-size:18px}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px}
.eyebrow{font-family:var(--sans);text-transform:uppercase;letter-spacing:.22em;font-size:.66rem;color:var(--muted);font-weight:600}
h1,h2,h3{font-family:var(--serif);font-weight:500;line-height:1.12;letter-spacing:.005em}
/* double header : barre noire + bandeau blanc */
.bartop{background:#0c0a08;color:#fff}
.bartop .row{display:flex;align-items:center;justify-content:space-between;height:40px;font-family:var(--sans);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase}
.bartop .lang a{color:#fff;opacity:.55;margin:0 .15rem}
.bartop .lang a.on,.bartop .lang a:hover{opacity:1}
.bartop .info{flex:1;text-align:center;padding:0 18px;opacity:.82;letter-spacing:.1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bartop .soc{display:inline-flex;align-items:center}
.bartop .soc a{color:#fff;opacity:.7;margin-left:15px;display:inline-flex;transition:opacity .2s}
.bartop .soc a:hover{opacity:1}
.bartop .soc svg{width:15px;height:15px;display:block}
.top{border-bottom:1px solid var(--line)}
.brand{text-align:center;padding:24px 0 16px}
.brand a{font-family:var(--sans);font-weight:700;text-transform:uppercase;letter-spacing:.34em;font-size:1.5rem}
.nav{display:flex;justify-content:center;flex-wrap:wrap;gap:30px;padding-bottom:18px;font-family:var(--sans);font-size:.74rem;letter-spacing:.16em;text-transform:uppercase}
.nav a{color:var(--ink);opacity:.78;transition:opacity .2s}.nav a:hover{opacity:1}
/* hero */
.hero{position:relative;height:90vh;min-height:560px;display:flex;align-items:flex-end;color:#fff;overflow:hidden}
.hero .bg{position:absolute;inset:0;background-size:cover;background-position:center;transform:scale(1.02)}
.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.72),rgba(0,0,0,.12) 55%,rgba(0,0,0,.28))}
.hero .inner{position:relative;z-index:2;max-width:760px;padding:0 28px 64px;margin:0 auto;text-align:center;left:0;right:0}
.hero .eyebrow{color:rgba(255,255,255,.85)}
.hero h1{font-size:clamp(2.1rem,4.6vw,3.7rem);margin:.5rem 0 .9rem}
.hero p{font-size:1.12rem;color:rgba(255,255,255,.9);max-width:620px;margin:0 auto 1.6rem}
.btn{display:inline-block;font-family:var(--sans);text-transform:uppercase;letter-spacing:.2em;font-size:.72rem;font-weight:600;border:1px solid rgba(255,255,255,.8);padding:13px 26px;transition:.25s}
.btn:hover{background:#fff;color:#111}
/* sections */
.sec{padding:74px 0}
.sec-head{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:42px}
.sec-head h2{font-size:1.7rem}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:42px 38px}
.card .ph{aspect-ratio:4/3;overflow:hidden;background:#eee}
.card .ph img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.8,.2,1)}
.card:hover .ph img{transform:scale(1.06)}
.card h3{font-size:1.28rem;margin-top:18px}
.card:hover h3{opacity:.62}
.card .meta{margin-top:10px}
/* page legale */
.legal{max-width:760px}
.legal h1{font-size:2.3rem;margin:.4rem 0 1.5rem}
.legal h3{font-family:var(--sans);text-transform:uppercase;letter-spacing:.14em;font-size:.8rem;margin:1.9rem 0 .5rem}
.legal p{color:#3a352e;margin-bottom:.6rem}
/* edito band */
.edito{background:var(--ink);color:var(--paper);text-align:center;padding:96px 0}
.edito .eyebrow{color:rgba(255,255,255,.55)}
.edito blockquote{font-family:var(--serif);font-style:italic;font-size:clamp(1.4rem,2.6vw,2.05rem);line-height:1.4;max-width:880px;margin:22px auto 0}
/* footer en image sombre */
.foot{position:relative;color:#e7e2d9;padding:150px 0 44px;overflow:hidden;background:#0c0a08}
.foot:before{content:"";position:absolute;inset:0;background:url('/assets/uploads/qv-footer-bg.jpg') center/cover;opacity:.32}
.foot:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,8,6,.55) 0%,rgba(10,8,6,.82) 60%,rgba(8,6,4,.97) 100%)}
.foot .wrap{position:relative;z-index:2}
.foot .brand a{color:#fff}
.foot .fnav{display:flex;flex-wrap:wrap;justify-content:center;gap:14px 30px;font-family:var(--sans);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;margin:30px 0}
.foot .fnav a{opacity:.8}.foot .fnav a:hover{opacity:1;color:#fff}
.foot .soc{display:flex;justify-content:center;gap:22px}
.foot .soc a{opacity:.78;display:inline-flex;transition:opacity .2s}.foot .soc a:hover{opacity:1}
.foot .soc svg{width:18px;height:18px;display:block;color:#fff}
.foot .copy{text-align:center;font-family:var(--sans);font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:#9a9389;margin-top:34px}
.foot .copy a{color:#cfc9c0}
@media(max-width:920px){.grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.grid{grid-template-columns:1fr}.hero{height:78vh}.nav{gap:18px}}
`;

function page(lang) {
  const en = lang === 'en';
  const t = (fr, eng) => en ? eng : fr;
  // Titre/extrait par article : si l'article fournit ses propres champs EN
  // (titleEn / excEn) on les utilise, sinon on retombe sur la table de
  // traduction PAIRS, sinon sur le texte FR. Marche pour les futurs articles.
  const artTitle = a => en ? (a.titleEn || toEN(a.title)) : a.title;
  const artExc = a => en ? (a.excEn || a.exc || '') : (a.exc || '');

  const hasArts = arts.length > 0;
  const hero = arts[0];
  const grid1 = arts.slice(1, 13);
  const grid2 = arts.slice(13);
  const card = a => `<a class="card" href="${esc(a.href)}"><div class="ph"><img src="${esc(a.img)}" alt="${esc(artTitle(a))}" loading="lazy"></div><h3>${esc(artTitle(a))}</h3></a>`;

  // Hero : article à la une si on en a un, sinon hero de marque (pas d'article)
  const heroHtml = hasArts ? `
<section class="hero">
  <div class="bg" style="background-image:url('${esc(hero.img)}')"></div>
  <div class="inner">
    <div class="eyebrow">${t('À la une', 'Featured')}</div>
    <h1>${esc(artTitle(hero))}</h1>
    <p>${esc(artExc(hero))}</p>
    <a class="btn" href="${esc(hero.href)}">${t('Lire la suite', 'Read more')}</a>
  </div>
</section>` : `
<section class="hero">
  <div class="bg" style="background-image:url('/assets/uploads/qv-footer-bg.jpg')"></div>
  <div class="inner">
    <div class="eyebrow">${t('Bienvenue', 'Welcome')}</div>
    <h1>Quel Vêtement</h1>
    <p>${t("Comparatifs, guides d'achat et conseils style pour bien choisir ses vêtements.", 'Comparisons, buying guides and style advice to choose your clothes well.')}</p>
  </div>
</section>`;

  // Sections d'articles : affichées seulement s'il y a du contenu.
  // Quand on publiera des articles (dans _articles.json), elles se rempliront
  // automatiquement avec le meme affichage qu'aujourd'hui.
  const sec1 = grid1.length ? `
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>${t('Derniers articles', 'Latest articles')}</h2><span class="eyebrow">${t('Mode & style homme', "Men's fashion & style")}</span></div>
  <div class="grid">${grid1.map(card).join('')}</div>
</div></section>` : '';
  const sec2 = grid2.length ? `
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>${t('À découvrir', 'More to read')}</h2><span class="eyebrow">${t('Guides & inspirations', 'Guides & inspiration')}</span></div>
  <div class="grid">${grid2.map(card).join('')}</div>
</div></section>` : '';

  // Etat vide (aucun article publie pour l'instant)
  const empty = !hasArts ? `
<section class="sec"><div class="wrap" style="text-align:center;max-width:640px">
  <div class="sec-head" style="justify-content:center"><h2>${t('Nos premiers articles arrivent bientôt', 'Our first articles are coming soon')}</h2></div>
  <p style="color:var(--muted)">${t("Le contenu est en préparation. Revenez très vite pour découvrir nos guides et comparatifs.", 'Content is on the way. Check back soon for our guides and comparisons.')}</p>
</div></section>` : '';

  const main = `${heroHtml}${sec1}${empty}
<section class="edito"><div class="wrap">
  <div class="eyebrow">${t("L'esprit Quel Vêtement", 'The Quel Vêtement spirit')}</div>
  <blockquote>${t(QUOTE_FR, QUOTE_EN)}</blockquote>
</div></section>${sec2}`;
  const title = en ? "Men's Fashion & Lifestyle Blog 2026 - Quel Vêtement" : "Blog mode & lifestyle homme 2026 - Quel Vêtement";
  const desc = en ? "A modern men's fashion & lifestyle blog: timeless yet contemporary style, intelligent living and value." : "Blog mode & lifestyle masculin : un style intemporel mais actuel, l'art de vivre et le goût de la qualité.";
  return shell(lang, en ? '/en/' : '/', title, desc, main);
}

// page mentions légales / legal notice
function legalPage(lang) {
  const en = lang === 'en';
  const main = en ? `
<section class="sec"><div class="wrap legal">
  <div class="eyebrow">Legal</div>
  <h1>Legal notice</h1>
  <h3>Publisher</h3><p>This website (quel-vetement.com) is published by Quel Vêtement. Company details to be completed (legal form, share capital, trade register). Contact: contact@quel-vetement.com.</p>
  <h3>Publication director</h3><p>To be completed.</p>
  <h3>Hosting</h3><p>The site is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA.</p>
  <h3>Intellectual property</h3><p>All content on this site (texts, images, logos, graphic design) is protected and may not be reproduced without prior authorisation.</p>
  <h3>Personal data</h3><p>In accordance with the GDPR, you may request access, rectification or deletion of your personal data by writing to the contact address above.</p>
  <h3>Cookies</h3><p>This site does not use advertising or tracking cookies.</p>
</div></section>` : `
<section class="sec"><div class="wrap legal">
  <div class="eyebrow">Informations</div>
  <h1>Mentions légales</h1>
  <h3>Éditeur du site</h3><p>Le site quel-vetement.com est édité par Quel Vêtement. Informations société à compléter (forme juridique, capital social, RCS / SIRET). Contact : contact@quel-vetement.com.</p>
  <h3>Directeur de la publication</h3><p>À compléter.</p>
  <h3>Hébergeur</h3><p>Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.</p>
  <h3>Propriété intellectuelle</h3><p>L'ensemble des contenus de ce site (textes, images, logos, charte graphique) est protégé et ne peut être reproduit sans autorisation préalable.</p>
  <h3>Données personnelles</h3><p>Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données personnelles en écrivant à l'adresse de contact ci-dessus.</p>
  <h3>Cookies</h3><p>Ce site n'utilise pas de cookies publicitaires ni de traceurs.</p>
</div></section>`;
  const title = en ? 'Legal notice - Quel Vêtement' : 'Mentions légales - Quel Vêtement';
  return shell(lang, en ? '/en/legal-notice/' : '/mentions-legales/', title, '', main);
}

// coquille commune : head + double header + contenu + footer image
function shell(lang, canonPath, title, desc, main) {
  const en = lang === 'en';
  const t = (fr, eng) => en ? eng : fr;
  const home = en ? '/en/' : '/';
  const legalUrl = en ? '/en/legal-notice/' : '/mentions-legales/';
  const navHtml = NAV.map(n => `<a href="${n[2]}">${esc(t(n[0], n[1]))}</a>`).join('');
  const footHtml = FOOT.map(n => `<a href="${n[2]}">${esc(t(n[0], n[1]))}</a>`).join('');
  const socHtml = socIcons();
  const info = en ? "Style, sharp advice and a little panache — every week." : "Du style, des conseils et un peu de panache — chaque semaine.";
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
${desc ? `<meta name="description" content="${esc(desc)}">` : ''}
<link rel="canonical" href="https://quel-vetement.com${canonPath}">
<link rel="alternate" hreflang="fr" href="https://quel-vetement.com/">
<link rel="alternate" hreflang="en" href="https://quel-vetement.com/en/">
<link rel="alternate" hreflang="x-default" href="https://quel-vetement.com/">
<link rel="stylesheet" href="${FONTCSS}">
<style>${CSS}</style>
</head>
<body>
<header>
  <div class="bartop">
    <div class="wrap"><div class="row">
      <span class="lang"><a href="/" class="${en ? '' : 'on'}">FR</a>/<a href="/en/" class="${en ? 'on' : ''}">EN</a></span>
      <span class="info">${esc(info)}</span>
      <span class="soc">${socHtml}</span>
    </div></div>
  </div>
  <div class="top"><div class="wrap">
    <div class="brand"><a href="${home}">Quel Vêtement</a></div>
    <nav class="nav">${navHtml}</nav>
  </div></div>
</header>
${main}
<footer class="foot"><div class="wrap">
  <div class="brand"><a href="${home}">Quel Vêtement</a></div>
  <nav class="fnav">${footHtml}<a href="${legalUrl}">${t('Mentions légales', 'Legal notice')}</a></nav>
  <div class="soc">${socHtml}</div>
  <div class="copy">© Quel Vêtement 2026 — <a href="${legalUrl}">${t('Mentions légales', 'Legal notice')}</a></div>
</div></footer>
</body>
</html>`;
}

fs.writeFileSync(path.join(ROOT, 'index.html'), page('fr'));
fs.mkdirSync(path.join(ROOT, 'en'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'en', 'index.html'), page('en'));
fs.mkdirSync(path.join(ROOT, 'mentions-legales'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'mentions-legales', 'index.html'), legalPage('fr'));
fs.mkdirSync(path.join(ROOT, 'en', 'legal-notice'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'en', 'legal-notice', 'index.html'), legalPage('en'));
console.log('Home FR+EN + mentions légales FR+EN reconstruites (', arts.length, 'articles ).');
