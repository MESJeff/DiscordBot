// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Ready');
});

client.on('message', message =>{
    /*if(message.content === '!loot'){
        var roll = random(0,99);
        var tier = randomInt(1,7);
        var type = randomInt(1,5);
        message.channel.send('roll: '+roll+' tier: '+tier+' type: '+type);
    }
    */
   if(message.content === '!loot'){
       //message.channel.send('box');
       var roll = random(0,99);
        var tier = randomInt(1,7);
        //var type = randomInt(1,5);
        //message.channel.send('roll: '+roll+' tier: '+tier+' type: '+type);
        message.channel.send('tier: '+tier);
   }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
//client.login('NTYyNDEyMDA3MjY1OTI3MjE5.XKfSZA.bOrlDQcI0V8nhmx_wnvIWmjod3I')

//generate float between low (inclusive) and high (exclusive)
function random(low, high){
    return Math.random() * (high-low)+low;
};

function randomInt(low, high){
    low = Math.ceil(low);
    high = Math.floor(high);
    return Math.floor(Math.random() * (high - low + 1)) + low;
};
