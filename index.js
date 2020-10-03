const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "description",
        message: "your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: " the project usage"
    },
    {
        type: "input",
        name: "licence",
        message: "project licence or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "any contibuters"
    },
    {
        type: "input",
        name: "username",
        message: " github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: " repo link?"
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        
          fs.writeFile("README.md", generate(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New readme made");
          });
        });


function init() {

}

init();
