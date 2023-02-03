var express = require('express'),
    router = express.Router(),
    jogador = require('../models/jogador.js');

router.get('/', function(req, res) {
    jogador.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    jogador.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});


router.post("/", function(req, res) {
    var obj = req.body;
    var model = new jogador(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Jogador criado com sucesso");
    })
})



router.post("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    jogador.findByIdAndUpdate(id, obj, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("actualizado com sucesso");
    })
})


router.delete("/:id", function(req, res) {
    var id = req.params.id;

    jogador.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Acabou de apagar o jogador " + data.Nome);
    })
})

module.exports = router;
