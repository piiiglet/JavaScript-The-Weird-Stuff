function b() {
	console.log(myVar); // here myVar = 1. the global level myVar ran here bc myVar is defined on the global level. myVar isn't declared in b(); so the console.log ran the reference to the outer environment which would b the global execution context.
}

// a()'s outer environment is also the global execution context.
// when you invoke a function it creates a reference to it's outer environment.
// so if something is called like a function or var then it will go down the "Scope Chain" until it finds it or not.

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();


// Here's another Example. This one of changing the lexical environment.
// here function b(); doesn't exists in the global execution context bc it resides in a();. so it exists in a();
function a() {
	function b() {
		console.log(myVar); // now myVar = 2 bc myVar finds it's definition inside a();. so b()'s outer reference is actually a();
	}
	//however if we removed the myVar declaration in a(); then the console.log(myVar) inside of b(); would then go back up the scope chain to find myVar in global. so the console.log(myVar) would go back to = 1.
	var myVar = 2;
	b();
}

var myVar = 1;
a();
