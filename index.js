// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Ready');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!loot') {
    // Send "pong" to the same channel
    message.channel.send('roll: '+random(0, 99));
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

//generate float between low (inclusive) and high (exclusive)
function random(low, high){
    return Math.random() * (high-low)+low;
};