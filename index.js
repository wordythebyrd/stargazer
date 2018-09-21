#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("./inquirer");
const github = require("./github");

clear();

console.log(
  chalk.yellow(
    figlet.textSync("Stargazer", {
      horizontalLayout: "full"
    })
  )
);

const run = async () => {
  try {
    // ask username
    const { username } = await inquirer.askUsername();

    // ask starred repos
    const repos = await github.getStarredRepos(username);
    const formatRepos = repos.map(data => {
      data.repo["value"] = data.repo.clone_url;
      return data.repo;
    });
    const { selectedRepos } = await inquirer.askStarredRepos(formatRepos);

    // TODO: clone starred repos
    console.log(chalk.green(selectedRepos));

  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

run();
