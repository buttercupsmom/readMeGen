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

function generateMarkdown(answers) {
  const anyBadge = renderLicenseBadge(answers.license);

  return `# ${answers.title} 


  ${anyBadge}

  ## Description
${answers.description}

## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[Tests](#tests)
*[License](#license)
*[Links](#repoLink)(#deployedPageLink)
*[Author](#govName)
-[Questions](#questions)
  
  ## Installation Instructions
 ${answers.installation}

  ## Usage Information
 ${answers.usage}

 ## Tests
 ${answers.tests}

  ## License
 ${answers.license}

 ## Contributions
 ${answers.contributions}

 ## Author
 ${answers.govName}

 ## Links
- Here is the repo: [${answers.github}/${answers.title}](${answers.repoLink})
- Here is the page: [${github}/pages](${deployedPageLink})

 ## Questions

 If you have any further questions or comments:

* Direct Message me on GitHub: [${answers.github}
* Email me: [${answers.email}(mailto:${answers.email})]
  `;
}

module.exports = generateMarkdown;
