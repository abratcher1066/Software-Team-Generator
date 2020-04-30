// TODO: Write code to define and export the Employee class

// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'


class Employee {
    constructor(name, email, id) {
    //   super(prop1, prop2); THIS IS A PARENT
      this.name = name;
      this.email = email;
      this.id = id;

    }
  
    getName() {
      // return something...
      return this.name
    }
  
    getEmail() {
      return this.email;
    }

    getRole() {
        //   * getRole() // Returns 'Employee'
        return 'Employee'
    }
      
  }
module.exports = Employee;

// TODO: Write code to define and export the Employee class
