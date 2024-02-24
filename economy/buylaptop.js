module.exports = {
  
  name: "buy-laptop",
  code: `
$description[**@$username** successfully bought a **fishing rod** for **$13000**. Remaining cash: $$sub[$getGlobalUserVar[cash]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];13000]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]
$onlyIf[$getGlobalUserVar[cash]>=13000;Not enough cash! You need $13000 to buy a fishing rod, but you only have $$getGlobalUserVar[cash].]`
}