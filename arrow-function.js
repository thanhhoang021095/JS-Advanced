
var Car = {
	name:"Mercedes",
	run: function() {
		var fixed = () => {
			console.log(this.name)
		}		
		fixed()
	}
}
Car.run()