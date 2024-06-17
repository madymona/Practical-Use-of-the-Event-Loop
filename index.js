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
    console.log("Stack overflow occurred after " + counter + " calls.")
    console.log(error.message)
  }
}

simpleRecursiveFunc()

//Part 2: Trampolines
/**Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
Once your recursive function is complete, trampoline it. */


//Part 3: Deferred Execution
/*Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
Once complete, use the alert() method to alert the user that the calculation is finished. */

const primeNumbers = document.getElementById('primeNumbers')

function isPrime(n) {
    if (n <= 1) return false
    if (n === 2) return true
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n% i === 0) return false
    }
    return true
}

function addPrimeNumbers(n) {
    let primes = []
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    setTimeout(() => {
        primeNumbers.textContent = primes.join(', ')
        alert('Calculation finished!')
    }, 0)
}
addPrimeNumbers(100)
