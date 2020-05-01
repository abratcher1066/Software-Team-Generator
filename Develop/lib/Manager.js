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
    this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getId() {
       return this.id
     }
    getEmail(){
      return this.email;
    }
  }

module.exports = Manager;