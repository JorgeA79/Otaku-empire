    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "", type: 0}});
});

var prefix = "y!"

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pong! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	
 	if (message.channel.id === "664219562149019691"){
	if (message.author.bot){
	if(message.author.id === "125367104336691200") {
		
	
		
		message.channel.send(`<@&664222622057234432>, New episode!`);
	}}}
});

//Important
client.login(process.env.BOT_TOKEN);
