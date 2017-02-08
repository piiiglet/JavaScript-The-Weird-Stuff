// IIFE
var firstname = 'John';

(function(global, name) {

    var greeting = 'Hello';
    //  global.greeting = 'Heyo'; we can pass a parameter of global and invoke window to grant our function access of the global object. then the meaning of greeting would change. 
    console.log(greeting + ' ' + name);

}(window, firstname)); // IIFE

console.log(greeting);
// this will log the greeting in greeting.js bc var greeting in app.js has an execution context in the anonymous function.
// so even though the anonymous function is immediately invoked, there is no confusion between which var is being used.
