//Packages necessários para a Karina funcionar.
const { Client, MessageEmbed, Collection } = require('discord.js')
const { Manager } = require("lavacord")
const colors = require('colors')

//Aqui começa a Karina
const karina = new Client({ intents:32767 })
const config = require('./config.js')
const nodes = require('./config.js')
karina.prefix = config.pefix //para o prefixo
karina.commands = new Collection()
karina.aliases = new Collection()
//karina.database = require('./database.js')

const manager = new Manager(nodes, {
    user: karina.user.id,
    shards: shardCount,
    send: (packet) => {
    }
});

karina.on("ready", () => {
console.log(colors.red(`[CLIENTE] Logado como ${karina.user.username}`))
})



karina.login(process.env.Karina)