function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10

//The bug is the function doesn't handle cases where one of the arguments is undefined or NaN.

console.log(foo(undefined,5)); //Output:NaN
console.log(foo(5,NaN)); //Output:NaN
console.log(foo(NaN,NaN));//Output:NaN