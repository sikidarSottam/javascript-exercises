const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    
    let oldest = arr[0];
    let maxAge = getAge(oldest, currentYear);
    
    for (let i = 1; i < arr.length; i++) {
        const currentAge = getAge(arr[i], currentYear);
        if (currentAge > maxAge) {
            maxAge = currentAge;
            oldest = arr[i];
        }
    }
    
    return oldest;
};

// Helper function to calculate age
function getAge(person, currentYear) {
    const deathYear = person.yearOfDeath || currentYear;
    return deathYear - person.yearOfBirth;
}; 

// Do not edit below this line
module.exports = findTheOldest;
