// Bu dosya botun slash komutlarını eventlerini ve message komutlarını yüklemek içindir.

const commands = [];
const fs = require("node:fs");
const path = require("node:path");
const { REST } = require('@discordjs/rest');
const { Collection } = require("discord.js");
const { Routes } = require('discord-api-types/v9');
const eventsPath = path.join(__dirname, "../events");
const { botid , token } = require("./settings.json");
const commandsPath = path.join(__dirname, "../commands");
const { SlashCommandBuilder } = require('@discordjs/builders');
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"));
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

module.exports = (client) => {
  client.commands = new Collection();
  client.slashcommands = new Collection();
    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);
      const event = require(filePath);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    };

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if(command.slash) {
        client.slashcommands.set(command.name[0], command)
        const slashCommand = new SlashCommandBuilder()
        .setName(command.name[0])
        .setDescription(command.description)
        if(command.option) {
          for(i = 0; i < command.option.length; i++) {
            if(!command.option[i].choices) {
              if(command.option[i].type === 'string') slashCommand.addStringOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'integer') slashCommand.addIntegerOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'number') slashCommand.addNumberOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'boolean') slashCommand.addBooleanOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'user') slashCommand.addUserOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'channel') slashCommand.addChannelOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'role') slashCommand.addRoleOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
              if(command.option[i].type === 'mentionable') slashCommand.addMentionableOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require))
            } else {
              if(command.option[i].type === 'string') slashCommand.addStringOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'integer') slashCommand.addIntegerOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'number') slashCommand.addNumberOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'boolean') slashCommand.addBooleanOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'user') slashCommand.addUserOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'channel') slashCommand.addChannelOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'role') slashCommand.addRoleOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
              if(command.option[i].type === 'mentionable') slashCommand.addMentionableOption(option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].require).addChoices(...command.option[i].choices))
            }
            
          }
        }
        commands.push(slashCommand)
      }
      if(!command.slash) {
        for(i = 0; i < command.name.length; i++) {
          client.commands.set(command.name[i], command);
        }
      } 
    }
};

const rest = new REST({ version: '9' }).setToken(token);

setTimeout(async () => {
  rest.put(Routes.applicationCommands(botid), { body: commands }).catch(console.error);
}, 500);
