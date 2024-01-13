const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: add bottom bar?

// 1. Come up with default structure for README
// 2. Decide on questions to ask, and question format, e.g. text input, dropdown, checkbox etc
// 3. Handle user input - generate README.md content based on user input
// 4. Write to README.md file


// // function to write README file
// function writeToFile(fileName, answers) {
//     // get content from generateMarkdown function/file
//     // write to the md file

//     fs.writeFile(fileName, answers, (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );
// }

// function to initialize program
function init() {

    // array of questions for user
    const questions = [
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your project title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
                // default?
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use. Include screenshots as needed.re the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select the license for your project',
                choices: ["Apache License 2.0", "GNU General Public License 3.0", "MIT License","BSD 2-clause 'Simplified' license", "BSD 3-clause 'New' or 'Revised' license", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
            },
            {
                type: 'confirm',
                name: 'contributing',
                message: 'Would you like to add a CONTRIBUTING file to your README?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Write tests for your application. Then provide examples on how to run them here.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please provide your GitHub username, so users can contact you with any questions.',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please provide your email address, so users can contact you with any questions.',
            },
        ])
            // .then // ... set the answers to constants
            .then((answers) => {
                // const titleAnswer = answers.title
                // const descriptionAnswer = answers.description
                // const installationAnswer = answers.installation
                // console.log(titleAnswer)
                // console.log(descriptionAnswer)
                // console.log(installationAnswer)

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

                // call the write to file function
                // if the output readme file doesn't exist, it will be generated automatically
                const markdownGenerated = generateMarkdown(answers)

                fs.writeFile('generatedREADME.md', markdownGenerated, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            })
    ];


}


// function call to initialize program
init();
