var a;

// coercion is when JS attempts to convert the type of a value to another in order to run the code.
if (a) {
  console.log('a is being converted to a boolean bc it\'s inside an if statement');
} else {
  console.log('a is undefined, and undefined is coerced into the boolean false bc of the if statement.')
}
