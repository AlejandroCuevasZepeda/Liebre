class Competidores{
    constructor(){
        this._tortuga = 0;
        this._liebre = 0;
    }

    tortugaAvance(){
        let avanceTortuga = Math.trunc(Math.random()*90+1);
    
        if(avanceTortuga <= 45){
            this._tortuga += 3;

        }else if(avanceTortuga >= 46 || avanceTortuga <= 63){
            this._tortuga -= 6;

        }else{
            this._tortuga += 1;
        }
    }

    liebreAvance(){

        let avanceLiebre = Math.trunc(Math.random()*90+1);
        
        if(avanceLiebre <= 18){
            this._liebre += 0;

        }else if(avanceLiebre >= 19 || avanceLiebre <= 36){
            this._liebre += 9;

        }else if(avanceLiebre >= 37 || avanceLiebre <= 45){
            this._liebre -= 12;

        }else if(avanceLiebre >= 46 || avanceLiebre <= 76){
            this._liebre += 1;
        
        }else{
            this._liebre -= 2;
        }
    }
}


let nuevaCarrera = new Competidores();
resultadoCarrera();

function resultadoCarrera (){
    for(var i=0; i<100; i++){
        nuevaCarrera.tortugaAvance();
        nuevaCarrera.liebreAvance();
        console.log("Tortuga: "+nuevaCarrera._tortuga+" --- "+"Liebre: "+nuevaCarrera._liebre);
        if(nuevaCarrera._tortuga >= 90 && nuevaCarrera._liebre >= 90){
            console.log("Quedaron empate");
            return;
        }else if (nuevaCarrera._tortuga >= 90){
            console.log("Gano la tortuga");
            return;
        }else if(nuevaCarrera._liebre >= 90){
            console.log("Gano la liebre");
            return;
        }
    }
}