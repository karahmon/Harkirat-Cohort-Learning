function mathMethods(value) { //math methods are used to perform mathematical operations on numbers.
  console.log("Original Value:", value);

  let rounded = Math.round(value);// round() method is used to round a number to the nearest integer.
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);// ceil() method is used to round a number to the nearest integer greater than or equal to the given number.
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);// floor() method is used to round a number to the nearest integer less than or equal to the given number.
  console.log("After floor():", flooring);

  let randomValue = Math.random();// random() method is used to generate a random number between 0 and 1.
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);// max() method is used to find the maximum of the given numbers.
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);// min() method is used to find the minimum of the given numbers.
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);//  pow() method is used to find the value of a number raised to the power of another number.
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);//    sqrt() method is used to find the square root of a number.
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
