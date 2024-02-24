module.exports = {
  
  name: "buy-medic",
  code: `
$description[**@$username** successfully bought **medicine** for **125**. Remaining cash: $$sub[$getGlobalUserVar[cash]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];125]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];1]]
$onlyIf[$getGlobalUserVar[cash]>=125;Not enough cash!]`
}