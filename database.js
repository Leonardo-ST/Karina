const { Schema, model, connect } = require('mongoose');
const config = require('./config.json');
const colors = require('colors');

connect(
	process.env.MONGOLINK,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	err => {
		if (err) console.log('Erro ao conectar ao banco de dados: ' + err);
		console.log(
			colors.yellow('[DATABASE] Conexão ao banco de dados bem sucedida!')
		);
	}
);

var guild = new Schema({
        id: {
        type: String,
        default: "-/-",
        required: true
    },

    prefix: {
            default: "k.",
            type: String
    }
})

var Guild = model("Guild", guild);
module.exports = {
        Guild: Guild
}