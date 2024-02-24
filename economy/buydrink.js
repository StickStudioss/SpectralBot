module.exports = {
  
  name: "buy-drink",
  code: `
$description[@$username success bought a **Drink** for **$200**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];200]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[cash]>=45;Not enough cash!]`
}