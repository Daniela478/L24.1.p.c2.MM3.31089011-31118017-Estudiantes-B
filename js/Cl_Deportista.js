import Cl_Estudiante from "./Cl_Estudiante.js";
export default class Cl_Deportista extends Cl_Estudiante {
constructor (nombre, acumulado ,materias, edad, deporte){
    super(nombre, acumulado ,materias, edad)
this.deporte=deporte;
}

set deporte (d){
    this._deporte =d;
}
get deporte(){
    return this._deporte;
}

    admitido(){ ///1)Beisbol, 2) Fútbol
    if (this.deporte ==1) 
        if(this.promedio() > 14 && this.edad >= 21)
     return "es admitido en Beisbol";
         else 
        return "No es admitido en Beisbol";
    
        else if (this.deporte ==2)
    if(this.promedio() >= 12 && this.edad >= 19)
        return "es admitio en fútbol";
    else 
    return "no es admitio en fùtbol";
}
   
    devolverNotas(){
    return this.acumulado;
    }
    
    devolverNombre(){
    return this.nombre;
    }
}