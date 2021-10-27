// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({name,description,installation,usage,contributing,tests,license,github,email}) =>
`# ${name}
## Description
${description}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${installation}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
${usage}
Provide instructions and examples for use. Include screenshots as needed.

## Credits
${github}
${email}
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
${license}
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## How to Contribute
${contributing}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests
${tests}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the project?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Give a description of the project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Describe the steps to install the project:',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Give the usage information for the project:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Give the contributing guidelines for the project:',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Describe the testing instructions for the project:',
            name: 'testing'
        },
        {
            type: 'list',
            message: 'Select a license for the project',
            name: 'license',
            choices: ['Student','University','Professional','Amateur']
        },
        {
            type: 'input',
            message: 'Input your Github username:',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Input your email address:',
            name: 'email'
        }
    ])
    .then((response) => 
    fs.writeFile(`${response.name}.md`, generateREADME(response), 'utf-8', function(){
        console.log('successfully wrote file')
    })
  );

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


