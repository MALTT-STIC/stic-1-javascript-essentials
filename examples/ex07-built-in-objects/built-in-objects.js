/*
 * JavaScript comes with built-in objects that allows you to perform some operations
 * Objects can have two kind of elements :
 * 1. properties, which are the equivalent of variables and holds values
 * 2. methods, which are the equivalent of functions and performs operations
 *
 * Properties and values depend on the type of the object/value
 */

//String have properties and methods to modify text
var phrase = "This is an object of type string";
console.log(phrase.length); //--> Outputs the number of chars (included spaces) in the string using the .length properties
console.log(phrase.toUpperCase()); //--> Output the string in uppercase using the .toUpperCase() method

//There is a Math object that provides features to perform mathematical operations
var random = Math.random(); //--> provide a random number between 0 and 0,9999999999999999
console.log(random);
var dice = Math.floor(Math.random() * 6 + 1); //--> provide an integer random number between 1 and 6
console.log(dice);

//Arrays have many properties and objects
var courses = ['STIC I', 'STIC II'];
console.log(courses.length); //--> 2
courses.push('STIC III'); //add STIC III to the array
console.log(courses.length); //--> 3
courses.push('STIC IV'); //add STIC IV to the array
courses.reverse(); //revert the order of the elements
console.log(courses[0]); //--> STIC IV

//There is a Date object
var today = new Date();
console.log(today); //--> Outputs the date in JavaScript format
console.log(today.getHours() + ":" + today.getMinutes()); //--> Output current times using the getHours() and getMinutes() methods
