function foo(a, b) {
  // Handle null values
  if (a === null) a = 0;
  if (b === null) b = 0;

  // Handle undefined and NaN values
  if (typeof a !== 'number' || isNaN(a)) a = NaN; 
  if (typeof b !== 'number' || isNaN(b)) b = NaN; 

  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));    // Output: 10
console.log(foo(undefined,5)); //Output:NaN
console.log(foo(5,undefined)); //Output:NaN
console.log(foo(NaN,5)); //Output:NaN
console.log(foo(5,NaN)); //Output:NaN