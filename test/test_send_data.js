var assert = require("assert");
Send_data= require("./../Send_data");
describe('Send_data', function(){
    describe('#write()', function(){
        it('should write in the buffer', function(){
            var send_data= new Send_data();
            send_data.write("ciao");
            assert.equal(send_data.getString(),"ciao");
        });
    }),
    describe('#send()', function(){
        it('should send to the client side', function(done){
            var send_data= new Send_data();
            send_data.write("ciao");
            send_data.send();
            done();
        });
    })
});
