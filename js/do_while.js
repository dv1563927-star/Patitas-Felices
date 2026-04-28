let frutas=[]

do{
    opcion=confirm(`Desea agregar una fruta?`)
    if(opcion == true){
        let fruta_aux=prompt("Ingrese el nombre de la fruta");
        while(fruta_aux==null || fruta_aux.trim().length<1){
            fruta_aux=prompt("Error, no se pueden dejar campos vacios, ingrese el nombre de la fruta");
        }
        frutas.push(fruta_aux);
    }
}while(opcion == true)

for (elemento of frutas){
    console.log(elemento);
}