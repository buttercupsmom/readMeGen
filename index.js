// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want your title of your project to be?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a 2-3 sentence description explaining your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What specific steps does it take to run your project? Please provide a step by step description.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide instructions as well as examples. Screenshots are recommended.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "ISC", "WTFPL", "Unlicense"],
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe how to run tests on your application.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub user name.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("readmegenerator.md", data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File Created!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    console.log(answers);
    console.log(template);
    writeToFile(template);
  });
}

// Function call to initialize app
init();
