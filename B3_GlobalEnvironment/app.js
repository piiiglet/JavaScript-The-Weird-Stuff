// Discussion of "this" variable. This refers to the execution context. Since there isn't any code here "this" refers to the global window.

var a = 'Hello World!';

function b() {

}
// the above(variable and function) are attached to the global object so "window" you could call them in the console by writing "window.a" for example.
