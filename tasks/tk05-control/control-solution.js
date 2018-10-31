/**
 * TASK :
 * 1. Build the logic inside the comparePopulation() function given below, so that the function compares two countries from the given countries object. The function must print the appropriate message :
 * - {The name of first country} population is bigger than {the name of second country}
 * - {The name of first country} population is smaller than {the name of second country}
 * - {The name of first country} has the same population as {the name of second country}
 * 2. Use the function three times comparing :
 * - Switzerland vs. France
 * - France vs. Italy
 * - Italy vs. Italy
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

//1. Build the function to compare two countries
function comparePopulation(firstCountry, secondCountry) {
  //Write the logic of the function

  if (firstCountry.population > secondCountry.population) {
    console.log(
      firstCountry.country +
        " population is bigger than " +
        secondCountry.country
    );
  } else if (firstCountry.population < secondCountry.population) {
    console.log(
      firstCountry.country +
        " population is smaller than " +
        secondCountry.country
    );
  } else {
    console.log(
      firstCountry.country +
        " has the same population as " +
        secondCountry.country
    );
  }
}

//2. Use the function with the appropriate arguments
comparePopulation(countries[0], countries[1]);
comparePopulation(countries[1], countries[2]);
comparePopulation(countries[2], countries[2]);
