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

const generateMarkdown = (data) => {
  const anyBadge = renderLicenseBadge(data.license);

  return `# ${data.title} 


  ${anyBadge}

  ## Description
${data.description}

## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[Tests](#tests)
*[License](#license)
*[Links](#repoLink)(#deployedPageLink)
*[Author](#govName)
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

* Direct Message me on GitHub: [${data.github}
* Email me: [${data.email}(mailto:${data.email})]
  `;
};

module.exports = generateMarkdown;
