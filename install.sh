#!/bin/bash

# Télécharger Node.js
curl -o node.tar.gz https://nodejs.org/dist/v20.11.0/node-v20.11.0-darwin-x64.tar.gz
tar -xzf node.tar.gz
mv node-v20.11.0-darwin-x64 node

# Ajouter Node.js au PATH
export PATH=$PATH:$(pwd)/node/bin

# Installer les dépendances
npm install

# Nettoyer
rm node.tar.gz 