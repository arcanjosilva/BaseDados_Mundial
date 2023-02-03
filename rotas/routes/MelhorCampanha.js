var express = require('express'),
    router = express.Router(),
    melhorcampanha = require('../models/melhorcampanha.js');

router.get('/', function(req, res) {
    melhorcampanha.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    melhorcampanha.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});


router.post("/", function(req, res) {
    var obj = req.body;
    var model = new melhorcampanha(obj);
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

    melhorcampanha.findByIdAndUpdate(id, obj, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("actualizado com sucesso");
    })
})


router.delete("/:id", function(req, res) {
    var id = req.params.id;

    melhorcampanha.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Acabou de apagar a melhor campanha da seleção : " + data.Seleção);
    })
})

module.exports = router;
