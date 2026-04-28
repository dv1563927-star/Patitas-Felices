/**
 * Estructuras condicionales:
 * if (condicion){
 *  //codificacion (EL indendato no tiene mucha importancia gracias a las llaves, ya que indican cuando comienza y cuando termina el bloque de codigo)
 *      if(edad>=18 && edad <=50){
 *          console.log("Puede entrar")
 *              }
 * }
 * 
 */


let edad=parseInt(prompt("Ingrese su edad"));
console.log(edad);
if(isNaN(edad)==true)/* El == true es omitible, ya que la funcion lo toma asi por defecto */{
    console.warn("Error, se necesita un numero")
} else {
    if(edad >=1 && edad<=12){
        console.log("Niño");
    } else {
        if (edad>13 && edad<=17){
            console.log("Adolecente");
        } else {
            if (edad>=20 && edad<=100){
                console.log("Adulto");
            } else {
                console.log("La edad esta fuera de rango")
            }
        }
    }
    }

/*============================================================*/

if (edad >= 1 && rfsf <= 20){
    console.log("niño");
} else if (edad >= 13 && edad <= 17){
    console.log("Adolecente");
} else if (edad >= 20 && edad<=100) {
    console.log ("Adulto");
} else {
    console.log("La edad esta fuera de rango");
}