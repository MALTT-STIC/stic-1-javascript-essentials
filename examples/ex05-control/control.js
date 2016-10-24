/* Control structures allows to execute code based on some conditions */

/* The if statements accept an argument that is evaluated either to true or to false */
var subject = "JavaScript";
if (subject == "JavaScript") {
    console.log("Yes, today's subject is JavaScript");
}
//This equals saying
if (true) {
    console.log("Yes, today's subject is JavaScript");
}

//It is also possible to check for inequality
if (subject != "JavaScript") {
    console.log("I will not be logged!");
}
//This equals saying
if (false) {
    console.log("I will not be logged!");
}

//An inequality can be true, which means that "it is true that is is false"
if (subject != "Flash") {
    console.log("You are right, today's subject is NOT Flash");
}

/* It is possible to add further checks, which will be evaluated only if the previous checks fails */
if (subject == "Flash") {
    console.log("I will not be logged!");
} else if (subject == "PHP") {
    console.log("I will not be logged!");
} else if (subject == "JavaScript") {
    console.log("Yeah, you got it: JavaScript is the subject!")
} else {
    console.log("I would have been logged if none of the previous checks were true");
}

/* There are two kinds of equality (or inequality) checks : "normal" and "strict"
 * - normal checks if two values are the same
 * - strict checks if two values AND value types are the same
 */

var number = 3;
var numberAsString = "3";

//Equality
if (number == numberAsString) {
    console.log("Ok, it's the same value");
}
if (number === numberAsString) {
    console.log("I will not be logged because the type is different : string vs. number");
}

//Inequality
if (number != numberAsString) {
    console.log("I will not be logged because the values are the same");
}
if (number !== numberAsString) {
    console.log('Yeah, you are right: 3 as a number is not exactly the same as "3" as a string');
}

/* You can also check for greater than and lesser than (with the possibilty to check for equality at the same time) */
if (6 > 3) {
    console.log("Yes, 6 is greater than 3");
}

if (6 >= 6) {
    console.log("Yes, 6 is greater or equal to 6");
}


/* It is possible to combine more than one check in the same expression using :
 * - && --> AND
 * - || --> OR
 */

var prof = "DKS";
var assistant = "MAF";

if (prof == "DKS" && assistant == "MAF") {
    console.log("Both are true");
}

if (prof == "DKS" || assistant == "XXX") {
    console.log("At least one is true");
}

if (prof == "DKS" && assistant == "XXX") {
    console.log("It will not be logged, both must be true");
}

if (prof == "XXX" || assistant == "XXX") {
    console.log("It will not be logged, at least one must be true");
}
