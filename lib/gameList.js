
const colors = require('colors');
const { games } = require('./games');

// export function to list coffee
module.exports = function() {
    console.log('Games MENU');
    console.log('------------------');

    // list on separate lines
    games.forEach((type) => {
        console.log('%s %s', colors.bold(type.name), colors.grey(': '+ type.price));
    });
};