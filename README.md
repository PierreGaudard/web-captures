# Web Captures

Copies locales fidèles et **interactives** de pages web (y compris les sites en JavaScript /
SPA). Chaque capture reproduit le site avec son design, ses accordéons, carrousels, etc.

## Pourquoi un serveur local ?

Les sites modernes sont souvent des **SPA JavaScript**. Ouverts en double-clic (`file://`),
leur routeur interne plante (page 404) et les composants ne se chargent pas. Servis en HTTP
local au bon chemin, ils fonctionnent comme l'original.

## Utilisation

### Le plus simple (Mac)
Double-clique **`LANCER.command`**, choisis la capture, le navigateur s'ouvre.
Laisse la fenêtre Terminal ouverte tant que tu consultes ; ferme-la pour arrêter.

### En ligne de commande
```bash
node serve.js                 # liste les captures disponibles
node serve.js <nom-capture>   # lance une capture (port 8787 par défaut)
node serve.js <nom> 9000      # port personnalisé
```
Puis ouvre l'URL affichée (ex : http://localhost:8787/assurance/moto/).

Prérequis : Node.js installé.

## Structure

```
captures/
  <nom-capture>/
    meta.json      infos : sourceUrl, domain, entryPath...
    mirror/        tous les fichiers du site (HTML, CSS, JS chunks, images, fonts)
    monolith/      snapshot 1 fichier auto-contenu (sans interactivité JS)
    rendered/      DOM rendu + screenshot pleine page (référence)
    LISEZ-MOI.md   notes propres à la capture
serve.js           serveur générique
LANCER.command     lanceur avec menu (Mac)
```

## Captures incluses

| Capture | Site source |
|---|---|
| `amv-assurance-moto` | https://www.amv.fr/assurance/moto/ |

## Limites
Les fonctions qui appellent l'API serveur d'origine en direct (devis dynamique,
formulaires) ne marchent pas hors-ligne : leur backend n'est pas inclus. Tout le contenu
et les interactions front (accordéons, sliders, menus) fonctionnent.
