#!/bin/bash
# Double-clique pour choisir une capture et l'ouvrir dans le navigateur.
cd "$(dirname "$0")"
NODE=/opt/homebrew/bin/node
[ -x "$NODE" ] || NODE=$(which node)
PORT=8787

# Liste les captures
caps=()
for d in captures/*/ ; do
  [ -d "$d" ] && caps+=("$(basename "$d")")
done

if [ ${#caps[@]} -eq 0 ]; then echo "Aucune capture dans captures/"; read -n1; exit 1; fi

echo "=== Copies de sites disponibles ==="
i=1
for c in "${caps[@]}"; do
  title=$("$NODE" -e "try{console.log(JSON.parse(require('fs').readFileSync('captures/$c/meta.json','utf8')).title)}catch(e){console.log('$c')}")
  echo "  $i) $title  [$c]"
  i=$((i+1))
done
echo
read -p "Numero de la capture a lancer : " choice

idx=$((choice-1))
name="${caps[$idx]}"
if [ -z "$name" ]; then echo "Choix invalide."; read -n1; exit 1; fi

entry=$("$NODE" -e "console.log(JSON.parse(require('fs').readFileSync('captures/$name/meta.json','utf8')).entryPath)")
echo "Lancement de $name ..."
echo "(Laisse cette fenetre ouverte. Ferme-la pour arreter.)"
( sleep 1 ; open "http://localhost:$PORT$entry" ) &
exec "$NODE" serve.js "$name" "$PORT"
