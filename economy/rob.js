module.exports = {
  name: "rob",
  code: `
$if[$random[1;100]<=25]
$description[You attempted to rob $username[$mentioned[1]] but got away with nothing!]
$color[FF0000]
$else
$if[$random[1;100]<=81]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];100];$mentioned[1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];100]]
$description[You stole a small portion from $username[$mentioned[1]] out of his balance. You may now go buy a gum you little poor boy.]
$color[00FF00]
$else
$if[$random[1;100]<=99]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];500];$mentioned[1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];500]]
$description[You stole a respectable amount of cash from $username[$mentioned[1]]. Keep them carefully.]
$color[00FF00]
$else
$setGlobalUserVar[cash;0;$mentioned[1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[cash;$mentioned[1]]]]
$description[YOU STOLE HIS WHOLE FORTUNE!!! LMFAO!!! YOU RICH AND THEY BROKIE!!!]
$color[0000FF]
$endif
$endif
$endif
$onlyIf[$mentioned[1]!=$authorID;Bro really tried robbing yourself 💀]
$onlyIf[$mentioned[1]!=;You need to mention someone to rob!]
$addTimestamp
`
};