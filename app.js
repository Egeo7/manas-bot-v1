const { Client } = require("discord.js");

const client = new Client({
	disableEveryone:  true,
	messageCacheMaxSize: 500,
	messageCacheLifetime: 120,
	messageSweepInterval: 60
});

client.on("ready", () => {
    console.log('Bot started')
});

/* BELOW HERE IS ONLY FOR SERVER-SIDE COMMANDS */

client.login(process.env.DJS_TOKEN);