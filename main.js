const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });
const prefix = "test!";

client.on("ready", () => {
  console.log("je suis pret!");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("pong!");
  if (msg.content.startsWith(`${PREFIX}pong`)) msg.channel.send("ping!");
});

client.login(TOKEN);
