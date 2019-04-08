// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Ready');
});

client.on('message', message =>{
    if (message.content === '!loot') {
        var roll = random(0,99);
        var tier = randomInt(1,7);
        var type = randomInt(1,5);
        var webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
        message.channel.send('roll: '+roll);
        if(roll < 60){
            message.channel.send('Common');
            switch(tier){
                case 1:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common5.png');
                    }
                    
                    break;
                case 2:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Common5.png');
                    }
                    
                    break;
                case 3:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Common5.png');
                    }
                    
                    break;
                case 4:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Common5.png');
                    }
                    
                    break;
                case 5:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Common5.png');
                    }
                    
                    break;
                case 6:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Common5.png');
                    }
                    
                    break;
                case 7:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Common1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Common2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Common3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Common4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Common5.png');
                    }
                
                    break;
            }
            
            message.channel.send(webAttachment);
        }else if(roll < 80){
            message.channel.send('Uncommon');
            type = randomInt(1,5);
            //const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon1.png');
            switch(tier){
                case 1:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Uncommon5.png');
                    }
                    
                    break;
                case 2:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Uncommon5.png');
                    }
                    
                    break;
                case 3:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Uncommon5.png');
                    }
                    
                    break;
                case 4:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Uncommon5.png');
                    }
                    
                    break;
                case 5:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Uncommon5.png');
                    }
                    
                    break;
                case 6:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Uncommon5.png');
                    }
                    
                    break;
                case 7:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Uncommon1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Uncommon2.png');
                    }else if(type ==3){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Uncommon3.png');
                    }else if (type == 4){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Uncommon4.png');
                    }else{
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Uncommon5.png');
                    }
                    
                    break;
            }
            message.channel.send(webAttachment);
        }else if(roll < 92){
            message.channel.send('Rare');
            //const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Rare1.png');
            type = randomInt(1,3);
            switch(tier){
                case 1:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Rare3.png');
                    }
                    
                    break;
                case 2:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Rare3.png');
                    }
                    
                    break;
                case 3:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Rare3.png');
                    }
                    
                    break;
                case 4:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Rare3.png');
                    }
                    
                    break;
                case 5:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Rare3.png');
                    }
                    
                    break;
                case 6:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Rare3.png');
                    }
                    
                    break;
                case 7:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Rare1.png');
                    }else if(type == 2){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Rare2.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Rare3.png');
                    }
                    
                    break;
            }
            message.channel.send(webAttachment);
        }else if (roll < 97){
            message.channel.send('Epic');
            //const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Epic1.png');
            type = randomInt(1,2);
            switch(tier){
                case 1:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Epic2.png');
                    }
                    
                    break;
                case 2:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Epic2.png');
                    }
                    
                    break;
                case 3:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Epic2.png');
                    }
                    
                    break;
                case 4:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Epic2.png');
                    }
                    
                    break;
                case 5:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Epic2.png');
                    }
                    
                    break;
                case 6:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Epic2.png');
                    }
                    
                    break;
                case 7:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Epic1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Epic2.png');
                    }
                    
                    break;
            }
            message.channel.send(webAttachment);
        }else if(roll < 100){
            message.channel.send('Legendary');
            //const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Legendary1.png');
            type = randomInt(1,2);
            switch(tier){
                case 1:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Legendary2.png');
                    }
                    
                    break;
                case 2:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Cardboard/Legendary2.png');
                    }
                    
                    break;
                case 3:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Crate/Legendary2.png');
                    }
                    
                    break;
                case 4:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Present/Legendary2.png');
                    }
                    
                    break;
                case 5:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Ship/Legendary2.png');
                    }
                    
                    break;
                case 6:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Animoo/Legendary2.png');
                    }
                    
                    break;
                case 7:
                webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
                    
                    if(type == 1){
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Legendary1.png');
                    }else {
                        const webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Treasue/Legendary2.png');
                    }
                    
                    break;
            }
            message.channel.send(webAttachment);
        }else{
            //how did you end up here???
            message.channel.send('Common');
            webAttachment = new Discord.Attachment('http://icantbelieveitsnotgambling.com/images/Loot/Trash/Common1.png');
            message.channel.send(webAttachment);
        }
      }else if (message.content === '!debug'){
         var roll2 = random(0,99);
         var tier2 = randomInt(1,7);
        message.channel.send('roll: '+roll2+' tier: '+tier2);
      }else{
    
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

//generate float between low (inclusive) and high (exclusive)
function random(low, high){
    return Math.random() * (high-low)+low;
};

function randomInt(low, high){
    low = Math.ceil(low);
    high = Math.floor(high);
    return Math.floor(Math.random() * (high - low + 1)) + low;
};
