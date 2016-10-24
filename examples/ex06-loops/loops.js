/*
 * Loops are mechanisms to repeat a code for a number of times
 * There are different kind of loops in JS, we show two here :
 * - for
 * - while
 */

/*
 * For accepts 3 arguments :
 * 1. an initial condition
 * 2. an exit condition (i.e. the final condition)
 * 3. an incremental change in the condition
 */

//We usually use the variable i to specifiy a loop for
for (var i = 1; i <= 10; i++) {
    console.log(i); //--> will output numbers from 1 to 10
}

//In modern JavaScript (i.e. since 2015) you can often see let instead of var. For the level of this introduction think at them as the same thing.
for (let i = 10; i <= 100; i = i + 10) {
    console.log(i); //--> will output every decimal from 10 to 100
}

//The for loop is useful to iterate arrays, since we can use the iterator as the index of the array (which starts from 0)
//To define the exit condition, we use the .length property (see example 06 for further details)
var cours = ['STIC I', 'STIC II', 'STIC III', 'STIC IV'];
for (var i = 0; i < cours.length; i++) {
    console.log(cours[i]);
}

/*
 * The while function accepts only an argument, which is evaluated to ture or false.
 * The loop ends only when the evaluation is true
 * This means that inside the loop there must be a change, otherwise the loop will never stop!
 */

var count = 1;
while (count <= 10) {
    console.log(count);
    //Increment count of 1
    count++;
}
