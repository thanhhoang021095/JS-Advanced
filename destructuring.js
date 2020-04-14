// Destructuring an ARRAY
var arr = [1,23,4,100, 24];
var [x,y, , , z] = arr;
console.log(x, y, z)     // x = 1, y = 23
	
// =========================

// Destructuring an OBJECT

var bird = {
	name: "eagle",
	color: "brown",
	fly: function() {
		console.log('Flying...');
	}
}

var {name, ...parrot} = bird;
console.log(parrot);
parrot.fly()
