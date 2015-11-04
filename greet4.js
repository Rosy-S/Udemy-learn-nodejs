// passing an object constructor function to module.exports, so youc an make new objects 
// in app.js.

function Greetr(){
	this.greeting = "hello world!!!!!!!!";
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = Greetr;