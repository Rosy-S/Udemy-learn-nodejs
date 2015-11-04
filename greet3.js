// here, we are replacing exports with your own object, Greetr

function Greetr(){
	this.greeting = "hello world!!!";
	this.greet = function(){
		console.log(this.greeting);
	}
}
module.exports = new Greetr();
//this allows so that module.exports makes a brand new object, Greetr.