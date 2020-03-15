const games = [
  { name: "DBZ KAKAROT", price: 40, unit: "$" },
  { name: "Uncharted 4", price: 14, unit: "$" },
  { name: "SpiderMan 3", price: 15, unit: "$" },
  { name: "Last of us", price: 12, unit: "$" }
];
const platforms = [
  { name: "PS4" },
  { name: "PC" },
  { name: "Nintendo" },
  { name: "Xbox" }
];

gamesPlain = games.map(function(o) {
  return o.name + " (" + o.price + ")"; 
});
platformPlain = platforms.map(function(o) {
  return o.name  
});
module.exports={games,platforms,gamesPlain,platformPlain};