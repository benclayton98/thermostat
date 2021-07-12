const Thermostat = require('./../../src/thermostat.js');


let thermostat;

describe('thermostat',function(){

    beforeEach(function() {
        thermostat = new Thermostat();
        })    
    
    it('should start at 20 degrees', function(){
    expect(thermostat.checkTemp()).toEqual(20);
    })

    it('should increase the temperature by 1 when up is called', function(){ 
    expect(thermostat.up()).toEqual(21)
    })

    it('should decrease the temperature by 1 when down is called', function(){ 
        expect(thermostat.down()).toEqual(19)
        })

    it('should not be able to go below the minimum temp of 10 degrees', function(){
        for (let i = 0; i<15; i+=1){
            thermostat.down();
            }
        expect(thermostat.down()).toEqual('You have reached the minimum temperature')
    })

    it('should have a power saving mode which is on by default',function(){
        expect(thermostat._powerSavingMode).toEqual(true)
    })

    it('can turn the power saving mode off',function(){
        thermostat.psmOff();
        expect(thermostat._powerSavingMode).toEqual(false)
    })

    it('can turn the power saving mode back on',function(){
        thermostat.psmOff();
        thermostat.psmOn();
        expect(thermostat._powerSavingMode).toEqual(true)
    })

    it('if power saving mode is on, the max temp is 25',function(){
        for (let i = 0; i<8; i+=1){
        thermostat.up();
        }
        expect(thermostat.up()).toEqual('You have reached the maximum temperature')
    })

    it('if power saving mode is off, the max temp is 32',function(){
        for (let i = 0; i<15; i+=1){
        thermostat.up();
        }
        expect(thermostat.up()).toEqual('You have reached the maximum temperature')
    })

    it('that the temperature should be able to go above 25 when the power saving mode is turned off',function(){
        for (let i = 0; i<15; i+=1){
        thermostat.up();
        }
        thermostat.psmOff();
        thermostat.up();
        expect(thermostat.up()).toEqual(27)
    })

    it('can reset its temperature back to 20',function(){
        expect(thermostat.reset()).toEqual(20)
    })

    it('can check current energy usage - checking lower bound',function(){
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.checkEnergyUsage()).toEqual('low usage')
    })

    it('can check current energy usage - checking medium bound',function(){
        thermostat.up();
        expect(thermostat.checkEnergyUsage()).toEqual('medium usage')
    })

    it('can check current energy usage - checking higher bound',function(){
        thermostat.psmOff();
        for (let i = 0; i<8; i+=1){
            thermostat.up();
            }
        expect(thermostat.checkEnergyUsage()).toEqual('high usage')
    })

})



