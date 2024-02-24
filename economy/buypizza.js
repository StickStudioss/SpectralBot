module.exports = {
  
  name: "buy-pizza",
  code: `
$description[**@$username** successfully bought a **pizza** for **95**. Remaining cash: $$sub[$getGlobalUserVar[cash]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];95]]
$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza];1]]
$onlyIf[$getGlobalUserVar[cash]>=95;Not enough cash!]`
}