function renderLicenseBadge(type) {
  if (type !== "None") {
    return `![${type}]([![License: MIT](https://img.shields.io/badge/License-${type}-yellow.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
