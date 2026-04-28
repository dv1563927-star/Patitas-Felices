estudiante1=prompt("Ingrese el nombre del estudiante 1");
estudiante2=prompt("Ingrese el nombre del estudiante 2");
estudiante3=prompt("Ingrese el nombre del estudiante 3")
listaUsuarios = [
    { id: 1, nombre: estudiante1},
    { id: 2, nombre: estudiante2},
    { id: 3, nombre: estudiante3}
];
for (let i = 0; i <= listaUsuarios.length; i++) {
    console.log(listaUsuarios[i]);
}