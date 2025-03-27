/* TEST JS */
/*
    1. Problem 1 - (A)
    Create an Object with a "hello" method that writes "Hello <name> in the console"
*/
const greetObject = {
	hello: function(name) {
		console.log(`Hello ${name}`);
	}
}

const greet = greetObject.hello('Marcos');

/*
    2. Problem 1 - (B)
    How would you make name inmutable?
    (Can write or just describe)
*/

//We can achieve this by using Object.freeze
Object.freeze(greetObject);
greetObject.hello = function() {};
console.log(greetObject); //Must show on console the initial definition in the 'greetObject' variable asignation

/*
    3. Problem 2
    Write a funtion that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/

const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]

const DEFAULT_CITIES_LIMIT_TO_SHOW = 5;

function logMostCommonCities(cities, limit) {
    
    const citiesToShowLimit = parseInt(limit) || DEFAULT_CITIES_LIMIT_TO_SHOW;
    
    if (typeof cities === 'undefined') {
        throw new Error('Param cities is invalid');
    }
    
    if (!Array.isArray(cities)) {
        throw new Error('Param cities is not a valid data type');
    }
    
	const citiesCount = cities.reduce((result, element) => {
		
		if (!(element in result)) {
		    result[element] = 1
		} else {
		    result[element]++;
		}
		
		return result;
	}, {});
	
    const sortedCitiesByCount = Object.keys(citiesCount).map(e => {
        return {
            'city': e,
            'count': citiesCount[e]
        }
    }).sort((a, b) => b.count - a.count);
    
    sortedCitiesByCount.splice(0, citiesToShowLimit).map(e => console.log(e.city));
}

logMostCommonCities(citiesList, DEFAULT_CITIES_LIMIT_TO_SHOW);
