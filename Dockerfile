# Utilisez une image de base contenant Node.js
FROM node

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances de l'application

RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel l'application écoute
EXPOSE 3000

# Démarrez l'application React lorsque le conteneur est lancé
CMD ["npm", "start"]

