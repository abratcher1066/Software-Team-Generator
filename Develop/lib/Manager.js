    // TODO: Write code to define and export the Manager class. 
    
    
    // HINT: This class should inherit from Employee.
    // dont have this done yet but i know how to inherit

//     In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'

// Basic class structure:

class Manager extends Employee {
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
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, email, id)

}

module.exports = Manager;