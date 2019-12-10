const discord = require ('discord.js');

var client = new discord.Client();

const token = process.env.TOKEN;

client.on ("ready", () => {
	console.log ("J'ai la fritte !");
	
	client.user.setGame ("Préfixe : $");
});

const prefix = "$";
client.on ("message", (message) => {
	
    if (msg.startWith ($ + "otter")) {
	    number = 50;
	    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
	    message.channel.send ( {files: ["./loutres/" + imageNumber + ".jpg"]} )
    }

});

client.login (token);
