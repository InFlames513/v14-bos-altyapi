//slash commandlar bu şekilde olmalı isteğe göre options sayısını azaltıp arttırabilirsiniz.

module.exports = {
    slash: true, //komut eğer slash ise true eğer prefixli ise false yazınız.
	name: ['ping'],  //komut ismi
    description: 'Ping command.', //komut açıklaması
    option: [
        {   //1. option
            name: 'test',  //options ismi
            description: 'test',  //options açıklama
            type: 'number', //options türü
            require: true //optionsu doldurmak zorunlu mu (true) isteğe bağlı mı (false)
        },
        {   //2. option
            name: 'deneme',
            description: 'deneme',
            type: 'string', //options türünü yukarda numara olarak tanımlamıştık burada yazı olarak tanımladık
            require: false //burada bu optionu isteğe bağlı olara kayarladım
        }
    ],
	async execute(client, interaction) {  //her slash commandda burası aynı olmak zorunda
		await interaction.reply({content: "> Ping: **"+client.ws.ping+" ms**", ephemeral: true}) //komuta cevap verirken await ekleneyi unutmayın yoksa hata verir.
	},
};