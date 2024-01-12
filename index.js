const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown.js");

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
            },
        ])
            // .then // ... set the answers to constants
            .then((answers) => {
                const titleAnswer = answers.title
                const descriptionAnswer = answers.description
                const installationAnswer = answers.installation
                // console.log(titleAnswer)
                // console.log(descriptionAnswer)
                // console.log(installationAnswer)

                // call the write to file function
                // if the output readme file doesn't exist, it will be generated automatically
                const markdownGenerated = generateMarkdown(answers)

                fs.writeFile('readmeGenerated.md', markdownGenerated, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            })
    ];


}


// function call to initialize program
init();
