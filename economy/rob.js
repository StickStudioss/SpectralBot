module.exports = {
  name: "rob",
  code: `
$let[robChance;$random[1;100]]
$let[target;$mentioned[1]]
$let[robber;$authorID]
$let[targetCash;$getGlobalUserVar[cash;$get[target]]]
$let[robAmount;0]
$if[$get[target]!=$get[robber]]
  $if[$get[robChance]<=25]
    $description[Bro really failed. Skill issue lol]
    $color[FF0000]
  $elseif[$get[robChance]<=81]
    $let[robAmount;$truncate[$multiply[$get[targetCash];0.05]]]
    $setGlobalUserVar[cash;$sub[$get[targetCash];$get[robAmount]];$get[target]]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$get[robber]];$get[robAmount]];$get[robber]]
    $description[You stole a small portion from $username[$get[target]] out of his balance. (5% - $get[robAmount])]
    $color[00FF00]
  $elseif[$get[robChance]<=99]
    $let[robAmount;$truncate[$multiply[$get[targetCash];0.15]]]
    $setGlobalUserVar[cash;$sub[$get[targetCash];$get[robAmount]];$get[target]]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$get[robber]];$get[robAmount]];$get[robber]]
    $description[You stole a respectable amount of cash from $username[$get[target]]. (15% - $get[robAmount])]
    $color[00FF00]
  $else
    $let[robAmount;$get[targetCash]]
    $setGlobalUserVar[cash;0;$get[target]]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$get[robber]];$get[robAmount]];$get[robber]]
    $description[YOU STOLE HIS WHOLE FORTUNE!!! LMFAO!!! YOU RICH AND THEY BROKIE!!!]
    $color[0000FF]
  $endif
$else
  $description[No way you actually attempted to rob yourself 💀]
  $color[FF0000]
$endif
$onlyIf[$get[target]!=;You need to mention someone to rob!]
$addTimestamp
`
};