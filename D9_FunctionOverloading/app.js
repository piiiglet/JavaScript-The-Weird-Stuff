function greet(firstname, lastname, language) {

    language = language || 'en';

    if(language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
}

greet('John', 'Bon', 'en');
greet('Jovi', '3doorsdown', 'es');

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetSpanish('John', 'Bon');
greetEnglish('Jovi', '3doorsdown');


// this is just one pattern of working. probably not the best, but you might see it so it's important to know.  
