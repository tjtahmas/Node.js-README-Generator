// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({name,descriptionMotiv,descriptionWhy,descriptionProblem,descriptionLearn,installation,usage,contributing,tests,year,fullname,github,email}) =>
`# ${name}
## Description
${descriptionMotiv}
${descriptionWhy}
${descriptionProblem}
${descriptionLearn}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
## Installation
${installation}
## Usage
${usage}
## Credits
Github: github.com/${github}

Email: ${email}
## License

MIT License

Copyright (c) ${year} ${fullname}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---
## How to Contribute
${contributing}
## Tests
${tests}
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
            message: 'Give a description of the project! \n What was your motivation?',
            name: 'descriptionMotiv',
        },
        {
            type: 'input',
            message: 'Give a description of the project! \n Why did you build this project?',
            name: 'descriptionWhy',
        },
        {
            type: 'input',
            message: 'Give a description of the project! \n What problem does it solve?',
            name: 'descriptionProblem',
        },
        {
            type: 'input',
            message: 'Give a description of the project! \n What did you learn?',
            name: 'descriptionLearn',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Describe the testing instructions for the project:',
            name: 'tests'
        },
        {
            type: 'input',
            message: '(License) Enter the current year:',
            name: 'year',
        },
        {
            type: 'input',
            message: '(License) Enter your full name:',
            name: 'fullname',
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




