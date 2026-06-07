#!/bin/bash
# Deploie sur Cloudflare Pages : une capture, ou le portail, ou tout.
# Usage :
#   ./deploy.sh capture <nom>     deploie captures/<nom> -> <nom>.pages.dev
#   ./deploy.sh portal            deploie le portail -> amv-contenu.pages.dev
#   ./deploy.sh all               deploie toutes les captures + le portail
#
# Auth : necessite `wrangler login` au prealable.
set -e
cd "$(dirname "$0")"

WR="${WRANGLER:-$HOME/Desktop/SEO-Claude/Outils/Datafer/node_modules/.bin/wrangler}"
PORTAL_PROJECT="${PORTAL_PROJECT:-amv-contenu}"
# Laisse vide pour utiliser le compte du login ; sinon exporte CLOUDFLARE_ACCOUNT_ID avant.
NODE=/opt/homebrew/bin/node

deploy_capture(){
  local name="$1"
  local dir="captures/$name"
  [ -d "$dir" ] || { echo "Capture introuvable: $name"; exit 1; }
  local domain
  domain=$("$NODE" -e "console.log(require('./$dir/meta.json').domain)")
  local root="$dir/mirror/$domain"
  echo ">> Deploie capture '$name'  (racine: $root)  ->  $name.pages.dev"
  "$WR" pages deploy "$root" --project-name "$name" --branch main --commit-dirty=true
}

deploy_portal(){
  echo ">> Deploie portail  ->  $PORTAL_PROJECT.pages.dev"
  "$WR" pages deploy portal --project-name "$PORTAL_PROJECT" --branch main --commit-dirty=true
}

case "$1" in
  capture) deploy_capture "$2" ;;
  portal)  deploy_portal ;;
  all)
    for d in captures/*/ ; do deploy_capture "$(basename "$d")"; done
    deploy_portal
    ;;
  *) echo "Usage: ./deploy.sh capture <nom> | portal | all"; exit 1 ;;
esac
echo "Termine."
