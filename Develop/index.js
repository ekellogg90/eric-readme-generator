// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Gather user input
function userInput() {
    const questions = [{
        name: 'title',
        type: 'input',
        message: 'ReadMe name:',
    },
    {
        name: 'motivation',
        type: 'input',
        message: 'What was your motivation for making this?:',
    },
    {
        name: 'why',
        type: 'input',
        message: 'Why did you build this application?:',
    },
    {
        name: 'solves',
        type: 'input',
        message: 'What problem does this solve?:',
    },
    {
        name: 'learn',
        type: 'input',
        message: 'What did you learn?:',
    },
    {
        name: 'challenges',
        type: 'input',
        message: 'What challenges did you face?:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions for use:',
    },
    {
        name: 'license',
        type: 'list',
        choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT'],
        message: 'Choose a license:',
    },
    {
        name: 'contribute',
        type: 'list',
        choices: ['Commit directly to main', 'Submit PR for review', 'Fork and contribute'],
        message: 'How should I contribute to your application?:',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Test instructions:',
    },
    {
        name: 'gitHub',
        type: 'input',
        message: 'gitHub User Name:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your Email:',
    },
    {
        name: 'creditsPeople',
        type: 'input',
        message: 'List your collaborators:',
    },
    {
        name: 'credits3rdParty',
        type: 'input',
        message: 'List any 3rd party assets you used:',
    },
];
        inquirer.prompt(questions)
        .then((data) => {
            let licenseBadge = '';
            console.log(data.license);
            switch (data.license) {
                case 'Apache license 2.0':
                    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    break;
                case 'GNU General Public License v3.0':
                    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                    break;
                case 'MIT':
                    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                default:
                    break;
            }
            const readMe = generateReadme(data, licenseBadge);
            writeToFile('README.md', readMe);
        });
}

function generateReadme({title, motivation, why, solves, learn, challenges, installation, usage, creditsPeople, credits3rdParty, license, contribute, tests, gitHub, email}, licenseBadge) {
    return `# ${title}                                                                                                                      ${licenseBadge}
    
## Description
- Motivation: ${motivation}
- Why: ${why}
- What problem does this solve: ${solves}
- What I learned: ${learn}
- Challanges: ${challenges}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage) 
- [License](#License) 
- [Contribute](#Contribute) 
- [Tests](#Tests) 
- [Questions](#Questions) 
- [Credits](#Credits) 

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contribute
${contribute}

## Tests
${tests}

## Questions
- [${gitHub}'s gitHub profile](https://github.com/${gitHub})
- Please contact me at <a href="mailto:${email}">${email}</a> for any additional questions.

## Credits
- ${creditsPeople}
- ${credits3rdParty}
`
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success'));
}

// Function to initialize app
function init() {
    userInput();
}

// Function call to initialize app
init();
