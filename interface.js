
window.addEventListener('load', function(){
    const thermostat = new Thermostat
    const buttonUp = document.getElementById("buttonUp")
    const buttonDown = document.getElementById("buttonDown")
    const buttonOff = document.getElementById("buttonOff")
    const buttonOn =document.getElementById("buttonOn")
    

    buttonUp.addEventListener("click", function() {
        message.innerText = thermostat.up()
    })
    buttonDown.addEventListener("click", function() {
        message.innerText = thermostat.down()
    })
    buttonOff.addEventListener("click", function(){
        messageOff.innerText = thermostat.psmOff()
    })
    buttonOn.addEventListener("click", function(){
        messageOff.innerText = thermostat.psmOn()
        message.innerText = thermostat.set25()
    })

})