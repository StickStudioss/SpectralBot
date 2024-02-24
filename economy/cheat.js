module.exports = {
  
  name: "cheat",
  code: `
$if[$message[1]==cash]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1]];$message[3]];$mentioned[1]]
$description[**@$username** has cheated **$$message[3]** cash into <@$mentioned[1]>'s account.]
$else
$setGlobalUserVar[$message[1];$sum[$getGlobalUserVar[$message[1];$mentioned[1]];$message[3]];$mentioned[1]]
$description[**@$username** has cheated **$message[3] $message[1]** into <@$mentioned[1]>'s inventory.]
$endif
$onlyIf[$message[2]!=;Please mention a user to cheat for them.]
$onlyIf[$checkContains[$message[1];cash;drink;fishrod;pizza;health;hungry;thirsty;fish;diamond;laptop;car;house;fuel]==true;Please enter a valid item to cheat (cash, drink, fishrod, etc.).]
$onlyIf[$isNumber[$message[3]]==true;Please enter a valid number to cheat.]
$onlyIf[$mentioned[1]!=;You must mention a user to cheat items/cash to their account.]
$onlyForRoles[1205840468118609920;Only users with the special rank can use this command!]
`
}