import Cl_Estudiante from "./CL_Estudiante.js";
export default class Cl_Deportista extends Cl_Estudiante {
constructor (nombre, acumulado ,materias){
    super(nombre, acumulado ,materias)
}
    admitido(){
    if(this.promedio() >= 15)
     return ";
    else if(this.promedio() >=10) 
        return ";
    else 
        return "No le corresponde beca";
    }
   
    devolverNotas(){
    return this.acumulado;
    }
    
    devolverNombre(){
    return this.nombre;
    }
}