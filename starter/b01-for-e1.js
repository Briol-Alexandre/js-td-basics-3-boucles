/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : initialisez un compteur pour définir OÙ COMMENCER
    - condition : écrivez une condition sur le compteur pour spécifier QUAND ARRÊTER
    - étape : incrémentez le compteur pour définir COMMENT AVANCER dans la boucle
*/

/*
EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/

// 1°) sans boucle : Écrivez ici toutes les instructions à la main, une par une
let num=1;
console.log(num);
num =2;
console.log(num);
num =3;
console.log(num);
num =4;
console.log(num);
num =5;
console.log(num);
num =6;
console.log(num);
num =7;
console.log(num);
num =8;
console.log(num);
num =9;
console.log(num);
num= 10;
console.log(num);
num= 11;
console.log(num);
num= 12;
console.log(num);
num= 13;
console.log(num);
num= 14;
console.log(num);
num= 15;
console.log(num);
num= 16;
console.log(num);
num= 17;
console.log(num);
num = 18;
console.log(num);
num= 19;
console.log(num);
// 2°) avec boucle FOR : Écrivez ici le code de la boucle FOR

for (let i =1; i<18; i++){
    console.log(i)
}
// N.B. TABLE D'ÉVOLUTION DES VARIABLES :
//   nbre      nbre < =10           console.log(nbre)        nbre++
// nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
// nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
// ...
// nbre = 10,  10 <= 10 true,        affiche 10,         nbre passe à 10+1 = 11
// nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
