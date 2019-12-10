const discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

var prefix = ("$");

client.on("ready", () => {
	console.log ("J'ai la fritte !");
	
	client.user.setGame ("Préfixe : $");
});


client.on("message", (message) => {
	
    if (msg.startWith ($ + "otter")) {
	    number = 50;
	    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
	    message.channel.send ( {files: ["./loutres/" + imageNumber + ".jpg"]} )
    }

});

