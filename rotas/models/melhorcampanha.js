var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var melhorcampanhaSchema = new Schema({
    _id: { type: objectId, auto:true },
    Seleção: { type: String, required: true},
    participacoes: { type: Number, required: true},
    melhor_colocacao: { type: String, required: true},
    ano:{ type: Number, required: true}

}, { versionKey: false})

var melhorcampanhaModel = mongoose.model('melhorcampanha', melhorcampanhaSchema, 'melhor_campanha')

module.exports = melhorcampanhaModel;