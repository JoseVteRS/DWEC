/**
 * E1. 
 */
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    presentarse: function() {
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`;
    }
}
console.log(persona.presentarse());