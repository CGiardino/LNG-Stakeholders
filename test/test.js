var assert = require("assert");
Reader= require("./../server");
describe('Reader', function(){
    describe('#read()', function(){
        it('should return -1 when the file do not exist', function(){
            var reader= new Reader();
            var array= new Array(new Array());
            reader.databaseR.addListener('data', function(data){
                array=data;
            });
            reader.databaseR.addListener('end', function(data){
                console.log(array);
            });


            })
    })
})