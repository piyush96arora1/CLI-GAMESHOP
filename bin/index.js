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

program.parse(process.argv)