// Require
const inquirer = require("inquirer");
const fs = require("fs");

// Link to where README is generated
const generateNewMarkdown = require("./utils/generateMarkdown");
// console.log(generateNewMarkdown);

// Array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What do you want your title of your project to be?",
    },
    // {
    //   type: "input",
    //   name: "description",
    //   message: "Please provide a 2-3 sentence description your project.",
    // },
    // {
    //   type: "input",
    //   name: "installation",
    //   message: "What specific steps does it take to install your project?",
    // },
    // {
    //   type: "input",
    //   name: "usage",
    //   message: "Please provide instructions on how to use your project.",
    // },
    // {
    //   type: "input",
    //   name: "screenshots",
    //   message: "Please enter the file path of screenshot.",
    //   validate: function (input) {
    //     const valid = input.startsWith("./");
    //     return valid || "Please enter a valid path.";
    //   },
    // },
    // {
    //   type: "input",
    //   name: "tests",
    //   message: "Please describe how to run tests on your application.",
    // },
    {
      type: "list",
      name: "license",
      message: "Choose a license.",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    // {
    //   type: "input",
    //   name: "contributions",
    //   message: "Please describe how to run tests on your application.",
    // },
    // {
    //   name: "repoLink",
    //   type: "input",
    //   message: "Please enter the project repository link.",
    //   default: "https://www.github.com",
    //   validate: function (input) {
    //     const valid = input.startsWith("https://");
    //     return valid || "Please enter a credible repository link.";
    //   },
    // },
    // {
    //   name: "deployedPageLink",
    //   type: "input",
    //   message: "Please enter the link of the deployed GitHub page.",
    //   default: "https://www.github.com",
    //   validate: function (input) {
    //     const valid = input.startsWith("https://");
    //     return valid || "Please enter a credible page link.";
    //   },
    // },
    // {
    //   type: "input",
    //   name: "github",
    //   message: "Please enter your GitHub username.",
    // },
    // {
    //   type: "input",
    //   name: "email",
    //   message: "Please enter your email address.",
    // },
    {
      type: "input",
      name: "govName",
      message: "Please enter your first and last name.",
    },
  ]);
};

// initilize generator
function init() {
  return inquirer.prompt(questions);
}
init()
  .then((data) => {
    return generateNewMarkdown(data);
  })
  .then((data) => {
    console.log(data);
    return writeFile(data);
  });

function writeFile(data) {
  return new Promise((reject) =>
    fs.writeFile("README.md", data, (err) => {
      if (err) {
        reject(err);
        return "";
      } else {
        console.log("README.md file generated, success!");
      }
    })
  );
}
