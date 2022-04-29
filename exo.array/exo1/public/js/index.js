let array = ["coding11", "coding12", "coding13"];

console.log(array);
console.log(array.toString());

console.log(array.length);
// Ont peux utiliser cette methode manuelle pour afficher chaque array separemment
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);



// ont peux utiliser une loop pour les afficher un par un


console.log('------------ loop method ------------')
for (i = 0; i < array.length; i++) {
    console.log(array[i])
    // console.table(array[i])
}