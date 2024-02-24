module.exports = {
  
  name: "eat-pizza",
  code: `
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];2]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];6]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];4]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$randomText[0;0;0;0;0;0;0;0;0;5000]]]
$description[$randomText[You ate a pizza, nothing special happened.

+2 health; +6 hunger;+4 thirst;You ate a mysterious pizza, you gained 5k cash]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health is already 100%.]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hunger is already 100%.]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirst is already 100%.]
$onlyIf[$getGlobalUserVar[pizza]>=1;You don't have a pizza to eat.]
`
}
