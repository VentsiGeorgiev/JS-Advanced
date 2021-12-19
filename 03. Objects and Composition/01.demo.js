const person = {
  firstName: 'V',
  secondName: 'G',
  fullName() {
    return this.firstName + ' ' + this.secondName;
  },
};
console.log(person.fullName());
