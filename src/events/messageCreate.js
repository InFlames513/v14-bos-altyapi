//burasının ne olduğunu bilmiyorsanız lütfen hiç bir koda dokunmayın.

const { prefix, topgg } = require("../base/settings.json");

module.exports = {
  name: "messageCreate",
  async execute(message, client, dbl) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let cmd = client.commands.get(command)
    if (!cmd) return;
    if(topgg) {
      await dbl.getVotes().then(x => { 
        if(cmd.dbl && !x.filter(y => y.id === message.author.id).length) return message.reply("Bu komutu kullanmak için bota oy vermeniz gerekiyor.")
        else cmd.execute(client, message, args, dbl);
      })
    } else {
      cmd.execute(client, message, args, dbl);
    }
  },
};
