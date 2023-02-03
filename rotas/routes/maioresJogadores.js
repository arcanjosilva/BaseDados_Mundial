var express = require('express'),
    router = express.Router(),
    maioresjogadores = require('../models/maioresjogadores.js');

router.get('/', function(req, res) {
    maioresjogadores.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    maioresjogadores.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});


router.post("/", function(req, res) {
    var obj = req.body;
    var model = new maioresjogadores(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("criado com sucesso");
    })
})


router.post("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    maioresjogadores.findByIdAndUpdate(id, obj, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("actualizado com sucesso");
    })
})


router.delete("/:id", function(req, res) {
    var id = req.params.id;

    maioresjogadores.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Acabou de apagar : " + data.Seleção);
    })
})

module.exports = router;
