/* const numero: number = 10.5
const texto: string = "Hola"
const booleano: boolean = true

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof booleano); */

interface Persona {
    nombre: string,
    edad: number
}

const persona: Persona = {
    nombre: "Juan",
    edad: 20
}

if ("nombre" in persona) {
    console.log("La propiedad 'nombre' esta en el objeto persona.");   
}
if ("apellido" in persona) {
    console.log("La propiedad 'apellido' esta en el objeto persona");
} else {
    console.log("La propiedad 'apellido' no esta en el objeto persona");
}