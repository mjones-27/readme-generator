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
    name: "github"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },

  // {
  //   type: "checkbox",
  //   message: "What languages do you know?",
  //   name: "stack",
  //   choices: [
  //     "HTML", 
  //     "CSS", 
  //     "JavaScript", 
  //     "MySQL"
  //   ]
  // },
  // {
  //   type: "list",
  //   message: "What is your preferred method of communication?",
  //   name: "contact",
  //   choices: [
  //     "email",
  //     "phone",
  //     "telekinesis"
  //   ]
  // }
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
  const license = response.license;
  const contributors = response.contributors;
  const tests = response.tests;
  const name = response.name;
  const email = response.email;

  const githubURL = "https://github.com/" + github;
  const githubAPI = "https://api.github.com/users/" + github;

  axios
    .get(githubAPI).then(function(response){
      const img = response.data.avatar_url;
      const email = response.data.email;
      const readmeFile =
      
      `# ${projectName}
      // ![repoLanguage](https://img.shields.io/github/languages/top/${githubName}/${noSpace})
      ## Descripton
      ${descripton}
                              
      ## Table of Contents
                              
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Tests](#tests)
                              
      ## Installation
      ${install}
                              
      ## Usage
      ${usage}
                              
      ## License
      ${licenses}
                      
      ## Tests
      ${tests}
                      
      ## Contact
      ![profile image](${image})
      <br/>
      ${name}
      <br/>
      [GitHub Page](${link})
      <br/>
      ${email}`
                              
      fs.writeFile(`New_README/README.md`, readmeFile, err=>{
      if(err){
         return console.log(err)
      }
        console.log("new readme.md created")
        })
  })
});
