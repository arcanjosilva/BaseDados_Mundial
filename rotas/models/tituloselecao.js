var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var tituloselecaoSchema = new Schema({
    _id: { type: objectId, auto:true },
    Nome: { type: String, required: true},
    titulos_mundiais: { type: Number, required: true},
    titulos_continentais: { type: Number, required: true},
    titulos_copaConfederacoes: { type: Number, required: true},
    titulos_nations: { type: Number, required: true}
}, { versionKey: false})

var tituloselecaoModel = mongoose.model('tituloselecao', tituloselecaoSchema, 'titulos_selecao')

module.exports = tituloselecaoModel;