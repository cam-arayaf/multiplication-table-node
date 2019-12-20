const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('list', 'Print console multiplication table', options)
    .command('create', 'Create multiplication table file', options)
    .help()
    .argv;

module.exports = { argv };