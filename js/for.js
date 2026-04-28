for (let i=1; i<=10; i++){
    let resultado = 4*i;
    console.log(`4*${i} =${resultado}`)
}

/* A diferencia de python, yo puedo decidir desde donde empieza el ciclo*/

let frutas=[];
frutas.push("Mango")
frutas.push("Pera")
frutas.push("Piña")

for(elemento of frutas){
    console.log(elemento)
}

for (elememnto of frutas){
    if(elemento !="Pera"){
        console.log(elemento);
    }
}