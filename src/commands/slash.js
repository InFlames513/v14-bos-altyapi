//slash commandlar bu şekilde olmalı isteğe göre options sayısını azaltıp arttırabilirsiniz.

module.exports = {
    slash: true, //komut eğer slash ise true eğer prefixli ise false yazınız.
    enable: true, //komut kullanıma açıksa true değilse false girin
    dbl: true, //komut eğer oy zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
    name: ['slash'],  //komut ismi
    description: 'Slash command example.', //komut açıklaması
    options: [
        { //option 1
            name: "string", //option ismi
            description: "String option", //option açıklaması
            type: 3, //option type (Type türleri için: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)
            required: true //optionu doldurmak zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
        },
        { //option 2
            name: "number", //option ismi
            description: "Number option", //option açıklaması
            type: 4, //option type (Type türleri için: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)
            required: true //optionu doldurmak zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
        }
    ],
	async execute(client, interaction) {  //her slash commandda burası aynı olmak zorunda
		await interaction.reply({content: "> Ping: **"+client.ws.ping+" ms**", ephemeral: true}) //komuta cevap verirken await ekleneyi unutmayın yoksa hata verir.
	},
};
