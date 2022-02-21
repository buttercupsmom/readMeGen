// Function that returns a license badge defined on which license is chosen
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[!License: MIT](https://img.shields.io/badge/badge-MIT-brightgreen)";
  } else if (license === "APACHE_2.0") {
    return "[!License](https://img.shields.io/badge/badge-APACHE%202.0-blue)";
  } else if (license === "GPL_3.0") {
    return "[!License](https://img.shields.io/badge/badge-GPL%203.0-blueviolet)";
  } else if (license === "BSD_3") {
    return "[!License](https://img.shields.io/badge/badge-BSD%203-pink)";
  } else if (license === "None") {
    return "";
  }
}

// Function which chooses which license goes with which name
function renderLicenseSelection(licenseSelection) {
  if (licenseSelection === "MIT") {
    return `The license for this project is ${licenseSelection}`;
  } else if (licenseSelection === "APACHE_2.0") {
    return `The license for this project is ${licenseSelection}`;
  } else if (licenseSelection === "GPL_3.0") {
    return `The license for this project is ${licenseSelection}`;
  } else if (licenseSelection === "BSD_3") {
    return `The license for this project is ${licenseSelection}`;
  } else {
    return `This project does not have a license.`;
  }
}

const generateTemplate = (data) => {
  return `
  # ${data.title} ${renderLicenseBadge(data.licenseSelection)}

  ## Description
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Tests](#tests)
-[License](#license)
-[Contributions](#contributions)
-[Author](#govName)
-[Questions](#questions)
  
  ## Installation Instructions
 ${data.installation}

  ## Usage Information
 ${data.usage}

 ## Tests
 ${data.tests}

  ## License
  ${renderLicenseSelection(data.licenseSelection)}

 ## Contributions
 ${data.contributions}

 ## Author
 ${data.govName}

 ## Questions
 If you have any further questions or comments:

* Direct Message me on GitHub:[github](https://github.com/${data.github}
* Email me: ${data.email}
  `;
};

// export so it can be required in index.js
module.exports = generateTemplate;
