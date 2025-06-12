// Code your solution here
function findMatching(drivers, namesToMatch){
       return drivers.filter(function(driver){
       return driver.toLowerCase() === namesToMatch.toLowerCase();
    });
}
//driversLower hols the lowercase name
//lettersToLower holds lowercase search term
function fuzzyMatch(drivers, lettersToMatch){
    return drivers.filter(function(driver){
        const driverLower = driver.toLowerCase();
        const lettersToLower = lettersToMatch.toLowerCase();
        return driverLower.startsWith(lettersToLower);
    });
}
function matchName(drivers, namesToMatch){
    return drivers.filter(function(driver){
        return driver.name === namesToMatch
    });
}
