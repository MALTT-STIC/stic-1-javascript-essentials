/* Arrays are list of items that are indexed starting from 0. */

var myFirstArray = ['STIC I', 'STIC II', 'STIC III', 'STIC IV'];

/* You can identify an element from the list through the numerical index */
console.log(myFirstArray[1]); //--> STIC II and NOT STIC I

/* Arrays can contain any kind of values */
var myMixedArray = [
    12,
    'I am a string',
    false,
    {
        name: "Also objects",
        type: "Object"
    }
];

console.log(myMixedArray[3].name); //--> Also objects

/* MORE DIFFICULT */

/* It also possible to build multidimensional arrays, i.e. arrays inside an array */
var myMultiArray = [
    //First array
    ['HTML5', 'CSS', 'JavaScript'],
    //Second array
    ['Node.js', 'PHP', 'Phython']
];

console.log(myMultiArray[0][2]); //--> JavaScript

/* A common use is to build arrays of objects, which may be used as a sort of datasheet with rows and columns */
var data = [
    //First object
    {
        cours: 'STIC I',
        credits: 6,
        prof: 'DKS'
    },
    //Second object
    {
        cours: 'ERGO I',
        credits: 6,
        prof: 'MB'
    }
];

console.log("The cours " + data[0].cours + " is given by " + data[0].prof + " and accounts for " + data[0].credits + " credits"); //--> The cours STIC I is given by DKS and accounts for 6 credits
