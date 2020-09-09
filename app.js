const Discord = require('discord.js');
const { prefix, token, venmo, payout, dues } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Hello World');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content === `${prefix}commands` || message.content === `${prefix}help`) {
    message.channel.send(
      `${prefix}help - List Commands\n${prefix}commands - List Commands\n${prefix}payout - Payout breakdown\n${prefix}dues - Info on due amount and how to pay them\n`
    );
  }

  if (message.content === `${prefix}payout`) {
    message.channel.send(
      `1st - $${payout[1]}\n2nd - $${payout[2]}\nMost points - $${payout[3]}`
    );
  }

  if (message.content === `${prefix}dues`) {
    message.channel.send(
      `Dues are ${dues}. Payments can be made to David through Venmo\n${venmo}`
    );
  }
});

client.login(token);
