#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('./inquirer');

clear();

console.log(
    chalk.yellow(
        figlet.textSync('Stargazer', {
            horizontalLayout: 'full'
        })
    )
);

const run = async () => {
    try {
        // Get username
        const { username } = await inquirer.askUsername();
        console.log(chalk.green(username));
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
}

run();