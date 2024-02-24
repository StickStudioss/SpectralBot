module.exports = {
  
  name: "daily",
  code: `
$title[Daily Salary.]
$thumbnail[$userAvatar[$authorID]]
$description[You have received **$getServerVar[daily]** of your daily allowance! Come back tomorrow to claim it again.]
$color[$random[0;999999]]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[daily]]]
$globalCooldown[1d;**⏰ Wait for %time% to claim daily salary again!**]`
}