const fs = require('fs')
var path = require('path');

var somePath = "./data.txt";
var resolvedPath = path.resolve(somePath);
function readInvalid(file) {
    return fs.readFile(file, 'utf8', function(err, data) {
        var invalidArr = [];

        const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
        arr.forEach((item, index)=>{
            ;
            if(!item.includes('$') || !new RegExp('^[0-9]{5}(?:-[0-9]{4})?$').test(item)){
                invalidArr.push(item);
            }
        })
        if (err) {
            console.log(err);
        }
        console.log('invalid listing',invalidArr);
    });
}

readInvalid(resolvedPath);
