var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var selecaoSchema = new Schema({
    _id: { type: objectId, auto:true },
    Nome: { type: String, required: true},
    Treinador_id: { type: String, required: true},
    Grupo_id: { type: String, required: true}
}, { versionKey: false})

var selecaoModel = mongoose.model('selecao', selecaoSchema, 'selecoes')

module.exports = selecaoModel;