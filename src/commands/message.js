//prefixli komutlar bu şekilde olmalı.

module.exports = {
    slash: false, //kodun slash olmadığını belirttik.
    name: ['test', 'deneme'], //arraya istediğiniz kadar kullanım yazabilirsiniz alieses gibi saçma bir şeyle uğraşmak yerine direk arraya ekleyebilirsiniz.
    async execute(client, message, args) {
        return message.channel.send("Bu komut çalışıyor.");
    }
}
