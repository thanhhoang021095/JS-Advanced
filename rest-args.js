// Collect arguments of function 
// become elements in ARRAY

// Example 1
function showNum(...nums) {
	console.log(nums) 
}

showNum(1,2,5,6);	// [1,2,5,6

//  Example 2
function sumMath(...nums) {
	var result = nums.reduce((sum, num) => sum + num, 0)
	return result;
}

sumMath(5,10,6,24)

// Example 3
function concatString(seperator,...strings) {
	return strings.join(seperator)
}

concatString('.', 'minh', 'thu', 'toan')