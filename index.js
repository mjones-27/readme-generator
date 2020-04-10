var inquirer = require("inquirer");
var fs = require('fs');
var axios = require("axios");

inquirer.prompt([
  {
    type: "input",
    message: "Project title: ",
    name: "project"
  },
  {
    type: "input",
    message: "Project description: ",
    name: "description"
  },
  {
    type: "input",
    message: "Project installation dependencies: ",
    name: "installation"
  },
  {
    type: "input",
    message: "Project usage cases: ",
    name: "usage"
  },
  {
    type: "input",
    message: "Porject licenses: ",
    name: "license"
  },
  {
    type: "input",
    message: "Project contributors: ",
    name: "contributors"
  },
  {
    type: "input",
    message: "Project unit tests: ",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your Github username? ",
    name: "githubUser"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },


]).then(function(response) {

  // var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log("Success!");

  // });

  // const project = response.project;

  // console.log(project);

  const project = response.project;
  const description = response.description;
  const installation = response.installation;
  const usage = response.usage;
  const licenses = response.licenses;
  const contributors = response.contributors;
  const tests = response.tests;
  const githubUser = response.githubUser;
  const email = response.email;

  const githubURL = "https://github.com/" + githubUser;
  const githubAPI = "https://api.github.com/users/" + githubUser;

  axios
    .get(githubAPI).then(function(response){
      const img = response.data.avatar_url;
      const name = response.data.name;
      const email = response.data.email;
      const readmeFile =
      
      `# ${project}

      ![badge](https://img.shields.io/badge/license-${project}-darkblue)

      
      
      ## Descripton
      ${description}
                              
      ## Table of Contents
                              
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Tests](#tests)
                              
      ## Installation
      ${installation}
                              
      ## Usage
      ${usage}
                              
      ## License
      ${licenses}
                      
      ## Tests
      ${tests}
                      
      ## Contact
      ![profile image](${img})
      <br/>
      ${name}
      <br/>
      [GitHub Page](${githubURL})
      <br/>
      ${email}`
                              
      fs.writeFile("readme.md", readmeFile, err=>{
      if(err){
         return console.log(err)
      }
        console.log("new readme.md created")
        })
  })
});
