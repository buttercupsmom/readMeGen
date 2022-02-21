// Require.
const inquirer = require("inquirer");
const fs = require("fs");

// Link to where README is generated.
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);

// Array of questions for user.
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want your title of your project to be?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a 2-3 sentence description your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What specific steps does it take to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use your project.",
  },
  {
    type: "input",
    name: "screenshots",
    message: "Please enter the file path of screenshot.",
    validate: function (input) {
      const valid = input.startsWith("./");
      return valid || "Please enter a valid path.";
    },
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
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  },
  {
    type: "input",
    name: "contributions",
    message: "Please describe how to run tests on your application.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
  {
    type: "input",
    name: "govName",
    message: "Please enter your first and last name.",
  },
];
// Function to write file.
function writeToFile(data) {
  fs.writeFile("readmegenerator.md", data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("You generated a README.md, you are awesome!");
    }
  });
}
// Create a function to initialize app.
function init() {
  inquirer.prompt(questions).then((data) => {
    const template = generateMarkdown(data);
    console.log(data);
    console.log(template);
    writeToFile(template);
  });
}

// Function call to initialize app
init();
