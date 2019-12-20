const { listMultiplicationTable, createFile } = require('./multiply/multiply');
const { argv } = require('./config/yargs');

switch (argv._[0]) {
    case 'list':
        listMultiplicationTable(argv.base, argv.limit);
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created: ${ file }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Unrecognized command');
}