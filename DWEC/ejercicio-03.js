/**
 * E3. 
 */
const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    añoPublicacion: 1967
}

for (const propiedad in libro) {
    console.log(`${propiedad}: ${libro[propiedad]}`);
}