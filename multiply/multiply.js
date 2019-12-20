const fs = require('fs');
const colors = require('colors');

let isBadBaseOrLimit = (base, limit) => {
    return !Number(base) || !Number(limit);
}

let badBaseOrLimitMsg = (base, limit) => {
    console.log(`Base '${ base }' or limit '${ limit }' aren't a number`.red);
}

let listMultiplicationTable = (base, limit) => {
    if (isBadBaseOrLimit(base, limit)) return badBaseOrLimitMsg(base, limit);

    for (let index = 1; index <= limit; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`.green);
    }
};

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (isBadBaseOrLimit(base, limit)) return badBaseOrLimitMsg(base, limit);

        let data = '';

        for (let index = 1; index <= limit; index++) {
            data += `${ base } * ${ index } = ${ base * index }`;
            if (index < limit) data += '\n';
        }

        fs.writeFile(`tables/multiplication-table-base-${ base }-limit-${ limit }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`multiplication-table-base-${ base }-limit-${ limit }.txt`.green);
        });
    });
}

module.exports = { listMultiplicationTable, createFile };