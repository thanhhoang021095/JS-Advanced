// var affect by FUNCTION SCOPE
// let, const affect by BLOCK SCOPE : if, for... except object

// ======================================

// EXPAMPLE 1: var
for(var i = 0; i < 5; i++) {
	console.log(i);
}
console.log(i); // => 1, 2, 3, 4, 5

// ======================================

// EXAMPLE 2: let
if(true) {
	let a = 1;
	// do something...
	a = 2;
	console.log(a); // => 2
}

console.log(a)  // Error

// ======================================

// EXAMPLE 3: let
if(true) {
	const b = 3;
	// do something...
	b = 4;
	console.log(b); // => ERROR const declare
}

console.log(b)  // Error