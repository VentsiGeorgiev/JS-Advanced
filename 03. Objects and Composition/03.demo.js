const employees = [
 { name: 'John', position: 'worker' },  // first element
 { name: 'Jane', position: 'secretary' }
];
const [{ name }] = employees; // name of first element is 'John'
