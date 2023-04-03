// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

const questions = [
    {
        type: "input",
        name: "title",
        message: "Select a title for your project",
        validate: validateInput,
    },

    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: validateInput,
    },

    {
        type: "input",
        name: "installation",
        message: "Enter how to install the software, or commands for the program.",
        validate: validateInput,
    },

 
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project.",
        validate: validateInput,
    },

 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "Apache 2.0",
            "Boost Software 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
        ],
        validate: validateInput,
    },

 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        validate: validateInput,
    },

 
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        validate: validateInput,
    },

  
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

  
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if(value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
