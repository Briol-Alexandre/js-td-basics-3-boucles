let age;
let isValid = true;
do {
    age = parseInt(prompt('Entrez votre année de naissance ?'));

} while (isNaN(age) || age > 2023){
    isValid=false;
}
console.log(age + ' est une date valide')
