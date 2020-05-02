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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // char check function
//      validate: answer => {
//        validChars(answer)
//        }
// adding validate function to save space
function validChars(answer) {
    if(answer !== "") {
      return true;
    }
    return "Please enter at least one character."
  }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// adding id checker function to make sure each team member has a unique id
function validId(answer){
  if (idArray.includes(answer)){
      return "Please choose a unique ID # 0-9."
  }
  return true;
}
// ID check function
//      validate: answer => {
//        validId(answer)
//        }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
      validate: validChars

    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?",
      validate: validChars
    },
    {
      type: "input",
      name: "managerId",
      message: "What is your manager's ID number?",
      validate: validChars
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is your manager's office number?",
      validate: validChars 
     }

    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerEmail, answers.managerId, answers.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();
    });
}

function createTeam() {
  inquirer.prompt([
    {
        type: 'list',
        name: 'addnewteammember',
        message: "Choose a new team member to add from the list.",
        choices: ['manager', 'intern', 'engineer', 'finished']
    }
  ]).then(userChoice => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    // If no choice is made, then go to the rendering function.
      switch (userChoice.addnewteammember) {
        case 'manager':
          createManager();
          break;
        case 'intern':
          createIntern();
          break;
        case 'engineer':
          createEngineer();
          break;
        case 'finished':
          renderHtmlPage();
      }

  });
}

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // }
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineers's ID number?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // },
      // validate: answer => {
      //   validId(answer)
      // }
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineers's github page?",
      validate: validChars
    }

  ]).then(answers => {
    // STUDENT: Make sure the id supplied is unique,
    // gonna need a function for that.........................................
    
    // then take the data supplied and 
    // instantiate the Engineer constructor.
    // Add the new object to the team member array
    // Pass control back to the createTeam() function
      var engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerId, answers.github)
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
  });
}

// STUDENT: Now create a function for creating an Intern using the code above as an example
function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // }
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // }
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's ID number?",
      validate: validChars
      // validate: answer => {
      //   validChars(answer)
      // },
      // validate: answer => {
      //   validId(answer)
      // }
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school is your intern attending?",
      validate: validChars
    }

  ]).then(answers => {
    // STUDENT: Make sure the id supplied is unique,
    // gonna need a function for that.........................................
    
    // then take the data supplied and 
    // instantiate the Engineer constructor.
    // Add the new object to the team member array
    // Pass control back to the createTeam() function
      var intern = new Intern(answers.internName, answers.internEmail, answers.internId, answers.internSchool)
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
  });
}
























// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){
  let html = render(teamMembers)
  fs.writeFileSync(outputPath, html)

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