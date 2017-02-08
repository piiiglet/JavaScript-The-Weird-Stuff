var
   // first name of a person
   firstname,
   // JS is super liberal about whitespace. var firstname, lastname, language; is still running even if written like this
   lastname,
   // language
   language;

var person = {

  // this use of whitespace is useful for commenting and clarifying your work.
  firstname: 'John',

  // person still works even if it's written like this. 
  lastname: 'Doe'
}

console.log(person);
