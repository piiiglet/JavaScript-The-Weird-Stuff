function greet(name) {
  console.log('hello' + name);
}

greet(); // the function greet(); takes the parameter name yet JS will not throw an error if you invoke greet() without giving it a parameter.
// here it gives undefined. however in this name becomes the string undefined bc JS attempts to coerce the string "hello" and undefined together.

// with the or operator it will try to coerce the first one it can to true
// so undefined || "hello" will print hello not undefined bc undefined in a boolean equals false

function greet2(name) {
  name = name || '<your name here>';
  console.log('Hello' + name);
}

greet2('peeete');
greet2();
// in greet2('peeete'); will run the name = name part so it will say hello peeete.
// the greet(); will print the second part bc that's the first one that will be considered true. 
