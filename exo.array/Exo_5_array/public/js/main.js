const maVariable = "trop le seum de pas connaitre es6";

const tabExo = ["string", maVariable, 3, 46, false];
console.log(tabExo);

console.log(tabExo.length)
tabExo.pop();
console.log(tabExo);

console.log(tabExo.length)
// shift() permet de suprimmer le premier element du tableau
tabExo.shift();
console.log(tabExo);

console.log(tabExo.length)

// unshift adds them at the beginning et and push adds them at the end of the array you can add multiple objects at once
tabExo.unshift(4, );
tabExo.push(maVariable)
console.log(tabExo);

console.log(tabExo.length)


// 6
tabExo.unshift(6, 7, 8)
console.log(tabExo);

console.log(tabExo.length)

// 7

tabExo.reverse();
console.log(tabExo);

console.log(tabExo.length)

// exercice 8

const elias = [];

elias[0] = "livre";
console.log(elias)


elias[1] = "Bouquin";
alert(elias);
elias.unshift(3);
alert(elias);
elias.splice(0, 3, "un autre");
alert(elias);

alert(elias.length);

elias.shift();
elias.pop()
elias.shift();
elias.pop()
alert(elias.length);