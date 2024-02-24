module.exports = {
  
  name: "eat-pizza",
  code: `
$description[You ate a pizza, nothing special happend.

+2 health; +6 hunger; +4 thirst]
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];2]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];6]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];1]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hunger is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirst is 100%]
$onlyIf[$getGlobalUserVar[pizza]>=1;You don't have a pizza to eat]`
}