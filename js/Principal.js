/*
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
promedio mínimo de 12 (1=beisbol - 2=fútbol).
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita.

Ejemplos de la corrida:
Nombre del estudiante: Juan
Acumulado de notas: 132
Cantidad de materias: 8
Deporte (1=beisbol - 2=fútbol): 1
Edad: 21
Nota promedio: 16.50
Juan es admitido en beisbol


Nombre del estudiante: Félix
Acumulado de notas: 110
Cantidad de materias: 10
Deporte (1=beisbol - 2=fútbol): 2
Edad: 20
Nota promedio: 11.00
Félix no es admitido en fútbol
*/

import Cl_Deportista from "./Cl_Deportista.js";

let deportista1 = new Cl_Deportista ("Juan", 132, 8, 1, 21);
let deportista2 = new Cl_Deportista();

let salida=document.getElementById("salida");
salida.innerHTML= `
 Nombre del estudiante: ${deportista1.nombre} 
<br> Acumulado de notas: ${deportista1.acumulado} 
<br> Cantidad de materias:${deportista1.materias}
<br>Deporte (1 = Beisbol, 2 = Fútbol): ${deportista1.deporte}
<br>Edad: ${deportista1.edad}
<br>Notas promedio: ${deportista1.promedio()}
<br>${deportista1.nombre} ${deportista1.admitido()}

}
<br><br>
 Nombre del estudiante: ${deportista2.nombre} 
<br> Acumulado de notas: ${deportista2.acumulado} 
<br> Cantidad de materias:${deportista2.materias}
<br>Deporte (1 = Beisbol, 2 = Fútbol): ${deportista2.deporte}
<br>Edad: ${deportista2.edad}
<br>Notas promedio: ${deportista2.promedio()}
<br>${deportista2.nombre} ${deportista2.admitido()}`;