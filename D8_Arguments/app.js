function greet(firstname, lastname, language) {

  language = language || 'en'; // you can set a default this way. so if it's undefined, you can set it to return something with the "or" operator.
  if(arguments.length === 0) {
    console.log('Missing parameters');
    console.log('-------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log('arg 0: ' + arguments[0]);//arguments are kinda becoming deprecated, however still are useful to grab parameters.
  console.log('==========');
}

greet();
greet('Pete');
greet('Pete', '& Pete');
greet('Pete', '& Pete', 'en');
