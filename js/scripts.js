// plik scripts.js

// *************** Zadanie 6 - Papugi i słonie ***************

var girls = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var boys = ['Jan', 'Adam', "Krzysztof", "Edward", "Michał", "Damian"];

var names = girls.concat(boys);
console.log(names);

if (names.indexOf("Ola") >= 0)
{
	console.log("To imię juz istnieje w tablicy");
}
else {
	var namesNew = names.push("Ola");
	console.log(namesNew);
}
