let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.shift();
monTab.push('orange');
monTab.unshift('banane');

monTab[1] = monTab[1].toUpperCase()

console.log(monTab);

monTab.reverse();

console.log(monTab);

// 2eme 

let chiffres = [4, 5, 2, 1, 12, 14, 15, 34, 23];




//  
/* chiffres.sort(function (a, b) {
     if (a > b) return 1;  l'index vas etre augmenter
     if (a < b) return -1; l'index vas etre diminué
     return 0; l'index ne serra pas changé
 }); */


chiffres.sort((a, b) => a - b);

console.log(chiffres);

chiffres.sort((a, b) => b - a);
console.log(chiffres);


chiffres = chiffres.join("-");
console.log(chiffres)

chiffres = chiffres.split("-");
console.log(chiffres)



const tableau = [];

tableau.push("salut", "dit", 2, 3, 4, 5, "non", "oui", "environ", 8);
console.log(tableau);
console.log(tableau.length);
for (i = 0; i < tableau.length; i++) {
    console.log(`L'index de ${tableau[i]} est: ${tableau.indexOf(tableau[i])}`)
}


tableau.splice(7, 1);

const coding23 = ["Sarah", "Koumeil", "Nawfal", "Felicien", "Enzo", "Faisal", "Liridon", "Maxime", "Zakaria", "Mounia", "Sylvaine", "Louis", "Yves"]


// Louis est absent bon retablissement à lui.
coding23.splice(11, 1);

console.log(coding23);