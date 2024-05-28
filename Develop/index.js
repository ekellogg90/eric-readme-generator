// xTODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// xTODO: Create an array of questions for user input
//const questions = [];  // how should I use this?

inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'ReadMe name:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please describe how a user will interact with this application:',
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
        name: 'creditsPeople',
        type: 'input',
        message: 'List your collaborators:',
    },
    {
        name: 'credits3rdParty',
        type: 'input',
        message: 'List any 3rd party assets you used:',
    },
    {
        name: 'license',
        type: 'checkbox',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'GNU General Public License v3.0', 'MIT'],
        message: 'What type of license did you use?:',
    },
    {
        name: 'contribute',
        type: 'checkbox',
        choices: ['Commit to main directly', 'Submit PR for review', 'Fork and contribute'],
        message: 'How should I contribute to your application?:',
    }
])
.then((data) => {
    const readMe = generateReadme(data);
})

function generateReadme({title, description, motivation, why, solves, learn, challenges, installation, usage, creditsPeople, credits3rdParty, license, contribute}) {
    return `# ${title}
    
    ## Description
    
    ${description}

    - ${motivation}
    - ${why}
    - ${solves}
    - ${learn}
    - ${challenges}
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Credits
    - ${creditsPeople}
    - ${credits3rdParty}
    
    ## License
    ${license}
    
    ## How to Contribute
    ${contribute}`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success'));
}



// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', readMe);
}

// Function call to initialize app
init();
