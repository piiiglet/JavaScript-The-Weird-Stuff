var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet); //currently this will print out Hola!

var english = {
  greetings: {
    basic: 'Hello!'
  }
};
var spanish = {};

english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);
console.log(spanish);
