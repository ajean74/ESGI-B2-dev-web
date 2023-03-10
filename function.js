//Exo 1
function addition(a,b){
    somme = a + b
    return somme
}

console.log(addition(3,5))

//Exo 2
function grandNombre(tableau) {
    let nombreHaut = tableau[0]
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > nombreHaut) {
            nombreHaut = tableau[i]
        } 
    }
    return nombreHaut
}

console.log(grandNombre([737,738,855,567,51,940,180,481,250,92,744,919,91,890,301,530,478,149,670,354,871,891,243,537,910,885,397,242,913,340,799,372,233,900,99,429,108,979,691,72,205,851,792,598,560,976,771,283,574,268,127,614,523,503,316,823,924,374,977,20,356,704,317,371,724,857,873,860,684,570,418,212,154,27,8,682,57,866,896,559,120,961,960,133,836,831,384,395,592,76,790,733,575,49,246,774,68,158,714,711]));

//Exo 3
function chaineDeCaractere(chaine) {
    const voyelle = "aeiouyAEIOUY"
    let newChaineDeCaractere = chaine
    for (let i = 0; i < newChaineDeCaractere.length; i++) {
        newChaineDeCaractere = newChaineDeCaractere.replaceAll(voyelle[i],'')
    }
    return newChaineDeCaractere
}

console.log(chaineDeCaractere("ibcfLDiWMYhsPiuRgSDEmgrVcbFvBllmEbUGhlBcFuLYyhJALHIqewQyFHRhAiYalBSAkbyKRlCYoVrkhQyaHKAHUeWgPJyYoiji"));

//Exo 4
function tableauChaineDeCaractere(chaine2) {
    return chaine2.sort(function(x,y) {
        return x.toString().localeCompare(y.toString())
    });
}

console.log(tableauChaineDeCaractere(["p","L","o","H","L","c","I","w","w","J","d","n","g","V","r","z","f","z","I","m","C","d","o","s","L","m","O","l","g","w","H","X","Y","L","q","U","A","z","I","X","V","p","l","U","S","D","T","S","n","x","h","M","u","B","Q","O","y","T","q","X","L","F","D","k","y","p","b","u","e","T","k","t","q","G","s","j","D","h","a","Q","M","j","Z","s","Q","q","p","M","B","F","H","u","z","n","y","f","F","g","W","s"]));

//Exo 5 


//Exo 6
const tableauObjet = [
    {nom: 'DUPONT', prenom: 'Jeanne', classe: 'A'},
    {nom: 'ALTAIR', prenom: 'Luc', classe: 'A'},
    {nom: 'DUPONT', prenom: 'Pierre', classe: 'B'},
    {nom: 'DUPONT', prenom: 'Arthur', classe: 'A'},
    {nom: 'PIONG', prenom: 'Chang', classe: 'B'},
    {nom: 'POPOULOS', prenom: 'Dimitrius', classe: 'B'},
    {nom: 'ATAC', prenom: 'Djamila', classe: 'A'}
]
function fonction(objet, propriete) {
    let resultat = []
    for (const index of objet) {
        resultat.push(index[propriete])
    }
    return resultat
}

console.log(fonction(tableauObjet, "nom"));

//Exo 7
function decroissant(tableauNombre) {
    let ordreDecroissant = []
    ordreDecroissant = tableauNombre.sort(function(a, b) {
        return a - b;
    });
    ordreDecroissant = ordreDecroissant.reverse()
    return ordreDecroissant
}

console.log(decroissant([893,825,670,356,159,205,559,231,38,603,346,347,953,144,226,413,126,674,918,821,686,600,4,281,229,410,710,267,442,297,317,789,746,377,913,863,509,451,593,895,908,504,476,487,622,420,856,990,707,518,645,540,499,761,970,39,50,596,755,13,355,530,58,162,608,873,291,21,237,137,254,1,578,666,923,519,25,690,241,955,543,927,333,639,416,698,225,49,933,964,892,732,793,454,979,621,748,103,369,88]));

//Exo 8
function majuscules(chaine3) {
    let chaineMajuscules = ""
    chaineMajuscules = chaine3.toUpperCase()
    return chaineMajuscules
}

console.log(majuscules("xmmqxftzmjrpwollftwhezhpadyhdtghmjhaxevuckcskficopxfxyadnptnxzhzprduohfqqfhklzjylkdbyvmtddhyxnxfjfot"));

//Exo 9
function nombreVoyelle(chaine4) {
    let resultatVoyelle = 0
    const voyelle = "aeiouyAEIOUY"
    for (let i = 0; i < chaine4.length; i++) {
        if (voyelle.includes(chaine4[i])) {
            resultatVoyelle ++
        }
    }
    return resultatVoyelle
}
console.log(nombreVoyelle("gIvfpxQoMHpuYhvTKVfxmlrRUxFDaEtWGxdleBXofbIMfAEGlNdaweIsfCRCqCGgqvxZIeVrJPAatdBgRIjrZLMsWyBIuJdsnfJR"));

//Exo 10
function consonneMajuscules(chaine5) {
    let chaineConsonneMajuscules = ""
    const consonne = "zrtpqsdfghjklmwxcvbn"
    for (let i = 0; i < chaine5.length; i++) {
        if (consonne.includes(chaine5[i])) {
            chaineConsonneMajuscules += chaine5[i].toUpperCase()
        }
        else {
            chaineConsonneMajuscules += chaine5[i]
        }
    }
    return chaineConsonneMajuscules
}
console.log(consonneMajuscules("lmdgwpmgbywrvkzwqmtqaoiwkiungktknphtuecrvbykordmdobbyvjxqsoxwfhjkbbzoitoaczbifbtbecrcnyhyffybptrymvg"));