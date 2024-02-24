module.exports = {
  
  name: "cheatmenu",
  code: `
$title[Cheat Menu]
$description[
To use the cheat command, you must have the "Bot Permission" rank. Here are the commands you can use:

- \`!!cheat cash @user <amount>\`: Gives the specified amount of cash to the mentioned user.
- \`!!cheat <item> @user <amount>\`: Gives the specified amount of an item to the mentioned user.

You can cheat the following items:
- cash
- drink
- fishrod
- pizza
- health
- hungry
- thirsty
- fish
- diamond
- laptop
- car
- house
- fuel

Example:
\`!!cheat cash @username 1000\`: This would give 1000 cash to the mentioned user.
\`!!cheat fishrod @username 3\`: This would add 3 fishing rods to the mentioned user's inventory.]

$color[333333]
$addTimestamp
$footer[Use responsibly!]
`
}