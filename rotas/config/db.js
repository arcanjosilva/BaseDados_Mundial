var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb+srv://arcanjosilva:basededados2022@cluster0.nbbey2t.mongodb.net/projeto', { useNewUrlParser: true });

module.exports = connection;