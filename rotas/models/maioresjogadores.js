var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var maioresjogadoresSchema = new Schema({
    _id: { type: objectId, auto:true },
    Seleção: { type: String, required: true},
    mais_golos: { type: String, required: true},
    mais_jogos: { type: String, required: true}
}, { versionKey: false})

var maioresjogadoresModel = mongoose.model('maioresjogadores', maioresjogadoresSchema, 'maioresJogadores_selecao')

module.exports = maioresjogadoresModel;