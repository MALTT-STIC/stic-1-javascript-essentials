/*
 * TASK :
 * 1. build an array of objects called "countries" to emulate this datasheet
 *
 * country      | continent   | capital
 * -------------------------------------------
 * Switzerland  | Europe      | Bern
 * -------------------------------------------
 * Australia    | Oceania     | Canberra
 * -------------------------------------------
 * China        | Asia        | Beijing
 * -------------------------------------------
 *
 * 2. Create a variable named "output" that holds this phrase "Beijing is the capital of China, the largest country in Asia" using the combination of array and object identificators
 * 3. Log the content of the variable in the console
 *
 *
 */

var countries = [
    {
        country: "Switzerland",
        continent: "Europe",
        capital: "Bern"
    },
    {
        country: "Australia",
        continent: "Oceania",
        capital: "Canberra"
    },
    {
        country: "China",
        continent: "Asia",
        capital: "Beijing"

    }
];

var output = countries[2].capital + " is the capital of " + countries[2].country + ", the largest country in " + countries[2].continent;
console.log(output);
