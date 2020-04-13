// call: func.call(this, param1, param2, ....)

function showName() {
	console.log(`hello, my name is ${this.name}`);
}

var myFriend = {
	name: "Minh"
}

showName.call(myFriend);
