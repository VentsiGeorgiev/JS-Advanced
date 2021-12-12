function gcd(a, b) {
 if (b) {
  return gcd(b, a % b);
 } else {
  return Math.abs(a);
 }
}
console.log(gcd(2154, 458));