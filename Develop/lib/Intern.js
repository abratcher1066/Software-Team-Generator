// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Basic class structure:

// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

class Intern extends Employee {
    constructor(name, email, id) {
      super(name, email, id);
      this.school = school;
    }
  
    getSchool() {
      return this.school
    }
  
    getRole() {
      return "Intern";
    }
      
  }
  
  module.exports = intern;