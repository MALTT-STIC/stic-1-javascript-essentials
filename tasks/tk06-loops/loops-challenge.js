/*
 * TASK :
 * 1. Iterate all the elements of the given array countries using the countries.length property
 * 2. log to the console for each iteration the message "The country XXX has an area of XXX km2" using the array/object notation
 * 3. Use the given betterPrintDensity() function from task 04 to log the density to the console
 */

var countries = [
    {
        country: "Switzerland",
        area: 41285,
        population: 8341000
    },
    {
        country: "France",
        area: 643801,
        population: 66736000
    },
    {
        country: "Italy",
        area: 301338,
        population: 60674003
    }
];

function betterPrintDensity(currentCountry) {
    var density = currentCountry.population / currentCountry.area;
    console.log(currentCountry.country + " has a density of " + density + "/km2");
}

/* Code here */
