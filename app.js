const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Hello World');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === `${prefix}ping`) {
    message.channel.send(message.channel.name);
  }
});

client.login(token);
