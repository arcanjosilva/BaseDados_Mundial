var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var treinadorSchema = new Schema({
    _id: { type: objectId, auto:true },
    Treinador_id: { type: String, required: true},
    Nome: { type: String, required: true},
    Idade: {  type: Number, required: true},
    Nacionalidade: { type: String, required: true}
}, { versionKey: false})

var treinadorModel = mongoose.model('treinador', treinadorSchema, 'treinador')

module.exports = treinadorModel;