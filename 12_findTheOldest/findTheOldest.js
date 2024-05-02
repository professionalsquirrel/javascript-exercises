const findTheOldest = function(array) {

    //function to obtain person's age
    function getAge (person){
        //if the person has not died, this means we need to calculate their age using a JS method
        if (!(person.yearOfDeath)){
            currentYear = new Date().getFullYear();
            return currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    }

   return array.reduce((oldest, currentPerson) => { return (getAge(oldest) < getAge(currentPerson)) ? currentPerson : oldest;});
};

// Do not edit below this line
module.exports = findTheOldest;
