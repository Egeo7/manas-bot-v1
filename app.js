const { Client } = require("discord.js");

const client = new Client({
	disableEveryone:  true,
	messageCacheMaxSize: 500,
	messageCacheLifetime: 120,
	messageSweepInterval: 60
});

client.on("ready", () => {
    client.user.setStatus('online');
    client.user.setActivity(`manashub.keyubu.com`, { type: 'PLAYING' })
        .catch(err => client.logger.error(err));
    console.log('Bot started')
    
});

/* BELOW HERE IS ONLY FOR SERVER-SIDE COMMANDS */

const prefix = "!";

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	message.guild.channels.cache.find(c => c.name.contains === "katılanlar").send("test");

	// other commands...
});

client.on('guildMemberAdd', guild, member => {
    guild.channels.cache.find(c => c.name.contains === "katılanlar").send("test");
})





/* ALSO THIS IS DOWN LIMIT */

client.login(process.env.DJS_TOKEN);