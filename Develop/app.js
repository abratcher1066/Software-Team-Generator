const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];


// adding validate function to save space
function validCheck(answer) {
    if (answer !== "") {
      return true;
    }
    return "Please enter at least one character."
  }

// adding id checker function to make sure each team member has a unique id
function validId(){
  if (answers.id)
}


// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
      // Note how the validate function works
      // cool function but i dont wanna write that every time
      validate: answer => {
        validCheck(answer)
      }
    },

    // STUDENT: Add other questions here!
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?"
      validate: answer => {
        validCheck(answer)
      }
    }
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's ID number?"
      validate: answer => {
        validCheck(answer)
      }
    }

    ]).then(answers => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
      const manager = new Manager(answers.managerName, answers.managerEmail, answers.managerId);
      // going back to make manager object

      // push new manager to team here later //
      // push to team
      teamMembers.push(manager);
      idArray.push(answers.managerId)

      // Now call the next question set
      createTeam();
    });q
}

// This function starts team creation.
function createTeam() {
  inquirer.prompt([
    // STUDENT: Ask which type of team member should be created with a list of choices
    // [TEST THIS ON ITS OWN]
        type: 'list',
        name: 'addnewteammember',
        message: "Choose a new team member to add from the list."
        // choices: [manager, intern, engineer, other employee]


  ]).then(userChoice => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    // If no choice is made, then go to the rendering function.
      switch (userChoice.addnewteammember) {
        case 'manager':
          addManager();
          break;
        case 'intern':
          addIntern();
          break;
        case 'engineer':
          addEngineer();
          break;
        case 'employee':
          addEmployee();
          break;
      }

  });
}

// This function starts team creation.
function createEngineer() {
  inquirer.prompt([
    // STUDENT:  Engineer questions

    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
      validate: answer => {
        validCheck(answer)
      }
    },

    // STUDENT: Add other questions here!
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?"
      validate: answer => {
        validCheck(answer)
      }
    }
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineers's ID number?"
      validate: answer => {
        validCheck(answer)
      }
    }

  ]).then(userChoice => {
    // STUDENT: Make sure the id supplied is unique,
    // gonna need a function for that.........................................
    
    // then take the data supplied and 
    // instantiate the Engineer constructor.
      var engineer = new Engineer(userChoice.engineerName, userChoice.engineerEmail, userChoice.engineerId)
      teamMembers.push(engineer);
    // STUDENT: When finished:
       // Add the new object to the team member array
       // Pass control back to the createTeam() function

  });
}

// STUDENT: Now create a function for creating an Intern using the code above as an example


// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){



}

// This is our starter function.
// Note that we use separate functions for different questions in inquirer to 
// help keep code organized.
function startMenu() {

  // Here we start things off by calling the createManager function
  createManager()

}


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


startMenu();