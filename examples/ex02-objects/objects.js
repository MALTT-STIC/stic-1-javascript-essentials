/* Objects are association between keys and values. */


/* There are different ways to create object, here is the most common one */

var myFirstObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

/* Another way */
var mySecondObject = {};
mySecondObject.key1 = "value1";
mySecondObject.key2 = "value2";
mySecondObject.key3 = "value3";

/* Object keys should respect the same standards for variable names. If they do not, you must use an alternative syntax (see also Array in the next exemple) */

var myThirdObject = {};
myThirdObject["my different key 1"] = "value1";
myThirdObject["my different key 2"] = "value2";
myThirdObject["my different key 3"] = "value3";

/* Object values can be any kind of type */
var exercice = {
    num: 3,
    subject: "JavaScript",
    credits: 1,
    objectives: {
        technical: "Learn JavaScript fundamentals",
        theoretical: "Computational and symbolic thinking"
    }
};

/* Regardless of how the object was created, it is possible to change a value afterwards */
myFirstObject.key1 = "my new value 1";

/* To obtain the value of an object, just write its key */
console.log("The value of the my second object's key is ", mySecondObject.key2); //--> value2

/* In case the key does not respect variable names, use the square brackets */
console.log("The value of the my third object's key is ", myThirdObject["my different key 3"]); //--> value3

/* For encapsulated objects, use more than one dots */
console.log("Theoretical objectives for the exercices:", exercice.objectives.theoretical); //-> Computational and symbolic thinking
