// Post-traitement de la home (à partir du HTML FR déjà construit) :
//  - retrait newsletter
//  - retrait srcset (force les nouvelles images) + recadrage
//  - restyle "classe" (mêmes fonts/DA)
//  - version bilingue : FR (racine) + EN (/en/) avec hreflang + sélecteur de langue
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, 'mirror', 'quel-vetement.com');

// paires EN<->FR (servent à reconstruire l'anglais depuis le FR)
const TR = [
  ["Men's Fashion & Lifestyle Blog 2026 - Quel Vêtement", "Blog mode & lifestyle homme 2026 - Quel Vêtement"],
  ["A modern men's fashion & lifestyle blog dedicated to timeless yet contemporary style, intelligent living and value", "Un blog mode & lifestyle masculin moderne, dédié à un style intemporel mais actuel, à l'art de vivre et au bon goût"],
  ["Quel Vêtement: Men's Fashion & Lifestyle Blog", "Quel Vêtement : blog mode & lifestyle homme"],
  ["Quel Vêtement: Men's Fashion & Lifestyle", "Quel Vêtement : mode & lifestyle homme"],
  ["About Quel Vêtement", "À propos de Quel Vêtement"],
  ["Comments Feed", "Flux des commentaires"],
  ["Subscribe to our newsletter", "Abonnez-vous à notre newsletter"],
  ["By subscribing you accept our Privacy Policy", "En vous abonnant, vous acceptez notre politique de confidentialité"],
  ["By subscribing you accept our", "En vous abonnant, vous acceptez notre"],
  ["Latest Article", "Dernier article"],
  ["Let us help you unlock your sartorial potential.", "Laissez-nous vous aider à révéler votre potentiel vestimentaire."],
  ["The modern gentleman is not the final stage in Darwin's evolutionary process. A true gentleman should always be looking to enrich himself further through experience, self-improvement and the enjoyment of quality, whilst keeping an eye on value. And perhaps most importantly, we must remember that a true gentleman is one who puts more into the world than he takes out.", "Le gentleman moderne n'est pas l'aboutissement de l'évolution de Darwin. Un vrai gentleman doit toujours chercher à s'enrichir davantage par l'expérience, le développement personnel et le goût de la qualité, tout en gardant un œil sur la valeur des choses. Et, peut-être le plus important : n'oublions jamais qu'un vrai gentleman est celui qui donne au monde plus qu'il n'en retire."],
  ["Latest Articles", "Derniers articles"],
  ["Featured Article", "Article à la une"],
  ["Read More", "Lire la suite"],
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
  ["It's the dress code that nobody wants to see on an invitation, but we're here to unsure you're never over- or underdressed again.", "C'est le dress code que personne ne veut voir sur une invitation, mais nous sommes là pour que vous ne soyez plus jamais trop ou pas assez habillé."],
  ["Buy Once, Wear Forever: The Smartest Men's Style Investments", "Acheter une fois, porter toujours : les investissements style les plus malins pour homme"],
  ["Here are the garments you can buy once and wear for life (or near enough).", "Voici les vêtements que vous pouvez acheter une fois et porter à vie (ou presque)."],
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
  ["Full Name", "Nom complet"],
  ["Email Address", "Adresse e-mail"],
  ["Keywords...", "Mots-clés..."],
  ["Men's Clothing Brands", "Marques de vêtements homme"],
  ["Men's Hairstyles", "Coiffures homme"],
  ["Outfits For Men", "Tenues homme"],
  ["Men's Fashion", "Mode homme"],
  ["Men's Grooming", "Soins homme"],
  ["Men's Watches", "Montres homme"],
  ["Men's Style", "Style homme"],
  ["Privacy Policy", "Politique de confidentialité"],
  ["Outfit Inspiration", "Inspiration tenues"],
  ["Fashion Trends", "Tendances mode"],
  ["Buying Guides", "Guides d'achat"],
  ["Food & Drink", "Cuisine & boissons"],
  ["Contact Us", "Contact"],
  ["About Ape", "À propos"],
  ["Advertise", "Publicité"],
  ["Lifestyle", "Art de vivre"],
  ["Grooming", "Soins"],
  ["Watches", "Montres"],
  ["Cars", "Voitures"],
  ["Hair", "Cheveux"],
];

function tolRegex(s) { // tolérant & / &amp; et apostrophes
  let r = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  r = r.split('&').join('(?:&|&amp;)');
  r = r.replace(/'/g, "(?:['\\u2018\\u2019]|&#0?39;|&#8217;)");
  const pre = /^\w/.test(s) ? '\\b' : '';
  const suf = /\w$/.test(s) ? '\\b' : '';
  return new RegExp(pre + r + suf, 'g');
}

