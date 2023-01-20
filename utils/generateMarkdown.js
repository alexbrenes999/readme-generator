const indexImport = require('../index');

// Returns license badges
function renderLicenseBadge(license) {
    badge = '';

    if (license == 'None') {
      badge = '';
    } else if (license == 'MIT') {
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (license == 'Boost 1.0') {
      badge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    } else if (license == 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    return badge;
}

// Returns license links
function renderLicenseLink(license) {
  link = '';

  if (license == 'None') {
    link = '';
  } else if (license == 'MIT') {
    link = '(https://opensource.org/licenses/MIT)'
  } else if (license == 'Boost 1.0') {
    link = '(https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'Apache 2.0') {
    link = '(https://opensource.org/licenses/Apache-2.0)'
  }
}

// Returns license section to READme file
function renderLicenseSection(license) {
  section = '';

  if(license === 'None') {
    section = ''
  } else {
    section = `license: ${license}`
  }
  return section;
}

// Creates markdown for the READme file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [Questions](#questions)
  
  # Description
  - ${data.description}
  # Installation
  - ${data.installation}
  ## Usage
  - ${data.usage}
  ## License
  - ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  ## Contributions
  - ${data.contributions}
  ## Tests
  - ${data.tests}
  ## Questions
  - Contact me
  - Github: https://github.com/${data.github}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
