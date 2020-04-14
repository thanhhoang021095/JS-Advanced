// Spread elements of an array or object

// Example 1
var arrayA = ['truc', 'minh', 'quan'];
var arrayB = [1, 4, ...arrayA, 5,];
console.log(arrayB) //  [1, 4, 'truc', 'minh', 'quan', 5,]

// Example 2
var obj1 = {
	x: 1,
	y: 2,
	z: {t : 5}	
}

// THIS IS SHALLOW CLONE
var obj2 = {
	...obj1,
	u: 6
}; 
// OR var obj3 = Object.assign(obj1, u: 6)
console.log("obj1 init", obj1)
console.log("obj2 after clone obj1", obj2);

obj2.x = 3;
obj2.z.t = 100;
console.log("object 1", obj1);
console.log("object 2", obj2);

