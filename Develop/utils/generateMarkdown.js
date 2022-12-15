// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contribution](#contribution)

  [Test](#test)

  [License](#license)

  [GitHub](#github)

  [Email](#email)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${data.license}
  ## Questions

  [GitHub](https://github.com/${data.github})

  Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
