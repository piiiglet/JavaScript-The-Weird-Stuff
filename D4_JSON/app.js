var objectLiteral = {
  firstname: 'Pete',
  isAPete: true
}

console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));

//previously data was transmitted using xml
//JSON aka JavaScript Object Notation inspired by object literal syntax
//JSON format is just a string of data. it's a bit cleaner than xml and bc of it's lighter syntax, and it ideally sends less data. aka quicker/better.

//JSON example
var jsonValue = JSON.pars('{ "firstname": "Pete",  "isAPete": true }');

console.log(jsonValue);
