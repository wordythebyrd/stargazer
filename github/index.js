const github = require('./github');

module.exports = {
    getInstance: github.getInstance,
    getStoredGithubToken: github.getStoredGithubToken,
    setGithubCredentials: github.setGithubCredentials,
    registerNewToken: github.registerNewToken,
    githubAuth: github.githubAuth
}