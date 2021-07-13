class Thermostat{
    constructor(temperature = 20){
        this._temperature = temperature;
        this._powerSavingMode = true;
    }

    checkTemp(){
        return this._temperature;
    }

    up(){
        if (this._powerSavingMode === true && this._temperature === 25){
            return 'You have reached the maximum temperature'
        }
        else if (this._powerSavingMode === false && this._temperature===32){
            return 'You have reached the maximum temperature'
        }
        else
        return this._temperature += 1;
    }

    down(){
        if(this._temperature===10){
            return 'You have reached the minimum temperature'
        }
        else
        return this._temperature -=1;
    }

    psmOff(){
        this._powerSavingMode = false;

        return 'power saving mode Off'
    }

    psmOn(){
        
        
        if(this._temperature >25){
            
            this._temperature = 25
            this._powerSavingMode = true;
        }else {
            this._powerSavingMode = true;
        }
        return 'power saving mode On'
    }

    reset(){
        return this._temperature = 20;
    }

    checkEnergyUsage(){
        if(this._temperature < 18){
            return 'low usage';
        }
        else if(this._temperature <= 25){
            return 'medium usage'
        }
        else 
        return 'high usage'
    }
    set25(){
        if(this._temperature >25){
        this._temperature = 25
    }
    else
    {
        this._temperature = this._temperature
    }return this._temperature
}


}
