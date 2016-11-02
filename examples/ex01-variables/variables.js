/* Variables are created using the var keyword. They should always appear on top of the code (or block of code -> see functions later on) */
var myVar;

/* They are assigned to a value with the assignement symbol = */
myVar = 100;

/* This operation can be done in one step */
var count = 1;

/* Variables can be used as reference to change their own values */
count = count + 1; //count now equals 2
count = count + 1; //count now equals 3

/* There are shortcuts to obtain the same result */
count += 1; //count now equals 4
count *= 10; //count now equals 40

/* Values can be of different kinds. These are "primitives" (i.e. simple) */

/* String */
var master = "MALTT"; //Wrap the text in double quotes
var unity = 'TECFA'; //Wrap the text in single quotes
var numberAsString = "3"; //If you use quotes around a number, it becomes a string
var escapingQuotes = 'It\'s time to learn JavaScript!'; //You need to escape single or double quotes if you use them to wrap the value and the value contains them
var escapingEscape = "You need \\ to escape"; //Two backslash mean escape the escape symbol

//If you use the + operator with strings, you concatenate them
var who = "world";
var greeting = "Hello " + who; //--> "Hello world"

/* Numbers */
var malttCredits = 120;
var roundedPi = 3.14;

//Be careful that numbers can also be represented as string, but that changes how they respond for instance to the + operator
var notNum = "1";
var notNum2 = "7";
var notExpectedResult = notNum + notNum2; //--> "17"

/* Booleans */
var isFriday = true;
var isMonday = false;

/* Null & Undefined */
var iAmNull = null;
var iAmNotDefined = undefined; //This equals to just declaring var iAmNotDefined;

/* MORE DIFFICULT */

/* Convertion : you can convert value's type with global functions (see ex04 for functions in general) */
Number("24"); //--> 24
String(100); //--> "100";
parseInt("12px", 10); //--> 12
parseFloat("14.2345 mm"); //--> 14.2345

/* Be aware that JavaScript automatically converts value's types in way that may be unpredictables if you are not used to the language */
var boolPlusNum = true + 4; //--> 5
var stringPlusNum = "6" + 6; //--> 66
var stringTimesNum = "6" * 6; //-> 36
