// SHALLOW COPY
const obj1 = {
	x: 1,
	y: { z: 2}
}
console.log("obj1 init", obj1);
const obj2 = {...obj1}; // => This is SHALLOW COPY
obj2.y.z = 5; 
console.log("obj1 with shallow copy", obj1)
console.log("obj2 with shallow copy", obj2);

// ===========================================

// DEEP COPY
const obj3 = {
	a:3,
	b: { c: 4}
}
const obj4 = JSON.parse(JSON.stringify(obj3));
// => This is DEEP COPY
obj4.b.c = 10;
console.log("obj3 with deep copy", obj3);
console.log("obj4 with deep copy", obj4);
