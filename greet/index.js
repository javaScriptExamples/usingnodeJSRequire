var english2 = require("./english");         //si no pongo js aun asi lo entiende
var spanish = require("./spanish");         //recibo los parametros de los archivos english y spanish


//se exporta en un objeto, es como se usa
//un objeto con dos metodos,
//asi como recibo los parametros de english y spanish , luego luego hago otro export para lanzarlos 
module.exports = {
    //primer ingles es el nombre del archivo, segundo english es el nombre de la variable
    english: english2,
    spanish: spanish
}