const discord = require ('discord.js');

const client = new Discord.Client();

client.login("NjU0MDI1NzY1MjQ2OTkyMzg2.Xe_j3w.sZHbSrVmU9JbpLr8gvUGdD3gYG4");

var prefix = ("$");

client.on ("ready", () => {
	console.log ("J'ai la fritte !");
	
	client.user.setGame ("Préfixe : $");
});


client.on ("message", (message) => {
	
    if (msg.startWith ($ + "otter")) {
	    number = 50;
	    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
	    message.channel.send ( {files: ["./loutres/" + imageNumber + ".jpg"]} )
    }

});

client.login (token);
