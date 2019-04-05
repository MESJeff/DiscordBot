// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Ready');
});

// Create an event listener for messages
client.on('message', message => {
  if (message.content === '!loot') {
    var roll = random(0,99);
    message.channel.send('roll: '+roll);
    if(roll < 60){
        message.channel.send('Common');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
        message.channel.send(webAttachment);
    }else if(roll < 80){
        message.channel.send('Uncommon');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon1.png');
        message.channel.send(webAttachment);
    }else if(roll < 92){
        message.channel.send('Rare');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Rare1.png');
        message.channel.send(webAttachment);
    }else if (roll < 97){
        message.channel.send('Epic');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Epic1.png');
        message.channel.send(webAttachment);
    }else if(roll < 100){
        message.channel.send('Legendary');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Legendary1.png');
        message.channel.send(webAttachment);
    }else{
        //how did you end up here???
        message.channel.send('Common');
        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
        message.channel.send(webAttachment);
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

//generate float between low (inclusive) and high (exclusive)
function random(low, high){
    return Math.random() * (high-low)+low;
};

