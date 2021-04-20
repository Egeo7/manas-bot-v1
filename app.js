const { Client } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
	disableEveryone:  true,
	messageCacheMaxSize: 500,
	messageCacheLifetime: 120,
	messageSweepInterval: 60
});

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
    console.log('Bot started')
});

/* BELOW HERE IS ONLY FOR SERVER-SIDE COMMANDS */



client.login(process.env.TOKEN);