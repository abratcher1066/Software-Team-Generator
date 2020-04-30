// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

// In addition to `Employee`'s properties and methods, `Engineer` will also have:

  // * github  // GitHub username

  // * getGithub()

  // * getRole() // Overridden to return 'Engineer'
  
const Employee = require("./Employee")


class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id, github);
    this.github = github;
  }

  getGithub() {
    return this.github
  }

  setRole() {
    return "Engineer";
  }
}
    


module.exports = Engineer;