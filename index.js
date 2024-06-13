//Part 1: Stack Overflow
/*
Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.*/ 

let counter = 0

function simpleRecursiveFunc() {
  counter++
  try {
    simpleRecursiveFunc()
  } catch (error) {
    console.log("Stack overflow occurred after " + counter + " calls.");
    console.log(error.message);
  }
}

simpleRecursiveFunc()
