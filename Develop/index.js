// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

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
        message: 'wrfg',
    },
    {
        name:'wefw',
        type: 'input',
        message: 'wef',
    },
    {
        name:'',
        type: 'input',
        message:'',
    },
    {
        name:'',
        type: 'input',
        message:'',
    },
    {
        name:'',
        type: 'input',
        message:'',
    },
    {
        name:'',
        type: 'input',
        message:'',
    },
    {
        name:'',
        type: 'input',
        message:'',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
