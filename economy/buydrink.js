module.exports = {
  
  name: "buy-drink",
  code: `
$description[**@$username** successfully bought a **drink** for **$200**. Remaining cash: $$sub[$getGlobalUserVar[cash]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];200]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[cash]>=200;Not enough cash! You need $200 to buy a drink, but you only have $$getGlobalUserVar[cash].]`
}