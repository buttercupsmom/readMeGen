// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
    message: "Please provide instructions as well as examples.",
  },
  {
    type: "input",
    name: "screenshots",
    message: "Please enter the file path of screenshot.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe how to run tests on your application.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If there are other developers you would like to contribute to the project, include guidelines here.",
  },
  {
    type: "input",
    name: "author",
    message: "Please enter the name of the author.",
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username",
    default: "buttercupsmom",
    validate: function (gitanswer) {
      if (gitanswer.length < 1) {
        return console.log("You must enter a valid GitHub username.");
      }
      return true;
    },
  },
  {
    name: "repoLink",
    type: "input",
    message: "Please enter the link of the GitHub repository.",
    validate: function (input) {
      const valid = input.startsWith("https://www.github.com");
      return valid || "Please enter a valid repository link.";
    },
  },
  {
    name: "repoPage",
    type: "input",
    message: "Please enter the link of the deployed GitHub page.",
    validate: function (input) {
      const valid = input.startsWith("https://www.");
      return valid || "Please enter a valid page link.";
    },
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
      console.log("README.md file Created!");
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
