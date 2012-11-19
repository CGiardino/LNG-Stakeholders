function Send_data(server){
    this.server=server;
    this.buf="";
    this.io = require('socket.io').listen(server);
    this.io.set('log level', 1);
}

Send_data.prototype= {
    write: function(something){
        this.buf=something;
        }
    ,getString: function(){
        return this.buf;
    }
    ,send: function(){
        var buf=this.buf;
        this.io.sockets.on('connection', function (socket) {
           socket.emit('sm', buf);
        });
    }

};


module.exports=Send_data;
