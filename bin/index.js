#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const order = require("../lib/order");
const list = require("../lib/gameList");
const {games,gamesPlain} = require("../lib/games");

program.command("list").description("list all games").action(()=>list())
program
  .command("order")
  .description("order games")
  .action(() => order());

// program
//   .command("order [name]")
//   .option("-k,--gamename [value]", "Spiderman", "GAME DESC").option("-t ,--ps4","play station 4")
//   .action((name, args) =>
//     console.log("you entered", args.gamename, "arg", name)
//   );


program.parse(process.argv)