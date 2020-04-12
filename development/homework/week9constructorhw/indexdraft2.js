// # Unit 09 Node.js and ES6+ Homework: Good README Generator

// Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

//QUESTION: what is the 'sh' here?  What is it's function?  Is it related to 'syncNode' or 'npm init' commands?
// ```sh
// node index.js
// ```
//run the command ____________

// The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.
    //This is activity 14 and 15
    //pseudocode:
        //application is invoked with ```sh node index.js

        //user is prompted for their GitHub username

//here we are calling and running the 'inquirer' script
var inquirer = require("inquirer");

inquirer
  //prompt method takes one argument in the form of an array of questions
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    }
  ]);
  // once you complete the prompt function then you want to chain & run the function
  //response which holds what the user typed in response to the prompt
  .then(function(answers) {//this function was 'response' but it makes more sense
                            //to call it 'answers'

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }

    console.log('done')
    console.log(answers.username)

  });

        //user enters their username
        //application receives input
        //this triggers a call to the GitHub API
        //which retrieves the user's email and profile image
        //then triggers prompted questions for the user
            // * At least one badge
            // * Project title
            // * Description
            // * Table of Contents
            // * Installation
            // * Usage
            // * License
            // * Contributing
            // * Tests
            // * Questions
            //   * User GitHub profile picture
            //   * User GitHub email


===================================================================
activity 5 is relevant 

// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});
// ====================================================

var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});


// =========================================================================
//activity 14 is relevant to this hw Node Class 32:00.


var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {
      //call the github API in order to get email and bio image

      //build readme from answers (transpiled to readme markdown)

      //save to file

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
// =====================================================================
// exercise 33

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
// ========================================================






const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
