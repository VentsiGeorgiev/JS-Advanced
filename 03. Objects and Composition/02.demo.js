const getFullName = person.fullName;

console.log(getFullName()); // 'undefined undefined'
const anotherPerson = {
 firstName: 'Bob',
 lastName: 'Smith'
};
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // 'Bob Smith'
