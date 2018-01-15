console.log('soy otro archivito xD')

let variable = 27
let variable2 = 'Nueva variable de modulo'

function saludar(nombre) {
    console.log('Hola '+nombre+'!')
}

//formas de exportar nuestras variables y funciones para ser usadas por otros modulos
/* module.exports = {
    var1 : variable,
    var2 : variable2,
    saludar : saludar,
    despedir : function (nombre) {
        console.log('Adios '+nombre+'!')
    }
} */

module.exports = {
    multiplica : (a,b) => { //forma mas común
                return a*b;
                },
    sumar : (a,b) =>  a + b, //si solo es una operación se pueden quitar las {}
    mostrar : a => a  ,// si solo es un parámetro se puede quitar los ().
}

/* forma común
module.exports.variable = variable;
module.exports.variable2 = variable2; */