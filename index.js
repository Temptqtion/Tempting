const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTEzODA5NDc4MDYwMzQzMzM0.DtNafw.NqFZFKrhlVlE2TiolBsUzIbFp8w'

bot.login(TOKEN)

bot.on('message', (message) => {
    if (message.content.toLowerCase().includes('hi')) {
        message.channel.send("Hello!");
    }
})

bot.on('message', (message) => {
    if (message.content.toLowerCase().includes('ayy')) {
        message.channel.send("lmao");
    }
})
