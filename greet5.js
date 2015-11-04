// returning only what you need to app.js, so greeting variable will not be accessible to app.js, but
// it will be used when you use the greet function.

var greeting = "hello errbody";

function greet(){
	console.log(greeting);
}

module.exports = {
	greet: greet
}