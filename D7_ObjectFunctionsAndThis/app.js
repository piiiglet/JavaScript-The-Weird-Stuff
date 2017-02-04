function a() {
  console.log(this);
  this.newvariable = 'hello';
}

var b = function() {
  console.log(this);
}
// at this level this will always refer to the global level, so this is the window object
a();
console.log(newvariable);
b();


var c = {
  name: 'The c object',
  log: function() {
    var self = this; // sometimes this will change meaning such as in the internal function setname. so people make a var called self and set it to this which will maintain the value of this to remain the c object instead of bouncing you out to the global context

    self.name = 'Updated c object name';
    console.log(self); // here this will point to the c object, bc c is contained by the object c

    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated again, this is the c object');
    console.log(self);
  }
}

c.log();
