// all functions have access to special functions such as call() apply() bind()

var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------------');
}// you can also .bind(person); the function

var logPersonName = logName.bind(person); // person = this. bind makes a copy of the logName function and adds the object passed to the bind to it
logPersonName('en');

logName.call(person, 'en', 'es'); // unlike bind, call doesn't creat  a copy it just executes the function with whatever you passed to it.
logName.apply(person, ['en', 'es']); // apply is like call only it needs to be an array.
logPersonName();


(function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------------');
}).apply(person, ['es', 'en']);



// function borrowing
var person2 = {
  firstname: 'Bob',
  lastname: 'Ross'
}

console.log(person.getFullName.apply(person2));

// we just borrowed a function using person's getFullName on person2 object
// we could've used call


// function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // 2 becomes a, bc we're making the 2 a permanent value of this var
console.log(multipleByTwo(3));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(6));
// creating a function and applying some permanent parameters is called currying
// these preset parameters are really useful in many situations so you'll see this a lot. 
