/**
 * E2. 
 */

const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    presentarse: function() {
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`;
    },
    cumplirAnios: function() {
        this.edad += 1;
    }
}

persona.cumplirAnios();
console.log(persona.edad);