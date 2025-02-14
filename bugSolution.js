function foo(a, b) {
  // Handle null and undefined values explicitly
  a = a === null ? 0 : a; // Treat null as 0
  b = b === undefined ? 0 : b; // Treat undefined as 0
  return a + b; //add the values together
}
console.log(foo(1, undefined)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(undefined, null)); //Output: 0
console.log(foo(null, undefined)); //Output: 0