var csv = require('ya-csv');
var fs=require('fs');

function Reader(){
    this.databaseR = csv.createCsvFileReader('./database/data.csv', {
        'separator': ',',
        'quote': '"',
        'escape': '"',
        'comment': '#'
    });
    this.te="by";
}

Reader.prototype= {
    read: function(){

        this.databaseR.addListener('data', function(data){
            console.log(data);

        })
    }
};


reader= new Reader;
reader.read();


module.exports=Reader;