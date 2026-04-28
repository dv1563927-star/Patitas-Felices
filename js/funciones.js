//funciones
//funcion declarativa

function sumar(n1, n2){
    return n1 + n2;
}

console.log(sumar(3,4));

// Funciones de expresion
// Permite encapsular la funcion en una variable

const multi=function(n1,n2){
    return n1*n2;
}

console.log(multi(5,6))

// Funciones autoejecutables
console.log((function saludar(nombre){
    console.log("Hola "+nombre)
})("Daniel!"));

// Funcion flecha

const bienvenida=() =>{
    return("Funcion flecha")
}

console.log(bienvenida())

const iva=(precio) =>precio*1.19;
console.log(iva(90000))