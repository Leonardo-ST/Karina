const { Client, MessageEmbed, Collection } = require('discord.js')
const colors = require('colors')
const karina = new Client({ intents:32767 })
const config = require('../config.json')


karina.on("ready", () => {
console.log(colors.red(`[CLIENTE] Logado como ${karina.user.username}`))
})



karina.login(process.env.Karina)