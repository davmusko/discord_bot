const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client('ready', () => {
  console.log('Hello World');
});

client.login(config.token);
