class Animals {
	static eat() {
		console.log('Eating...');
	}
	run() {
		console.log('Running...')
	}
}

Animals.eat();

// You can only use run function 
// when create new object from class Animals
var tiger = new Animals()
tiger.run();