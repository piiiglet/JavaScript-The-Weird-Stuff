function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
// though it's the same function each time you execute it, it's calling a different execution context of the same space
// each of these create it's own makeGreeting execution context
// one for language 'en' and one for 'es'

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

// greetEnglish knows to look for the first call of makeGreeting bc of the en
// greetSpanish knows to look for the second makeGreeting() bc language = es.
// it doesn't have to do with the if statement at all though. 


// here makeGreeting has acted as a factory function.
