var fs = require('fs'),
    Promise = require('promise');


//Promise
function read(file) {
    return new Promise(function (fulfill, reject) {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(); //caso dê erro
            } else {
                fulfill(data.toString()); //executa a tarefa
            }
        });
    });
}

//com return - Legível
read('texto.txt').then((data) => {
    console.log(data);
    return '1111';
}).then((data) => {
    console.log(data);
    return '2222';
}).then((data) => {
    console.log(data);
    return '3333';
}).done((data) => {
    console.log(data);
});


//com callback - Não legível
read('texto.txt', function (data1, callback1) {
    console.log(data1);
    callback1('1111', function (data2, callback2) {
        console.log(data2);
        callback2('2222', function (data3, callback3) {
            console.log(data3);
            callback3('3333', function (data4, callback4) {
                console.log(data4);
            });
        });
    });
});

/*
//Executa aleatório - mais rápido
console.time('Assincrono');
var counter = 0;

for (var i = 0; i < 500; i++) {
    fs.readFile('texto.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        counter++;
        console.log("Assincrono: " + data.toString());
        if (counter === 500) {
            console.timeEnd('Assincrono');
        }
    });
}

//Executa 1 por vez - menos rápido
console.time('Sincrono');
for (var i = 0; i < 500; i++) {
    var data = fs.readFileSync('texto.txt');
    console.log("Sincrono: " + data);
}
console.timeEnd('Sincrono');
*/