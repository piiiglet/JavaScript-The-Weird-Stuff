// note that this is not the preferred way to create an object.
var person = new Object();

person["firstname"] = "Pete";
person["lastname"] = "& Pete";

var firstNameProperty = "firstname";

// the dot access operator. for grabbing properties on the person object in this case.
// the dot operator is best to use. 
console.log(person.firstname);
console.log(person);
console.log(person[firstNameProperty]);

console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Cleveland";
person.address.state = "OH";

console.log(person.address);
console.log(person.address.street);
console.log(person.address.state);
