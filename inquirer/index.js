const inquirer = require('./inquirer');

module.exports = {
    askGithubCredentials: inquirer.askGithubCredentials,
    askIgnoreFiles: inquirer.askIgnoreFiles,
    askRepoDetails: inquirer.askRepoDetails
}