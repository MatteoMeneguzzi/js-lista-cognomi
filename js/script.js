//
// // Consegna
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc..tipici degli array),
// del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
//

var lastName = prompt("What is your last name?").toUpperCase().trim();

while (!isNaN(lastName)) {
	lastName = prompt("Wrong digit, please do not digit numbers")
		.toUpperCase()
		.trim();
}
console.log(lastName);

var names = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

names.push(lastName);
console.log(names);

names.sort();
console.log(names);

var position = names.indexOf(lastName);
console.log(position + 1);

var items = " ";

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
	items += "<li>" + names[i] + "</li>";
}

document.getElementById("name-list").innerHTML = items.toUpperCase();

document.getElementById("my-name").innerHTML =
	"Your lastname is number " + (position + 1) + "!";
