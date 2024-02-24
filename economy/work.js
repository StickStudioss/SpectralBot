module.exports = {
  
  name: "work",
  code: `
$author[You have worked]
$thumbnail[$userAvatar[$authorID]]
$description[You work as $randomText[Game Developer;YouTuber;Doctor;Musician;Editor;Engineer;Farmer;Streamer], and earned **$$random[45;350]** Cash]
$color[RANDOM]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[45;350]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[30s;**⏰ Wait for %time% to work again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Your hunger rate is at 10%, and you should eat first! You can buy the food.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Your thirst level is at 20%, and you should drink first! You can buy the drink.]
$onlyIf[$getGlobalUserVar[health]>=30;Your health rate is at 30%, and you should take and take medicine first! You can buy it.]`
}