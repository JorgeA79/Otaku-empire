    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Sel | a!help", type: 0}});
});


    for(var i = 0; i < message.embeds.length; i++) {
        if(message.embeds[i].title.includes("Bungou Stray") || message.embeds[i].title.includes("Bungou Stray")) {
      message.channel.send("im gay");
    }
}

//Important
client.login(process.env.BOT_TOKEN);
