// Charge les variables d'environnement
require("dotenv").config();

// Récupère les variables depuis process.env
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affiche le message
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
