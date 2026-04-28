let opcion= Number(prompt(`Ingrese la opcion:
    1.  Calcular peso ideal
    2.  Calcular rutina
    3.  Calcular comida/dieta
    4.  Salir`));

if (isNaN(opcion)){
    console.error("Error, la opcion debe ser un numero")
} else {
    switch(opcion) {
        case 1:
            console.log("Calculando peso ideal...")
            break;
        case 2:
            console.log("Iniciando rutina...")
            break;
        case 3:
            console.log("Calculando dieta...")
            break;
        case 4:
            console.log("Saliendo...")
            break;
        default:
            console.log("Opcion no encontrada...")
            break;
    }
}