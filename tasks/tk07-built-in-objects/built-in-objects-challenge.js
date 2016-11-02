/*
 * TASK : use the given rollDice() function to emulate 10 games between two players.
 * Compare the score obtained at each thorw and output a message saying :
 * "Player 1 wins X to Y", "Players 2 wins X to Y", "It's a draw at X!" according to the outcome
 *
 * Please note that there are many ways to obtain the same result.
 */

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

/* Code here */

for (var i = 0; i < 10; i++) {

}







/*
 * If you are lost, try to follow the instructions at the bottom of the page before looking at the solution
 *
 */









/*
 * INSTRUCTIONS
 * Inside the for cycle :
 * 1. create a variable and use the given function to retrieve a random number
 * 2. make the same for a second variable
 * 3. Create a conditional check that evaluates the three possibles outcomes :
 * - the first var is greater than the second
 * - the second var is greater than the first
 * - the two var are equal
 */
