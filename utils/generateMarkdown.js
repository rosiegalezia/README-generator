// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents (Optional)
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  Produced under the ${answers.license}
  // TODO: work out badges

  ## Contributing
  ${answers.contributing}
  // TODO: work out how to add a separate contributing doc

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions about this repository, contact me via email at ${answers.email}, or via github at github.com/${answers.github}
`;

}

module.exports = generateMarkdown;
