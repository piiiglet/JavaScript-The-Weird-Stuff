//var a = 'Hello World!';
var a;


if (a === undefined) {
  console.log('a is undefined');
} else {
  console.log('a is defined');
}
b();
function b() {
    console.log('Function called b!');
}
console.log(a);

//JavaScript behaves weird because of the execution context
//Basically your code isn't whats being ran by the machine or browser or whatever
//First your code is being translated by the syntax parser.
//That's where it starts "Setup Memory Space for Variables and Functions" so it's like a prep phase for your code.
//This is called the Hoisting phase. aka the creation phase.
//Then there's the execution phase in which the code is actually ran.
//That's when it will actually run the code line by line.


//a key idea is that all vars are initially set to value "undefined"
// undefined is a special keyword value in JS that says the var hasn't yet currently been set to something
// so for example var a; is set to undefined.
// undefined is different from the Uncaught reference error saying that a var is not defined. that's an actual error saying that it cannot find it.
