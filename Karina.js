//Packages necessários para a Karina funcionar.
const { Client, MessageEmbed, Collection } = require('discord.js')
const colors = require('colors')

//Aqui começa a Karina
const karina = new Client({ intents:32767 })
const config = require('./config.js')
karina.prefix = config.pefix
karina.commands = new Collection()
karina.aliases = new Collection()
//karina.database = require('./database.js')



karina.on("ready", () => {
console.log(colors.red(`[CLIENTE] Logado como ${karina.user.username}`))
})



karina.login(process.env.Karina)