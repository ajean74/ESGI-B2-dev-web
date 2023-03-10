//Exo 1 
const table = []
let i = 1
while (i!=11) {
    table.push(i)
    i=i+1
}
console.log(table);

//Exo 2
const semaine = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
console.log(semaine[0]);

//Exo 3
let somme
const pairs = [2,4,6,8,10]
for (let i = 0; i < pairs.length; i++) {
    somme =+ pairs[i]
    
}
console.log(somme);

//Exo 4
const fruit = ["Pomme", "Banane", "Orange", "Mandarine", "Fraise"]
Fruit.push("Abricot")
console.log(fruit);

//Exo 5
const note = [15, 12, 18, 10, 14]
let sommeMoyenne = 0
for (let i = 0; i < note.length; i++) {
    sommeMoyenne =+ note[i]
}
console.log(sommeMoyenne/note.length);

//Exo 6
const oisal = ["Hirondelle","Pigeon","Pie","Corbeau","Aigle"]
let verif = "test"
for (let i = 0; i < oisal.length; i++) {
    if (oisal[i] === verif){
        console.log("true");
        break
    }
    else {
        console.log("false");
        break
    } 
}

//Exo 7
let pays = ['France', 'Allemagne', 'Italie', 'Espagne', 'Portugal', 'Belgique']
pays.sort()
console.log(pays);

//Exo 8
const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
console.log(mois[2]);

//Exo 9
const nombre = [10, 5, 23, 17, 8, 15, 29, 11, 20]
let min = nombre[0]
for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] < min) {
        min = nombre[i]
    }
}
let max = nombre[0]
for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] > max) {
        max = nombre[i]
    }
}
console.log(min, max);

//Exo 10
const phrase = ["Abraham Lincoln additionne l'octave et ces fronts","Les philosophes se lassent de pagayer","Des dizaines de danseuses déchantent","Déclarez-vous butiner les records","Comment voulez-vous parler de trois pesos en crucifiant une élue"]
let phraseLongue = phrase[0]
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].length > phraseLongue.length) {
        phraseLongue = phrase[i]
    }
}
console.log(phraseLongue);