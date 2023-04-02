const licenses = ["https://img.shields.io/badge/License-Boost_1.0-lightblue.svg", "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg", "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"]

const links = ["https://www.boost.org/LICENSE_1_0.txt", "https://opensource.org/licenses/BSD-3-Clause", "https://opensource.org/licenses/BSD-2-Clause"]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](${0})](${})`

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project 
${data.title}
${data.getLicense}
   
#Description
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
# License 
${data.license}
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
