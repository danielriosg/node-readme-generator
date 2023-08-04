const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter your project's title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "ISC", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

const fs = require("fs");

inquirer.prompt(questions).then((answers) => {
  console.log("User answers:", answers);
  generateREADME(answers); // Call the function to generate README content based on answers
});

function generateREADME(answers) {
  // Create the content of the README.md file using the user's answers
  const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For additional questions, contact ${answers.githubUsername} at ${answers.email}.
`;

  // Write the content to the README.md file
  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) {
      console.error("Error writing README.md:", err);
    } else {
      console.log("README.md file created successfully.");
    }
  });
}

