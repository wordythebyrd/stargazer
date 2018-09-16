const repo = require('./repo');

module.exports = {
    createRemoteRepo: repo.createRemoteRepo,
    createGitignore: repo.createGitignore,
    setupRepo: repo.setupRepo
}