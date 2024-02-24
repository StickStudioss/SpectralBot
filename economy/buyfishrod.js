module.exports = {
  
  name: "buy-fishrod",
  code: `
$description[**@$username** successfully bought a **fishing rod** for **$7500**. Remaining cash: $$sub[$getGlobalUserVar[cash]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];7500]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[cash]>=7500;Not enough cash! You need $7500 to buy a fishing rod, but you only have $$getGlobalUserVar[cash].]`
}