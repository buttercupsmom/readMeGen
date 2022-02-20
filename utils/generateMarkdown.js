// Function that returns a license badge defined on which license is chosen
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[!License: MIT](https://img.shields.io/badge/badge-MIT-brightgreen)";
  } else if (license === "APACHE 2.0") {
    return "[!License](https://img.shields.io/badge/badge-APACHE%202.0-blue)";
  } else if (license === "GPL 3.0") {
    return "[!License](https://img.shields.io/badge/badge-GPL%203.0-blueviolet)";
  } else if (license === "BSD 3") {
    return "[!License](https://img.shields.io/badge/badge-BSD%203-pink)";
  } else if (license === "None") {
    return "";
  }
}

// Function that returns whats is written under license section.
function rendLicenseLink(license) {
  let licenseLink = "";
  if (license === "None") {
    return "";
  } else {
    licenseLink = `*[License](./READ.me#license)`;
  }
  return licenseLink;
}

// Function which returns link to license section of README.md.
function renderLicenseSec({ license }) {
  let licenseSec = "";
  if (license !== "None") {
    return "";
  } else {
    licenseSec = `## License
This project is licensed under the ${license} license.`;
  }
  return licenseSec;
}

//   if ( license !== "" && license !== "none") {
//     licenseSec = `## License
//     This project is licensed under the ${license} license.`
//   }
//   return licenseSec;
// }

const generateMarkdown = (data) => {
  const anyBadge = renderLicenseBadge(data.license);

  return `# ${data.title} 


  ${anyBadge}

  ## Description
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Tests](#tests)
-[License](#license)
-[Links](#repoLink)(#deployedPageLink)
-[Author](#govName)
-[Questions](#questions)
  
  ## Installation Instructions
 ${data.installation}

  ## Usage Information
 ${data.usage}

 ## Tests
 ${data.tests}

  ## License
 ${data.license}

 ## Contributions
 ${data.contributions}

 ## Author
 ${data.govName}

 ## Links
- Here is the repo: [${data.github}/${data.title}](${data.repoLink})
- Here is the page: [${data.github}/pages](${data.deployedPageLink})

 ## Questions

 If you have any further questions or comments:

* Direct Message me on GitHub: [${data.github}]
* Email me: [${data.email}(mailto:${data.email})]
  `;
};

// export so it can be required in index.js
module.exports = {
  generateMarkdown,
  rendLicenseLink,
  renderLicenseBadge,
  renderLicenseSec,
};
