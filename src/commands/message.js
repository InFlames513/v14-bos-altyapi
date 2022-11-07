// Prefixli komutlar bu şekilde olmalı.

const { EmbedBuilder } = require("discord.js");
const db = require("inflames.db");

module.exports = {
  slash: false, //komut slash ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
  enable: true, //komut kullanıma açıksa true değilse false girin
  dbl: true, //komut eğer oy zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
  name: ["yardım", "help"], //komut isimleri (istediğiniz kadar isim yazabilirsiniz.)
  async execute(client, message, args) {
    message.channel.send({ embeds: [
      new EmbedBuilder()
        .setTitle(`Covid-19 | Yardım`)
        .addFields([
          { name: `Komut ismi -1`, value: `açıklama`, inline: true },
          { name: `Komut ismi -2`, value: `açıklama`, inline: true },
          { name: `Komut ismi -3`, value: `açıklama`, inline: true },
          { name: `Komut ismi -4`, value: `açıklama`, inline: true },
          { name: `Komut ismi -5`, value: `açıklama`, inline: true },
          { name: `Komut ismi -6`, value: `açıklama`, inline: true },
          { name: `Komut ismi -7`, value: `açıklama`, inline: true },
          { name: `Komut ismi -8`, value: `açıklama`, inline: true },
          { name: `Komut ismi -9`, value: `açıklama`, inline: true },
        ])
        .setTimestamp()
    ] });
  },
};
