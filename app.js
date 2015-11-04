// INHERETING FROM THE EVENT EMMITER************************************************
'use strict';

var EventEmitter = require('events');
// var util = require('util');

class Greetr extends EventEmitter{
	constructor(){
		super();
		this.greeting = "hello world!";
	}

	greet(data){
		console.log(this.greeting + " : " + data);
		this.emit('greet', data);
	}
}
// function Greetr(){
// 	EventEmitter.call(this);
// 	this.greeting = 'hello world!';
// }

//any objects created from Greetr should have all the properties and methods from EventEmitter.
//Greetr is now also an event emitter.
// util.inherits(Greetr, EventEmitter);


// you can also now add Greetr's own porperties and methods.
// Greetr.prototype.greet = function(data){
// 	console.log(this.greeting + " : " + data);
// 	this.emit('greet', data);
// }

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
	console.log('someone just has greeted ' +  data);
});

greeter1.greet('Rosy');

// //THE EVENT TRANSMITTER*********************************
// var Emitter = require("./emitter");

// var emtr = new Emitter();

// emtr.on('greet', function(){
// 	console.log("somewhere, someone said hello!");
// });
// emtr.on('greet', function(){
// 	console.log('another greeting occured!');
// });

// console.log("hello!");
// emtr.emit('greet');

// //object properties and methods
// var obj = {
// 	greet: 'hello'
// }
// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);

// //functions and arrays
// var arr = [];
// arr.push(function(){
// 	console.log('hola persona');
// }



// //using native (core) modules
// var util = require('util');

// var name = "Rosy";
// var greeting = util.format("hello, %s", name);
// util.log(greeting); //util.log is like console.log, but adds a time stamp.


// //module patterns
// var greet = require('./greet1');
// greet();

// var greet2 = require('./greet2').greet;
// greet2();

// var greet3 = require("./greet3");
// greet3.greet();

// var Greet4 = require('./greet4');
// var greeter = new Greet4();
// greeter.greet();

// var greet5 = require("./greet5");
// greet5.greet();


// //Needing to export two modules with similar code (by making a greetings folder with an index.js file
// 	// that stores all of the module exports using a js object literal.)
// var greet = require('./greet');
// greet.english();
// greet.spanish();


// //immediately invoked function expressions. we need a funciton, and then have that function be immediately ran
// //so creating a function, and then immediately invoking that funciton with the parenthesies at the end.
// (function(){
// 	var firstname = "John";
// 	console.log(firstname);
// }());

// //here, we are immediately invoking the function, and this shows that you can pass in a parameter
// //to your immediately invoked function, and then call it with an argument.
// (function(lastname)){
// 	var firstname = "john";
// 	console.log(lastname);
// }('Doe'));

// // passing by reference: 
// 	//passing an object to a funciton will change the object.
// 	// you can add and change properteis on an object by passing it to a funciton., 
// 	// but this is no the case with primitive values (passing by value)

// function changeObj(d){
// 	d.prop1 = function(){};
// 	d.prop2 = {};
// }

// var c = {};
// c.prop1 = {};
// changeObj(c);
// console.log(c);

// //passing by value
// function change(b) {
// 	b = 2;
// }

// var a = 1;
// change(a);
// console.log(a);


// function Person(firstname, lastname) {

// 	this.firstname = firstname;
// 	this.lastname = lastname;
// }
// // adding a new greet prototype for the Person funtion consturtor that will then
// // be accessible to all new Person's made.
// Person.prototype.greet = function(){
// 	console.log("hello, " + this.firstname + " " + this.lastname);
// }

// // making a new Person named john.
// var john = new Person('John', "Doe");
// john.greet();

// // You can look at an object's prototype by:
// // console.log(john.__proto__);

