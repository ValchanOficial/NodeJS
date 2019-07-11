var io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Novo usuário conectado');

    socket.on('client_hello', (data) => {
        //socket.emit apenas para o cliente
        //socket.broadcast.emit para as outras pessoas, menos o cliente
        io.sockets.emit('server_hello', data); //para todos inclindo clinte
    });
});