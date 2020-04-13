var Car = {
	name:"Audi",
	run: function() {
		var fixed = function() {
			console.log(this.name)
		}		
		fixed.bind(this)()
	}
}
Car.run()