import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados por nombre:');
console.log(superheroes);