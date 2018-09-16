const CLI = require('clui')
const Spinner = CLI.Spinner;

module.exports = {
    cloneRepo: async () => {
        const status = new Spinner('Cloning repositories...');
        status.start();

        try {
            //TODO: Clone repositories
        } catch (err) {
            throw err;
        } finally {
            status.stop();
        }
    }
}