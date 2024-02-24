module.exports = {
  name: "message", // This is the command name that will be used to trigger the response.
  aliases: ["message"], // You can set aliases if you want to trigger the command with different names.
  code: `
  $message
  $deletecommand
  `
}