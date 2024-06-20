// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

for (let value of gente) {
  if (value.nombre[0] == "J") {
    // En esta parte, "value" obtiene el valor de cada dato del array.
    // Gracias a esto, podemos acceder a los atributos de cada elemento del array.
    // Con "value.nombre[0]", accedemos al índice 0, que contiene la primera letra del nombre.
    // Luego, verificamos si esta primera letra es "J".
    console.log(value);
  }
}
