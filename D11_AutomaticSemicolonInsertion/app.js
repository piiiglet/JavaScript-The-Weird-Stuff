function getPerson() {
  return { // the syntax parser sees the 'return' and attempts to put a semicolon next to it bc it's the character expected. to prevent that keep your opening {} on the same line. 
    firstname: 'Tony'
  }
}

console.log(getPerson());
