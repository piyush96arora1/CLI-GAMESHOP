
const colors = require('colors');
const { games } = require('./games');

module.exports = function() {
    console.log('Games MENU');
    console.log('------------------');

    games.forEach((type) => {
        console.log('%s %s', colors.bold(type.name), colors.grey(': '+ type.price));
    });
};