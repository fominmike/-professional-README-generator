// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter in a description'
    },
    {
        name:'installation',
        type: 'input',
        message: 'Step to install application',
    },
    {
        name:'usage',
        type: 'input',
        message: 'How to use this application?',
    },
    {
        name:'contribution',
        type: 'input',
        message:'What are the contributions?',
    },
    {
        name:'test',
        type: 'input',
        message:'Enter testing instructions:',
    },
    {
        name:'license',
        type: 'list',
        choices:['Apache_License_2.0', 'GNU_General_Public_License_v3.0', 'MIT_License', 'BSD_2-ClauseSimplifiedLicense', 'BSD3-ClauseNeworRevisedLicense', 'BoostSoftwareLicense1.0', 'CreativCommonsZerov1.0Universal', 'EclipsePublicLicense2.0', 'GNUAfferoGeneralPublicLicensev3.0', 'GNUGeneralPublicLicensev2.0', 'GNULesserGeneralPublicLicensev2.0', 'MozillaPublicLicense2.0', 'TheUnlicense'],
    },
    {
        name:'github',
        type: 'input',
        message:'what is your github username?',
    },
    {
        name:'email',
        type: 'input',
        message:'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        fs.writeFile('sample.md', generateMarkdown(answers), (err) => 
        err ? console.error(err) : console.log('Success!'))
    })
}

// Function call to initialize app
init();
