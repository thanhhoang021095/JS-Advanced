// 1. Object can use like array
var ObjLikeArr = {
	0: "2",
	1: "4",
	2: "6",
	length: 3
}

for( let i = 0; i < ObjLikeArr.length; i++) {
	console.log(ObjLikeArr[i])
}

// =================================== 

// 2. Transform ObjLikeArr to an Array
var newArr = Array.from(ObjLikeArr);

//  ==================================

// 3. arguments in function (USE OBJECT LIKE ARRAY)
function sum() {
	// 	YOU CAN USE BOTH WAY:

		// var sum = 0;
		// for(let i = 0; i < arguments.length; i++) {
		// 	sum += arguments[i]; 
		// }
		// return sum;

		var numArr = Array.from(arguments);
		var sum = numArr.reduce(function(sum, num) {
			return sum + num;
		}, 0)
		return sum;
}	

sum(1, 2, 3, 4);   //sum = 10