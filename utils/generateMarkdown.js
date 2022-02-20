// function that returns a license badge defined on which license is chosen
function renderLicenseBadge(type) {
  if (type === "MIT") {
    return "[!License: MIT](https://img.shields.io/badge/badge-MIT-brightgreen)";
  } else if (type === "APACHE 2.0") {
    return "[!License](https://img.shields.io/badge/badge-APACHE%202.0-blue)";
  } else if (type === "GPL 3.0") {
    return "[!License](https://img.shields.io/badge/badge-GPL%203.0-blueviolet)";
  } else if (type === "BSD 3") {
    return "[!License](https://img.shields.io/badge/badge-BSD%203-pink)";
  }
}

const markdownTemplate = (answers) => {
  return `

  # ${answers.title} 
  ${renderLicenseBadge(answers.licenseType)}

  ## ${answers.description}
  
  ## Installation Instructions
 ${answers.installation}

  ## Usage Information
 ${answers.usage}

  ## License
 ${answers.license}

  ## Test
 ${answers.tests}

  ## GitHub User Name
 ${answers.github}

  ## Email
 ${answers.email}
  
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = markdownTemplate;
