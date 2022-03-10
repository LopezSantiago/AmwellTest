// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.
const askForANumber = () => {
  const num = window.prompt("Set a number", 2);
  if (!isNaN(num)) {
    const result = nextPrimeFibonacci(num);
    alert("Next prime fib is: " + result);
  } else {
    alert("Should be a number");
    askForANumber();
  }
};

const isPrime = (number) => {
  return Array.from({ length: number - 2 }, (_, i) => i + 2).every(
    (i) => number % i !== 0
  );
};

const fibonacci = (position) => {
  if (position <= 1) return 1;
  return fibonacci(position - 1) + fibonacci(position - 2);
};

const nextPrimeFibonacci = (number, count = 1) => {
  const fib = fibonacci(count);
  if (fib > number) {
    if (isPrime(fib)) {
      return fib;
    } else {
      return nextPrimeFibonacci(number, count + 1);
    }
  } else {
    return nextPrimeFibonacci(number, count + 1);
  }
};
