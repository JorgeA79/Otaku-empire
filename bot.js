    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "", type: 0}});
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pong! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	
 	if (message.channel.id === "570718104057806848"){
	if (message.author.bot){
	if(message.author.id === "125367104336691200") {
		
	
		
		message.channel.send(`<@&572950228177649664>, New episode!`);
	}}}
});

//Important
client.login(process.env.BOT_TOKEN);
