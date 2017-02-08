function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
      function() {
        console.log(i);
      }
    )
  }

  return arr;
}

// buildFunctions() pushing a function into the array.
// however it's only logging 3 in the console.log
// bc it doesn't have an internal i in the anonymous function, so it goes out to it's outter reference
// it looks for i again and it finds the one in the for loop. so it just prints 3.
// it's just going up the scope chain to get it.
// so it prints out the last value it got for i.
// it's not figuring out what i is during the process of the for loop.
// but when you actually call the functions fs below.

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
//what will i be, what will these print?
// all print the number 3.


function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) { // by wrapping the function in () we're making another execution context.
        return function() {
          console.log(j);
        }
      }(i))
    )
  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
// these will print 0 1 2. bc of the () the function will not spill out into it's reference to find the value of j.
