var express = require('express'),
    router = express.Router(),
    tituloselecao= require('../models/tituloselecao');

router.get('/', function(req, res) {
    tituloselecao.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return
        }
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    tituloselecao.findById(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});


router.post("/", function(req, res) {
    var obj = req.body;
    var model = new tituloselecao(obj);
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

    tituloselecao.findByIdAndUpdate(id, obj, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("actualizado com sucesso");
    })
})


router.delete("/:id", function(req, res) {
    var id = req.params.id;

    tituloselecao.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Acabou de apagar todos os titulos da : " + data.Nome);
    })
})

module.exports = router;
