function renderLicenseBadge(type) {
  if (type !== "None") {
    return `![${type}](https://img.shields.io/badge/License-${type}-yellow.svg)`;
  } else {
    return "";
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
