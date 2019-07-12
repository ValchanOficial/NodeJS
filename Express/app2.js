var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var app = express();

var urlTW = 'mongodb://localhost:27017';
var nomeDB = 'treinaweb';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('views', './views');
app.set('view engine', 'jade');


app.route('/')
    .get(function (req, resp) {
        listarCursos(resp);
    })
    .post(function (req, resp) {
        var curso = { nome: req.body.nome, categoria: req.body.categoria };

        inserirCurso(curso, function () {
            listarCursos(resp);
        });
    });

app.listen(3000, function () {
    console.log('App rodando na porta 3000');
});

function listarCursos(resp) {
    MongoClient.connect(urlTW, { useNewUrlParser: true }, function (err, database) {
        const myDB = database.db(nomeDB);
        myDB.collection('cursos').find().sort({ nome: 1 }).toArray(function (err, result) {
            resp.render('index', { data: result });
        })
    })
}

function inserirCurso(obj, callback) {
    MongoClient.connect(urlTW, { useNewUrlParser: true }, (err, client) => {
        var db = client.db(nomeDB);
        db.collection('cursos').insertOne(obj, function (err, result) {
            callback();
        });
    });
}