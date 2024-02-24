module.exports = {
  
  name: "cheat",
  code: `
$if[$message[1]==cash]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message[2]]]
$description[**@$username** has cheated **$$message[2]** cash into their account.]
$else
$setGlobalUserVar[$message[1];$sum[$getGlobalUserVar[$message[1]];$message[2]]]
$description[**@$username** has cheated **$message[2] $message[1]** into their inventory.]
$endif
$onlyIf[$checkContains[$message[1];cash;drink;fishrod;pizza;health;hungry;thirsty;fish;diamond;laptop;car;house;fuel]==true;Please enter a valid item to cheat (cash, drink, fishrod, etc.).]
$onlyIf[$isNumber[$message[2]]==true;Please enter a valid number to cheat.]
$onlyForRoles[1205840468118609920;Only users with the special rank can use this command!]
`
}