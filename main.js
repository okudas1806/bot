const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send("pong!");
  if (cmd === `${PREFIX}pong`) msg.channel.send("ping!");
  if (cmd === `${PREFIX}lol`) msg.channel.send("test!lol");
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    msg
      .delete({ timeout: 3 })
      .then(console.log(`Message suprimé: ${msg.content}`));
  }
  if (cmd === `${PREFIX}role`) {
    const channel = client.channels.find(r => r.name === "logs");
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("Ce role n'existe pas!");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`le role ${role} à bien était enlevé à ${msg.author}.`);
      msg
        .delete({ timeout: 3 })
        .then(console.log(`Message suprimé: ${msg.content}`));
    } else {
      msg.member.roles.add(role);
      channel.send(`le role ${role} à bien était ajouté à ${msg.author}.`);
      msg
        .delete({ timeout: 3 })
        .then(console.log(`Message suprimé: ${msg.content}`));
    }
  }
});

client.on("guildMemberAdd", member => {
  member.send("salut a toi!");
  const channel = client.channels.find(r => r.name === "général");
  channel.send(`${member} a rejoint le serveur`);
});

client.login(TOKEN);

client.on("ready", () => console.log("je suis pret!"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
