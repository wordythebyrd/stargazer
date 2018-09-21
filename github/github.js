const octokit = require("@octokit/rest")();

module.exports = {
  getStarredRepos: async username => {
    const result = await octokit.activity.getStarredReposForUser({ username });
    return result.data;
  }
};
