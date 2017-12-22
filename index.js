//console.log('estamos en correcto');

/* var saludo = function saludar(nombre,callback) {
        var saludo = 'Hola '+nombre;
        callback(saludo);
    }; */

/* var getSaludo =  function(saludo_recibido){
    console.log(saludo_recibido);
}

saludo('Leo', getSaludo); */

/* Segundo ejemplo: */

// saludo('Leo' , function (saludo2) {
   
//     console.log(saludo2);
// })


var mongoose = require('mongoose');
var User     =   mongoose.model('usuario',{'nombre':String,'edad':String,'profesion':String});
mongoose.connect('mongodb://localhost:27017/pruebas',{useMongoClient:true});

/* User.find(function(error, usuarios){
    console.log(usuarios);
}); */

function crear(callback, callback2){
    callback()
    callback2()
}

crear(function () {
    console.log('primer callback')
},function () {
    console.log('segunda callback')
});

console.log('luego de las ejecuciones anteriores')
