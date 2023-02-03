var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var grupoSchema = new Schema({
    _id: { type: objectId, auto:true },
    Grupo_id: { type: String, required: true},
    DESC: { type: String, required: true},
}, { versionKey: false})

var grupoModel = mongoose.model('grupo', grupoSchema, 'grupos')

module.exports = grupoModel;




