// apply: func.apply(this, [ params1, params2, ....])

// ==================================
function sumMath() {
	var numArr = [...arguments];
	var result = numArr.reduce((sum, num) => sum + num, 0);
	return result;
}

function averageMath() {
	var sumVal = sumMath.apply(null, arguments);
	return sumVal / arguments.length;
}

averageMath(1,2,4,5);
// ==================================

