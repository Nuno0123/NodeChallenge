// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Boost Software 1.0") {
    return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
  } else if (license === "BSD 3-Clause License") {
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  } else if (license === "BSD 2-Clause") {
    return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software 1.0") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD 3-Clause License") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "BSD 2-Clause License") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return "";
  } else {
    return "# License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Collected Data: ", data);

  return `
# Project 
${data.title}

${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
# Installation
${data.installation}
# Usage
${data.usage}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
* As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 
# Contributing 
${data.contributing}
# Tests
${data.tests}
# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;
