    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Sel | a!help", type: 0}});
});


client.on('message', message => {
	if (message.author.bot){
	if(message.content.toLowerCase().includes('cyber')){
    message.channel.send("Key Word Detected ");
} else {
    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("Bungo Stray")) {
            message.channel.send("Detected");
            
    }
}}});

//Important
client.login(process.env.BOT_TOKEN);
