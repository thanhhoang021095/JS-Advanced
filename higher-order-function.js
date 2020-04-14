function math(x, func) {
	return func(x);
}

function square(num) {
	return num*num;
}
math(4, square);