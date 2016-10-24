/* Functions are re-usable block of codes that must be defined and then invoked */

/* Definition */
function myFirstFunction() {
    console.log("I am your first function!");
}

/* Invocation */
myFirstFunction();

/* It is also possible to declare a function as a variable, the invocation is the same */
var mySecondFunction = function () {
    console.log("I am your second function!");
}
mySecondFunction();

/* Functions can receive arguments to be used inside the function body */
function printMyArgument(myArgument) {
    console.log(myArgument);
}

//This function will log wathever value is passed as an argument
printMyArgument("Literal value"); //--> Literal value
var argumentAsVariable = "Variable value";
printMyArgument(argumentAsVariable); //--> Variable value

/* A function may receive as many arguments as needed by its logic */
function printTheSum(firstNumber, secondNumber, thirdNumber) {
    var result = firstNumber + secondNumber + thirdNumber;
    console.log(result);
}
printTheSum(10, 20, 70); //--> 100

/* A function can perform an operation (e.g. console.log) or return a value */
function double(num) {
    return num * 2;
}

var twenty = double(10);
console.log(twenty); //--> 20;
