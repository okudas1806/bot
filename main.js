const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.reply("pong!");
  if (msg.content === "everyone")
    msg.reply("@everyone, salut a tous!", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.reply("@everyone (noteveryone), salut a tous");
});

client.login("NjUzMjc0ODY2OTM3NjI2NjUz.Xe0oKA.RRVwnfEMCC7zdGyLPX88QcRSVhs");
