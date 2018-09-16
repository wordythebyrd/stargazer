const inquirer = require('inquirer');

module.exports = {
    askUsername: () => {
        const questions = [{
                name: 'username',
                type: 'input',
                message: 'Enter a GitHub username:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a GitHub username.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }
}