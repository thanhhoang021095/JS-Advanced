// Example 1

function sum(a,b) {
    const c = a + b;
    return function () {
        console.log(c)
    }
}

sum(1,2)()

//  ===============================

// Example 2

function minus(first) {
	return function(second) {
		return first - second;
	}
}

var inputFirstNum = minus(9);
var result = inputFirstNum(5);
console.log(result)