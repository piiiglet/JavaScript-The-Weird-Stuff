// by value example such as in primitive types

var a = 3;
var b;

b = a;
// in by value, the equals operator will create a new spot in memory for b even though it's copying over the value of a.
// so they don't actually link to the same reference in memory. they're separate.
a = 2;
console.log(a);
console.log(b);


// by reference example such as in all objects including functions

var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate it. aka changed it's value

console.log(c);
console.log(d);
// these both print the same result hello. bc they're pointed to the same spot in memory.
// bc var c was mutated to hello, and bc c & d point to the same location they become the same value

// by reference example in parameters
function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutating it
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }; // this version of c doesn't exist in memory yet so it creates a new one.
console.log(c);
console.log(d);
// this example c is now pointing to a new memory space. so c is now howdy, d is still hola
