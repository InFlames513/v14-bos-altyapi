//botun main dosyası 

const discord = require("discord.js");
const client = new discord.Client({ intents: Object.values(discord.GatewayIntentBits).filter(x => typeof x === "string") });
const { token } = require("./src/base/settings.json");
require("./src/base/app.js")(client)

client.login(token);
