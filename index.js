// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const markdownGen = require('./utils/generateMarkdown.js');

// Created an array to store all the question being asked to the user
const questions = 
[

// Title
        {
            type: 'input',
            message: 'What is your application title?',
            name: 'title',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter a name or type "N/A" to continue')
                }
            }
        },

// Description
        {
            type: 'input',
            message: 'Would you like a description? If so enter it here.',
            name: 'description',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter a description or type "N/A" to continue')
                }
            }
        },

// Installation
        {
            type: 'input',
            message: 'Is there a need to install anything?',
            name: 'installation',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter the needed instalments or type "N/A" to continue')
                }
            }
        },

// Usage
        {
            type: 'input',
            message: 'What will your application be used for?',
            name: 'usage',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter the purpose for use or type "N/A" to continue')
                }
            }
        },

// License
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT', 'Boost 1.0', 'Apache 2.0', 'None'],
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please select from choices provided')
                }
            }
        },

// Contributions
        {
            type: 'input',
            message: 'Did anyone else contribute to the code of your application?',
            name: 'contributions',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter the contributors or type "N/A" to continue')
                }
            }
        },

// Tests
        {
            type: 'input',
            message: 'Are there tests for your application?',
            name: 'tests',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter the tests or type "N/A" to continue')
                }
            }
        },

// GitHub
        {
            type: 'input',
            message: 'What is your GitHub username?(Case Sensitive)',
            name: 'github',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your username or type "N/A" to continue')
                }
            }
        },

// Email
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    console.log('Please enter your email or type "N/A" to continue')
                }
            }
        },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('testReadMe.md', data, (err) => {
        err ? console.log(err) : console.log('Congrats, you have successfully created a READme file!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then(function(data) {
        console.log(data);
    let fileName = markdownGen(data);
    writeToFile(fileName);
    })
}

// Function call to initialize app
init();

module.exports = questions