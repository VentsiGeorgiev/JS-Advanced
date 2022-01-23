/* ---=== Global Invoke ===--- */
function contextPrinter() {
 console.log(this);
}
function myFunc() {
 contextPrinter();
}

myFunc();

/* ---=== Object Method ===--- */

const myObj = {
 name: 'Peter',
 contextPrinter
}

myObj.contextPrinter();

document.querySelector('button').addEventListener('click', contextPrinter)

