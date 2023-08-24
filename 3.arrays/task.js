function compareArrays(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  return arr1.every((currentValue, index) => currentValue === arr2[index]);
  }


function getUsersNamesInAgeRange(users, gender) {
  let usersGenders = users.filter((user) => user.gender === gender);
  let usersAge = usersGenders.reduce((acc, user) => acc + user.age, 0); 
  let avrAge = usersAge / (usersGenders.length || 1);
  return avrAge;
}