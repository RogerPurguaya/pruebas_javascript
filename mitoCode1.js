
const os = require('os')
const fs = require('fs')
const mi_modulo = require('./miModulo')

let cpu = os.cpus()  //devuelve info del cpu en JSON.
let sistema = os.platform();
let usuario  = os.hostname();

var infoCPU = JSON.stringify(cpu); //convierte a javascript value desde JSON.

/* console.log(mi_modulo.var1+' '+mi_modulo.var2)

mi_modulo.saludar(usuario);//nuestros metodos q llegan desde nuestro modulo.
mi_modulo.despedir(usuario); */

//como crear un archivo concatenando de otra manera (disp. ES6):
/* fs.appendFile('ejemplo.txt', `info del cpu: ${infoCPU}` ,function (error) {
    if (error) {
        console.log('hubo un error')
    }
})
 */


 /* Funciones de flecha: */
/* var suma = mi_modulo.sumar(2,6)
var mostrar = mi_modulo.mostrar(12)
console.log(suma+' '+mostrar)
console.log(mi_modulo.multiplica(5,8))
//extra:
setTimeout(() => {
    console.log('ya termine !!');
}, 2000);

console.log('haciendo otra cosa') */

/* for (let i = 0; i < 300; i++) {
     console.log('Pos. => '+i)
     
    } */

console.log('mensajito para github yeah')

 /* end */

 /* otras pruebas con callbacks */
 function funcion1(numero, callback) {
     let resultado = numero * numero
     
     for (let i = 0; i < 300; i++) {
         console.log('Pos. => '+i)
        } 
        callback(resultado)
    }
    
    function funcion2(numero, callback) {
        let resultado = numero + numero
        callback(resultado)
    }

 funcion1(5, function (res) {
     console.log('El resultado en la callback es de : ' + res)
       
     funcion2(res,function (res) {
            console.log('el resultado de la segunta callback es : '+ res)
        })
 })

 /* fin de pruebas  */