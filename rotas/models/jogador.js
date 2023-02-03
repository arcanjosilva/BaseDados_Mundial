var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var jogadorSchema = new Schema({
    _id: { type: objectId, auto:true },
    Nome: { type: String, required: true},
    Seleção: { type: String, required: true},
    Posição: { type: String, required: true},
    Número: { type: Number, required: true},
    Clube: { type: String, required: true},
}, { versionKey: false})

var jogadorModel = mongoose.model('jogador', jogadorSchema, 'jogadores')

module.exports = jogadorModel;