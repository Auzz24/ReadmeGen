// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'Enter your project name (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
        validate: purposeDescription => {
            if (purposeDescription) {
                return true;
            } else {
                console.log('Please enter your projects purpose');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe the steps taken to build your project',
        validate: purposeInstall => {
            if (purposeInstall) {
                return true;
            } else {
                console.log('Please enter your projects purpose');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link!');
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply to you readme? (Required)',
        choices: ['MIT', 'Mozilla', 'Apache'],
        },
  ];

const start = () => {
    return inquirer.prompt(questions);
};

 start()
  .then(readMeData => {
    const pageHTML = generateMarkdown(readMeData);

    fs.writeFile('./readme.md', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out readme.md in this directory to see it!');
    });
  });


