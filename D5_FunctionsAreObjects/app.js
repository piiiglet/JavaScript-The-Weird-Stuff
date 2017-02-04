//functions are objects with a few extra benefits through special properties.
// it's two special properties are it's Name and it's Code. it's code property is "invocable".

function greet() {
  console.log('hello');
}

greet.language = 'english'; //functions are objects so here we just added a property to a function.
// so greet now has a property called language
console.log(greet); // this will actually print the entire function text to the console
// so this prints
// function greet() {
//  console.log('hello');
// }

console.log(greet.language); // this will actually find the property you added to greet.
// so it prints out english aka the value of greet's property called language.

greet(); // this will log hello, bc it's actually running the greet function.
