
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
var suma = mi_modulo.sumar(2,6)
var mostrar = mi_modulo.mostrar(12)
console.log(suma+' '+mostrar)
console.log(mi_modulo.multiplica(5,8))
//extra:
setTimeout(() => {
    console.log('ya termine !!');
}, 2000);

console.log('haciendo otra cosa')
 /* end */