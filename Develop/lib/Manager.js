    // TODO: Write code to define and export the Manager class. 
    
    
    // HINT: This class should inherit from Employee.
    // dont have this done yet but i know how to inherit

//     In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'

const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        // call object parent stuff with super
      super(name, email, id);
      // need ot define new object property AND make it retrievable
    //   this.prop1 = prop1;
    //   this.prop2 = prop2;
    this.officeNumber = officeNumber;
    // this.role = role;
    }
    // and if anyone asks what this is
    // ie.  * getRole() // Returns 'Employee'
    getRole() {
      // return something...
    return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber

    }

  
    setProp1() {
      // do something...
    }
      
  }
  


class Manager extends Employee {
    constructor (name, email, id)

}

module.exports = Manager;