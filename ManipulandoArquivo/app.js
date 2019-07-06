var fs = require('fs');//file system

fs.writeFile('my_file.txt', 'Treina Web', function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Arquivo Criado!');
});

fs.appendFile('my_file.txt', ' alterado', function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Arquivo Alterado!');
});

fs.readFile('my_file.txt', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

var data = fs.readFileSync('my_file.txt');
console.log(data.toString());
