function b() {
  var myVar;
  console.log(myVar); // myVar = undefined
}

function a() {
  var myVar = 2;
  console.log(myVar); // myVar = 2.
  b();
}

var myVar = 1;
console.log(myVar); // myVar = 1.
a();
console.log(myVar); // back to 1.
//What's myVar's value?
// well first it's set to 1 bc functions a & b aren't going to be ran until a(); is invoked..
// which a(); is invoked after myVar is set to 1.
// then myVar's value changes to 2 when it's ran inside a bc inside a myVar is set to 2.
// then inside b(); var myVar; just exists and isn't set to anything. b(); can't access the value of myVar inside of a(); as it currently stands.
// so inside b(); myVar is actually undefined.
