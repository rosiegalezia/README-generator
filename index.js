const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
                message: 'Please provide a short description explaining the what, why, and how of your project.',
            },
            {
                type: 'confirm',
                name: 'contents',
                message: 'Would you like to include a Table of Contents in your README?',
                default: 'Yes'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? Please provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instructions and examples for use. You can include the file path to screenshots as needed.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select the license for your project',
                choices: [
                    {
                        name: "Apache License 2.0",
                        value: 0,
                    },
                    {
                        name: "GNU General Public License 3.0",
                        value: 1,
                    },
                    {
                        name: "MIT License",
                        value: 2,
                    },
                    {
                        name: "BSD 2-clause 'Simplified' license",
                        value: 3
                    },
                    {
                        name: "BSD 3-clause 'New' or 'Revised' license",
                        value: 4
                    },
                    {
                        name: "Boost Software License 1.0",
                        value: 5
                    },
                    {
                        name: "Creative Commons Zero v1.0 Universal",
                        value: 6,
                    },
                    {
                        name: "Eclipse Public License 2.0",
                        value: 7,
                    },
                    {
                        name: "GNU Affero General Public License v3.0",
                        value: 8,
                    },
                    {
                        name: "GNU General Public License v2.0",
                        value: 9,
                    },
                    {
                        name: "GNU Lesser General Public License v3.0",
                        value: 10,
                    },
                    {
                        name: "Mozilla Public License 2.0",
                        value: 11,
                    },
                    {
                        name: "The Unlicense",
                        value: 12,
                    }
                ],
            },
            {
                type: 'list',
                name: 'contributing',
                message: 'Would you like people to be able to contribute to your project?',
                choices: ['I want to write my own contributing guide', 'I want to use the default contributing guide', 'I do not want people to contribute'],
                default: 'I want to use the default contributing guide',
            },
            {
                name: 'diyContributing',
                type: 'input',
                message: 'Please enter your contributing info',
                when: (answers) => answers['contributing'] === 'I want to write my own contributing guide',
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
