module.exports = {
  
  name: "cheat",
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message[1]]]
$description[**@$username** has cheated **$$message[1]** cash into their account.]
$onlyIf[$isNumber[$message[1]]==true;Please enter a valid number to cheat.]
$onlyForRoles[1205840468118609920;Only users with the special rank can use this command!]
`
}