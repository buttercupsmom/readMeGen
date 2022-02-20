// Function that returns a license badge defined on which license is chosen
function renderLicenseBadge(type) {
  if (type === "MIT") {
    return "[!License: MIT](https://img.shields.io/badge/badge-MIT-brightgreen)";
  } else if (type === "APACHE 2.0") {
    return "[!License](https://img.shields.io/badge/badge-APACHE%202.0-blue)";
  } else if (type === "GPL 3.0") {
    return "[!License](https://img.shields.io/badge/badge-GPL%203.0-blueviolet)";
  } else if (type === "BSD 3") {
    return "[!License](https://img.shields.io/badge/badge-BSD%203-pink)";
  } else if (type === "None") {
    return "";
  }
}

// returns the link to the license section of README.md file
// function renderLicenseLink( { license }) {
//   const licenseLink = "";
//   if (license !== "" && license !== "None")
// }

function generateMarkdown(answers) {
  const anyBadge = renderLicenseBadge(data.license);

  return `# ${answers.title} 


  ${anyBadge}

  ## ${answers.description}
  
  ## Installation Instructions
 ${answers.installation}

  ## Usage Information
 ${answers.usage}

 ## Test
 ${answers.tests}

  ## License
 ${answers.license}

  ## GitHub User Name
 ${answers.github}

  ## Email
 ${answers.email}
  
  `;
}

module.exports = generateMarkdown;
