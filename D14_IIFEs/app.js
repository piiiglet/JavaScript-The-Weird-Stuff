// IIF E immediately invoked function expression

// function statement
function greet(name) {
  console.log('Hello ' + name);
}

greet('John');

// using a function expression
var greetFunc = function() {
  console.log('Hello ' + name);
};

greetFunc('John');

var greeting = function(name) {

  return 'Hello ' + name;

}('John'); // we can invoke this on the fly. the (); invoke the function as soon as the function is called.

console.log(greeting); // here we're calling the function.


var name2 = 'Waiters';

(function(name) {

  var greeting1 = 'Inside IIFE: Hello';
  console.log(greeting1 + ' ' name);

}(name2)); // classic example of IIFE. a function expression like above, wrapped in () is also valid syntax.
// you'll see this code often.
