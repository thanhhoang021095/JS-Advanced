// 1. Using Class for Inheritance
class Animals {
	constructor(name) {
		this.name = name
	}

	eat() {
		console.log('Eat...')
	}
}	

class Cats extends Animals {
	run() {
		console.log('Run...')
	}
}

const lion = new Cats('Lion King')
lion.eat()

// ============================================

// 2. Using constructor function for inheritance

function Fish(name) {
	this.name = name;
}

Fish.prototype.swim = function () {
	console.log('Swimming...')
}

function Shark(name) {
	Fish.apply(this, arguments)
}
Shark.prototype = new Fish();

const bigShark = new Shark('white')
console.log (bigShark)