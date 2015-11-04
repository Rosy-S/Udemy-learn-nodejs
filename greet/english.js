// This module shows how you can use json to pass data to your functions and then export tem 
// with module.exports.

var greetings = require('./greetings.json');

var greet = function(){
	console.log(greetings.en);
}


// var greet = function(){
// 	console.log('hello');
// }

module.exports = greet;