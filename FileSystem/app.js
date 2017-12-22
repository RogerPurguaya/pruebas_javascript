const fs = require('fs')

//leyendo archivo de texto externo:
//opcional: ruta, encoding, callback

fs.readFile('data.txt','utf-8',function(err,data){
    if (err) {
        console.log('Error:'+err)
    }else{
        var array;
        for (let i = 0; i < 30; i++) {
            console.log('cont => '+i)
        }
    }
})

fs.readFileSync('data.txt','utf-8')
console.log('asinc')