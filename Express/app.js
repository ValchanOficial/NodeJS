var express = require('express');

var app = express();

//http://localhost:3000/
app.get('/', function (res, resp) {
    resp.send('Hello World!');
});

//É obrigatório passar id
//http://localhost:3000/abc/123
app.get('/abc/:id', function (req, resp) {
    resp.send('Hello World! ' + req.params.id);
});

//Não é obrigatório passar id
//http://localhost:3000/abc/
app.get('/abc/:id?', function (req, resp) {
    resp.send('Hello World! ' + req.params.id);
});

//Expressão regular
//http://localhost:3000/shampoo ou http://localhost:3000/xampu ou variações
app.get(/((sh)|(x))amp(o{2}|u)/, function (req, resp) {
    resp.send('Hello World! Shampoo/ Xampu');
});

//Middleware
//http://localhost:3000/
app.use(express.static('public'));
//Middleware com caminho
app.use('/static', express.static('public'));

app.listen(3000, function () {
    console.log('App rodando na porta 3000');
});