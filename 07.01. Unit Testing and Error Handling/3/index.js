function lookupChar(string, index) {
   if (typeof (string) !== 'string' || !Number.isInteger(index)) {
      return undefined;
   }
   if (string.length <= index || index < 0) {
      return "Incorrect index";
   }

   return string.charAt(index);
}

module.exports = lookupChar

console.log(lookupChar('lili', 1, 1));
