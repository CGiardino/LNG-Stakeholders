var csv = require('ya-csv');
var fs=require('fs');

function Reader(){
    this.databaseR = csv.createCsvFileReader('./database/data.csv', {
        'separator': ',',
        'quote': '"',
        'escape': '"',
        'comment': '#'
    });

}



module.exports=Reader;