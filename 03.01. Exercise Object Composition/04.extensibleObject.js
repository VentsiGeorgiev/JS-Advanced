function solve() {
 // създаваме обект със зададен прототип
 const proto = {};

 const instance = Object.create(proto);

 // дефинираме функция, копираща свойства и методи
 instance.extend = function (template) {
  // обхождаме шаблона
  for (let prop in template) {
   if (typeof template[prop] === 'function') {
    // Ако е функция, копираме върху прототипа 
    proto[prop] = template[prop];
   } else {
    // иначе копираме в/у инстанцията
    instance[prop] = template[prop]
   }
  }
 };
 // връщаме референция
 return instance
}
const myInstance = solve();

myInstance.extend({
 extensionMethod: function () { /* do something */ },
 extensionProperty: 'someString'
})

console.log(Object.getPrototypeOf(myInstance));