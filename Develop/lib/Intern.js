// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Basic class structure:

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, email, id, school) {
      super(name, email, id);
      this.school = school;
    }
  
    getSchool() {
      return this.school
    }
    getRole() {
      return "Intern";
    }
    getId() {
      return this.id;
    }
    getEmail(){
      return this.email;
    }
} 


      module.exports = Intern;