b();

console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}



//Invocation in JS just means "running the function"
// for example a(); is an example of invoking a function

// Example
// function b() {}
// function a() { b(); }
// a();
// as soon as the execution phase hits the function a(); it will create a new Execution context
// then it will go through function a and find b(); creating another execution context.
// This is the stack. as soon as it gets through one of the execution context of one of the functions it will pop it off the stack and then move on to the next context up on the stack.
