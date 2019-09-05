class Corredor{
    constructor(){
        this._posicion = 0;
    }  

    get posicion(){
        return this._posicion;
    }
}

class Tortuga extends Corredor{
    avanzar(){
        let avanceTortuga = Math.trunc(Math.random()*90+1);
    
        if(avanceTortuga <= 45){
            this._posicion += 3;

        }else if(avanceTortuga >= 46 && avanceTortuga <= 63){
            this._posicion -= 6;

        }else{
            this._posicion += 1;
        }
    }
}

class Liebre extends Corredor{
    avanzar(){

        let avanceLiebre = Math.trunc(Math.random()*90+1);
        
        if(avanceLiebre <= 18){
            this._posicion += 0;

        }else if(avanceLiebre >= 19 && avanceLiebre <= 36){
            this._posicion += 9;

        }else if(avanceLiebre >= 37 && avanceLiebre <= 45){
            this._posicion -= 12;

        }else if(avanceLiebre >= 46 && avanceLiebre <= 76){
            this._posicion += 1;
        
        }else{
            this._posicion -= 2;
        }
    }
}

let pancho = new Tortuga();
let paco = new Liebre();

while(pancho.posicion<90 && paco.posicion<90){
    pancho.avanzar();
    paco.avanzar();
    console.log("Tortuga: "+pancho.posicion+" --- "+"Liebre: "+paco.posicion);
}

if(pancho.posicion >= 90 && paco.posicion >= 90){
    console.log("Quedaron empate");
}else if (pancho.posicion >= 90){
    console.log("Gano la tortuga");
}else{
    console.log("Gano la liebre");
}