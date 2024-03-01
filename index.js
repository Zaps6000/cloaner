const Discord = require('selfbot-discord');
const client = new Discord.Client();
const config = require('./config.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.author.id !== client.user.id) return;
});


client.login(config.token);
