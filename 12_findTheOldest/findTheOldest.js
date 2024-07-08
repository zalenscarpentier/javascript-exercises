const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.sort((a, b) => {
      const ageA = getAge(a.yearOfBirth, a.yearOfDeath);
      const ageB = getAge(b.yearOfBirth, b.yearOfDeath);
      return ageB - ageA; // Sort in descending order of age
    })[0]; // Return the first element in the sorted array
  };
  
// Do not edit below this line
module.exports = findTheOldest;
