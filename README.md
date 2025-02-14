# JavaScript Unexpected Addition with Null and Undefined

This example demonstrates unexpected behavior in JavaScript when performing addition with `null` and `undefined` values.

## Bug

In JavaScript, adding a number to `undefined` results in `NaN` (Not a Number), while adding a number to `null` treats `null` as 0.

The `bug.js` file contains a function that demonstrates this behavior.

## Solution

The `bugSolution.js` file shows how to handle `null` and `undefined` values to avoid unexpected results when performing addition using explicit checks and type coercion. 

## How to run the code

1. Save the code from `bug.js` and `bugSolution.js` into two separate files.
2. Open your browser's developer console or use Node.js to run the files.