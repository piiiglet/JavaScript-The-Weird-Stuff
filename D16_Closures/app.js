function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  }

}

greet('Hi')('Pete'); // here we're passing in hi as whattosay and then we're immediately invoking the function inside greet with the second ();

var sayHi = greet('Hi');
sayHi('Tony');
// this still works bc sayHi contains the function greet();
// it still has a reference to the memory space of it's execution context
// this is called a closure. 