// lit toujours la base propre (HTML FR de GitHub) -> ré-exécutable sans double injection
let fr = fs.readFileSync(path.join(__dirname, '_base.html'), 'utf8');

// --- 1) retrait newsletter ---
function cutDiv(h, marker) {
  const s = h.indexOf(marker);
  if (s < 0) return h;
  const re = /<\/?div\b/gi; re.lastIndex = s;
  let depth = 0, m;
  while ((m = re.exec(h))) {
    if (m[0][1] === '/') { if (--depth === 0) { const e = h.indexOf('>', m.index) + 1; return h.slice(0, s) + h.slice(e); } }
    else depth++;
  }
  return h;
}
fr = cutDiv(fr, '<div class="newsletter-container');
fr = cutDiv(fr, '<div class="newsletter-signup');
fr = fr.replace(/<a\b[^>]*toggle-newsletter[^>]*>[\s\S]*?<\/a>/gi, '');
fr = fr.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, m => /newsletter-container|toggle-newsletter|closeModal/i.test(m) ? '' : m);
fr = fr.replace(/<!--\s*\.?newsletter[^>]*-->/gi, '');

// --- 2) srcset / sizes ---
fr = fr.replace(/\ssrcset="[^"]*"/gi, '').replace(/\sdata-srcset="[^"]*"/gi, '').replace(/\ssizes="[^"]*"/gi, '');

// --- 3) restyle "classe" + recadrage images (mêmes fonts/DA) ---
const STYLE = `<style id="qv-restyle">
img.wp-post-image{object-fit:cover;width:100%;height:100%;display:block;transition:transform .7s cubic-bezier(.2,.8,.2,1);}
a:has(> img.wp-post-image),figure:has(> img.wp-post-image){overflow:hidden;display:block;}
a:has(> img.wp-post-image):hover img.wp-post-image,figure:hover img.wp-post-image{transform:scale(1.05);}
h1,h2,h3,.entry-title{letter-spacing:.005em;}
.entry-title a,h2 a,h3 a{transition:opacity .25s ease;}
.entry-title a:hover,h2 a:hover,h3 a:hover{opacity:.6;}
.qv-langswitch{display:inline-flex;gap:.5rem;align-items:center;font-family:"futura-pt",Helvetica,Arial,sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;}
.qv-langswitch a{color:inherit;opacity:.55;text-decoration:none;}
.qv-langswitch a.active,.qv-langswitch a:hover{opacity:1;}
</style>`;

// hreflang (FR racine, EN /en/)
const HREFLANG = `<link rel="alternate" hreflang="fr" href="https://quel-vetement.com/"><link rel="alternate" hreflang="en" href="https://quel-vetement.com/en/"><link rel="alternate" hreflang="x-default" href="https://quel-vetement.com/">`;

function buildSwitch(active) {
  const fr = `<a href="/" class="${active === 'fr' ? 'active' : ''}">FR</a>`;
  const en = `<a href="/en/" class="${active === 'en' ? 'active' : ''}">EN</a>`;
  return `<span class="qv-langswitch">${fr}<span style="opacity:.3">/</span>${en}</span>`;
}

function finalize(html, lang) {
  html = html.replace('</head>', STYLE + HREFLANG + '</head>');
  html = html.replace(/<html([^>]*?)\slang="[^"]*"/i, `<html$1 lang="${lang}"`);
  // sélecteur de langue dans la barre du haut (1re zone gauche du header)
  html = html.replace(/(<div class="hidden lg:flex flex-1 items-center text-body">)/, `$1${buildSwitch(lang)}`);
  // canonical par langue
  const canon = lang === 'en' ? 'https://quel-vetement.com/en/' : 'https://quel-vetement.com/';
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/i, `$1${canon}$2`);
  return html;
}

// page EN (reverse-translation FR -> EN, plus longues d'abord) — AVANT les correctifs FR
let en = fr;
for (const [e, f] of TR.slice().sort((a, b) => b[1].length - a[1].length)) {
  en = en.replace(tolRegex(f), e);
}

// correctifs FR : eyebrows oubliés par la traduction d'origine (restent EN côté anglais)
const FRX = [
  ["Editor's Pick", "Sélection de la rédaction"],
  ["Featured", "À la une"],
];
for (const [e, f] of FRX) fr = fr.replace(tolRegex(e), f);

// page FR
const frPage = finalize(fr, 'fr');
fs.writeFileSync(path.join(ROOT, 'index.html'), frPage);
console.log('FR écrit :', frPage.length);

const enPage = finalize(en, 'en');
fs.mkdirSync(path.join(ROOT, 'en'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'en', 'index.html'), enPage);
console.log('EN écrit :', enPage.length);
