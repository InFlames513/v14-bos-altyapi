//Botun main dosyası 

const { Client, GatewayIntentBits, Events, Partials } = require("discord.js");
const client = new Client({ intents: Object.values(GatewayIntentBits).filter(x => typeof x === "string"), partials: Object.values(Partials).filter(x => typeof x === "string")});
const { token, topgg } = require("./src/base/settings.json");
const DBL = require("dblapi.js")
let dbl;
if(topgg) {
	dbl = new DBL(topgg, { webhookPort: 5000, webhookAuth: 'password' });
}

require("./src/base/app.js")(client, dbl)

client.login(token);
