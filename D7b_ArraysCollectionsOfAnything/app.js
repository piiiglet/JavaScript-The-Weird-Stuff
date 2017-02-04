var arr = [
  1,
  false,
  {
    name: 'Pete',
    address: 'Main St.'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  "hello"
];

// JS is dynamically typed so unlike other strict programming languages, JS will allow you to put whatever type of data you want in your array.


console.log(arr);
arr[3](arr[2].name);
