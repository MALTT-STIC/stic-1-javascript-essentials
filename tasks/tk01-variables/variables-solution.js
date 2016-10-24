/*
 * TASK :
 * 1. create a variable named "score" and assign to it an initial value of 100;
 * 2. add 50 to the score and use console.log to print the current value
 * 3. divide the score by 10 and print the value again
 * 4. create a variable named "bonus" and place it on top of code, just below the declaration of score, and assign it a value of 500
 * 5. add the bonus to the score at the end of the code, so that the new value of score is incremented by 500
 * 6. print a message to the console saying "Your final score is " and the value of score
 */
var score = 100;
var bonus = 500;
score += 50; // or score = score + 50;
console.log(score);
score /= 10; //or score = score / 10;
console.log(score);
score += bonus; //or score = score + bonus;
console.log("Your final score is " + score); //or console.log("Your final score is", score);
