// 
class Cars {
	constructor(brand, power, color) {
		this.brand = brand;
		this.power = power;
		this.color = color;
	}

	run() {
		console.log('Running...')
	}
}

class Ferrari  extends Cars {
	constructor(brand, power, color, price) {
		super(brand, power, color);
		this.price = price;
	}

	speedRun() {
		super.run();
		console.log('can reach 485 km/h')
	}
}

var GTB_488 =  new Ferrari('Ferrari', '800HP', "red", 4800);
console.log(GTB_488);
GTB_488.speedRun()