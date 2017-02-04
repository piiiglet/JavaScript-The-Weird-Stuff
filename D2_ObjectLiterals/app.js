//object literals

var person1 = new Object(); // there's a shorthand for this

var Pete = { // the parser gets to the curly braces and assumes that you're creating a new object.
  firstname: 'Pete',
  lastname: '& Pete',
  address : {  // we can nest another object inside the object.
    street: '111 Main St.',
    city: 'Wherever',
    state: 'MA'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Pete);

greet({ //object literal syntax, parser sees curly braces and knows that you're creating a new object.
  firstname: 'Doug',
  lastname: 'Funny'
});

Pete.address2 = {
  street: '2334234 2nd St.'
}
// this way is just quicker to write, cleaner code.
