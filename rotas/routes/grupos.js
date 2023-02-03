var express = require('express'),
    router = express.Router(),
    grupos = require('../models/grupo.js');

router.get('/', function(req, res) {
    grupos.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    grupos.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});


router.post("/", function(req, res) {
    var obj = req.body;
    var model = new grupos(obj);
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

    grupos.findByIdAndUpdate(id, obj, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("actualizado com sucesso");
    })
})


router.delete("/:id", function(req, res) {
    var id = req.params.id;

    grupos.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Acabou de apagar a seleção");
    })
})

module.exports = router;
