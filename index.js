const Discord = require('discord.js');
const client = new Discord.Client();
const configFile = require('./config.json');
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
client.once('ready', () => {
    console.log('Ready!');
    if (configFile.clientID.toString) {
        console.log(`Invite me using https://discordapp.com/oauth2/authorize?client_id=${configFile.clientID}&scope=bot&permissions=${configFile.permissionValue.toString()}`);
    } else {
        console.log("Use the Discord developer portal to get your bot's invite link.")
    }
    console.log("The prefix is: " + configFile.prefix)
});
client.login(configFile.token);
client.on('message', message => {
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(configFile.prefix)})\\s*`); // allow the prefix or mentioning
	if (!prefixRegex.test(message.content) || message.author.bot) return;

	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    switch (command) {
        case "ping":
            message.channel.send('Pong!');
            break;
        default:
            break;
    }
});
