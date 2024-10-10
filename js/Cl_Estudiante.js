export default class Cl_Estudiante{
    constructor (nombre, acumulado ,materias, deporte, edad){
    this.nombre = nombre;
    this.acumulado= acumulado;
    this.materias= materias;
    this.deporte=deporte;
    thi8s.edad=edad;
    }
    
    set nombre(n){
        this._nombre = n;
    }
    get nombre (){
        return this._nombre;
    }
    set acumulado(a){
        this._acumulado = a;
    }
    get acumulado(){
        return this._acumulado;
    }
    set materias(m){
        this._materias = m;
    }
    get materias(){
        return this._materias;
    }
    set deporte (d){
        this._deporte =d;
    }
    get deporte(){
        return this.deporte;
    }
    set edad(e){
        this._edad  =e;
    }
    get edad(){
        return this._edad;
    }
    promedio(){
        return this.acumulado / this.materias;
    }
    }
     
    