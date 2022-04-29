const array = [1, 2, 3];

console.log(...array);

// strange bug where table only displays 2 out of all

array.push("Nawfal");

console.log(array)

array[1] = 4;

console.log(array);

array.pop()

console.log(array)


// splice(&,&,&) le premier & represente l'index de l'element, le secod & le nombre d'elements a retirer, et le troisième & represente un element a ajouter
array.splice(1, 1);
console.log(...array)