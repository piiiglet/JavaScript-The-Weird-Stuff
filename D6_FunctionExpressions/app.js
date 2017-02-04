// function statements and function expressions
// expressions return a value whereas a statement just does some sort of work and does not return a value
// expression ex: 1 + 3;
// statement ex: if (a > 3)
// if (a > 3 ) won't print something to the console bc it's just evaluating the statement
var a;

if (a === 3) {

}

greet();

// this function is a statement, in the creation phase the code is just passed over bc it's not being invoked
function greet() {
  console.log('hello');
}

//anotherGreet();

//whereas in this next example is a function expression, in the creation phase it makes an object.
// heres an example of an anonymous function. aka a function with no name bc it's name actually refers to a variable.
var anotherGreet = function() {
  console.log('hiya');
}

anotherGreet(); // invoking the anonymous function still works.
// however if we place anotherGreet(); above the var anotherGreet, it will throw a type error. bc it will try to run the invocation first before knowing what anotherGreet()'s code


//another function expression with a function parameter. 
function log(a) {
  a();
}

log(function() {
  console.log('hello');
});

//log('hello');
//log(2);
//log({
//  greeting: 'hallo'
//});
