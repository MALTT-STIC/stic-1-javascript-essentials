/*
 * TASK: given this data about Switzerland :
 * - population : 8341000
 * - area : 41285
 * - foundation : 1291
 * - capital : Bern
 *
 * 1. Create an object named "swi" and assign those values to the relative keys
 * 2. create a variable named "density" and calculate the population per square km
 * 3. Console log the phrase "Switzerland, whose capital is xxxx, was founded in xxxx and today has a density of xxx/km2" using the object and variable values
 */

var swi = {
    population: 8341000,
    area: 41285,
    foundation: 1291,
    capital: "Bern"
};

var density = swi.population / swi.area;
console.log("Switzerland, whose capital is " + swi.capital + ", was founded in " + swi.foundation + " and today has a density of " + density + "/km2");
