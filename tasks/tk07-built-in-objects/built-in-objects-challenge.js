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
    var score1 = rollDice();
    var score2 = rollDice();

    if (score1 > score2) {
        console.log("Player 1 wins " + score1 + " to " + score2);
    } else if (score2 > score1) {
        console.log("Player 2 wins " + score2 + " to " + score1);
    } else {
        console.log("It's a draw at " + score1 + "!");
    }
}
