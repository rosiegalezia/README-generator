function generateBadge(answers) {
  // License badges array
  const badges = [
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  ]

  // get the index of the license selected in prompt
  const licenseIndex = answers.license

  // access the same index from the array of badges
  const badgeMD = badges[licenseIndex]

  return badgeMD
}

function contributing(answers) {
  if (answers.contributing === 'I want to use the default contributing guide') {
  return `First off, thank you for considering contributing to ${answers.title}. It's people like you that make ${answers.title} such a great tool.
    
  ${answers.title} is an open source project and we love to receive contributions from our community — you! There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into ${answers.title} itself.
    
  If you'd like to contribute, please contact me at ${answers.email}.`
  }
  else if (answers.contributing === 'I want to write my own contributing guide') {
    return answers.diyContributing
  } else
    return `N/A`
}

function displayLicenseName(answers) {
  // display the name of the license selected rather than the value
  if (answers.license === 0) {
    return `Apache License 2.0`
  } else
    if (answers.license === 1) {
      return `GNU General Public License 3.0`
    } else
      if (answers.license === 2) {
        return `MIT License`
      } else
        if (answers.license === 3) {
          return `BSD 2-clause 'Simplified' license`
        } else
          if (answers.license === 4) {
            return `BSD 3-clause 'New' or 'Revised' license`
          } else
            if (answers.license === 5) {
              return `Boost Software License 1.0`
            } else
              if (answers.license === 6) {
                return `Creative Commons Zero v1.0 Universal`
              } else
                if (answers.license === 7) {
                  return `Eclipse Public License 2.0`
                } else
                  if (answers.license === 8) {
                    return `GNU Affero General Public License v3.0`
                  } else
                    if (answers.license === 9) {
                      return `GNU General Public License v2.0`
                    } else
                      if (answers.license === 10) {
                        return `GNU Lesser General Public License v3.0`
                      } else
                        if (answers.license === 11) {
                          return `Mozilla Public License 2.0`
                        } else
                          if (answers.license === 12) {
                            return `The Unlicense Livense`
                          }
}

function tableOfContents(answers){
  if (answers.contents === true) {
    return `## Table of Contents
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    `
  } else {
    return ``
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${generateBadge(answers)}

  ## Description
  ${answers.description}

  ${tableOfContents(answers)}
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  Produced under the ${displayLicenseName(answers)}.

  ## Contributing
  ${contributing(answers)}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions about this repository, contact me via email at ${answers.email}, or via github at github.com/${answers.github}
`;

}

module.exports = generateMarkdown;
