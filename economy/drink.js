module.exports = {
  
  name: "drink",
  code: `
$description[You drunk a normal glass of water, nothing special happend

+3 health; +2 hunger; +5 thirst]]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[dink];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];3]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];2]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];5]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hungry level is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirsty level is 100%]
$onlyIf[$getGlobalUserVar[drink]>=1;Not enough drink!]`
}