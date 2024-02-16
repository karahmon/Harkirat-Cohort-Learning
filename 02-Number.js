//ParseInt- parseInt is global function in JavaScript, which is used to convert a string into an integer. It takes two parameters. The first parameter is the string to be converted. The second parameter is the radix, which represents the number system to be used. It is an optional parameter. If the radix is not specified, it is assumed to be 10.
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

//parsefloat- parseFloat is a global function in JavaScript, which is used to convert a string into a floating-point number. It takes one parameter, which is the string to be converted.
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
