    
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "y!"
var BOTID = "0"
var CHANNELID = "0"


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "", type: 0}});
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'setchannel')) {
		
	 let command = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
		 message.channel.send('' + command);
	}
});

client.on('message', message => {
	
 	if (message.channel.id === CHANNEL_ID)){
	if (message.author.bot){
	if(message.author.id === "125367104336691200") {
		
		message.channel.send(`@everyone`);
	}}}
});

//Important
client.login(process.env.BOT_TOKEN);
