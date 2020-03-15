const { games, gamesPlain } = require("./games");
const colors = require("colors")
const inquirer = require("inquirer");
const questions = [
  {
    type: "list",
    name: "gameList",
    message: "Choose game",
    choices: gamesPlain
  }
];

const order = function(){
inquirer.prompt(questions).then(function(answers) {
  console.log(colors.red(answers));
});
}
module.exports=order;