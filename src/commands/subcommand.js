//slash commandlar bu şekilde olmalı isteğe göre options sayısını azaltıp arttırabilirsiniz.

module.exports = {
  slash: true, //komut eğer slash ise true eğer prefixli ise false yazınız.
  enable: true, //komut kullanıma açıksa true değilse false girin
  dbl: true, //komut eğer oy zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
  name: ['sub-command'],  //komut ismi
  description: 'Subcommand example.', //komut açıklaması
  options: [
      { //subcommand option 1
          name: "role", //subcommand ismi
          description: "Get or edit permissions for a role", //subcommand açıklaması
          type: 2, //subcommand group type (her zaman bu sayı 2'dir)
          options: [
              { //subcommand option 1
                  name: "get", //subcommand option ismi
                  description: "Get permissions for a role", //subcommand option açıklaması
                  type: 1, //subcommand type (her zaman bu sayı 1'dir)
                  options: [
                      { //subcommand option option 1
                          name: "role", //subcommand option option ismi
                          description: "sa", //subcommand option option açıklaması
                          type: 8, //subcommand option option type
                          required: true //subcommand option optionu doldurmak zorunlu ise true değilse false girin (false yerine bu satırı silebilirsinizde.)
                      }
                  ]
              },
              { //subcommand option 2
                  name: "edit", //subcommand option ismi
                  description: "Edit permissions for a role", //subcommand option açıklaması
                  type: 1 //subcommand type (her zaman bu sayı 1'dir)
              }
          ]
      },
      { //subcommand options 2
          name: "member", //subcommand ismi
          description: "Get or edit permissions for a role", //subcommand açıklaması
          type: 2, //subcommand group type (her zaman bu sayı 2'dir)
          options: [
              { //subcommand option 1
                  name: "get", //subcommand option ismi
                  description: "Get permissions for a role", //subcommand option açıklaması
                  type: 1 //subcommand type (her zaman bu sayı 1'dir)
              },
              { //subcommand option 2
                  name: "edit", //subcommand option ismi
                  description: "Edit permissions for a role", //subcommand option açıklaması
                  type: 1 //subcommand type (her zaman bu sayı 1'dir)
              }
          ]
      }
  ],
async execute(client, interaction) {  //her slash commandda burası aynı olmak zorunda
  await interaction.reply({content: "> Ping: **"+client.ws.ping+" ms**", ephemeral: true}) //komuta cevap verirken await ekleneyi unutmayın yoksa hata verir.
},
};
