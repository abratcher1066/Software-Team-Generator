const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

const idArray = [];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Validation Functions

// validChars --- Serves as validator for most answers
function validChars(answer) {
  if(answer == "") {
    return "Please enter at least one character."
  }
    return true;
  }

// validId --- serves as validator for IDs
function validId(answer){
  var isnum = /^\d$/.test(answer);
  if(isnum === false){
    return "Please enter a single number, 0-9."
  }
  if(answer == "") {
    return "Please enter at least one character."
  }
  if (idArray.includes(answer)){
    return "Please choose a unique ID # 0-9."
  }
  if(isNaN(answer)){
    return "Please enter a number."
  }
    return true;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
      validate: validId
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
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
      validate: validChars
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineers's ID number?",
      validate: validId
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineers's github page?",
      validate: validChars
    }

  ]).then(answers => {
      var engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerId, answers.github)
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
  });
}

function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
      validate: validChars
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
      validate: validChars
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's ID number?",
      validate: validId
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school is your intern attending?",
      validate: validChars
    }

  ]).then(answers => {
      var intern = new Intern(answers.internName, answers.internEmail, answers.internId, answers.internSchool)
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
  });
}

function renderHtmlPage(){
  let html = render(teamMembers)
  fs.writeFileSync(outputPath, html)
}

function startMenu() {
  createManager()
}

startMenu();