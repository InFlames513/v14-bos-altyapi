//burasının ne olduğunu bilmiyorsanız lütfen hiç bir koda dokunmayın.

const { prefix } = require("../base/settings.json");
module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let cmd = client.commands.get(command)
    if (!cmd) return;
      cmd.execute(client, message, args);
  },
};
