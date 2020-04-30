// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Basic class structure:

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

class Intern extends Employee {
    constructor(prop1, prop2) {
      super(prop1, prop2);
      this.prop1 = prop1;
      this.prop2 = prop2;
    }
  
    getProp1() {
      // return something...
    }
  
    setProp1() {
      // do something...
    }
      
  }
  
  module.exports = intern;