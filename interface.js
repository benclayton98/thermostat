
window.addEventListener('load', function(){
    const thermostat = new Thermostat
    const buttonUp = document.getElementById("buttonUp")
    const buttonDown = document.getElementById("buttonDown")
    const buttonOff = document.getElementById("buttonOff")
    const buttonOn =document.getElementById("buttonOn")
    const buttonEnergy = document.getElementById("buttonEnergy")
    const buttonReset = document.getElementById("buttonReset")
    

    buttonUp.addEventListener("click", function() {
        message.innerText = thermostat.up()
        energyUsage.innerText = thermostat.checkEnergyUsage()
    })
    buttonDown.addEventListener("click", function() {
        message.innerText = thermostat.down()
        energyUsage.innerText = thermostat.checkEnergyUsage()
    })
    buttonOff.addEventListener("click", function(){
        messageOff.innerText = thermostat.psmOff()
    })
    buttonOn.addEventListener("click", function(){
        messageOff.innerText = thermostat.psmOn()
        message.innerText = thermostat.set25()
    })
    buttonEnergy.addEventListener("click", function(){
        energyUsage.innerText = thermostat.checkEnergyUsage()
    })
    buttonReset.addEventListener("click", function(){
        message.innerText = thermostat.reset()
        energyUsage.innerText = thermostat.checkEnergyUsage()
    })

    $(document).ready(function(){
        $("#buttonUp").click(function(){
            $("#messageOff").hide();
        });
    });

    $(document).ready(function(){
        $("#buttonDown").click(function(){
            $("#messageOff").hide();
        });
    });

    $(document).ready(function(){
        $("#buttonOn").click(function(){
            $("#messageOff").show();
        });
    });

    $(document).ready(function(){
        $("#buttonOff").click(function(){
            $("#messageOff").show();
        });
    });


    $(document).ready(function(){
        $("#manchesterButton").click(function(){
            let cityName = 'Manchester'; 
            $.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=86c1d10549d3397897e88a9c6b8ef1ec`,
            function(data, status){
                console.log(data);
    
                weatherMessage.innerText = `Current weather in ${cityName}:`
                londonWeather.innerText = data.main.temp;
                londonWeather.innerText = londonWeather.innerText + '°C';
            })
        })
    })

    $(document).ready(function(){
        $("#birminghamButton").click(function(){
            let cityName = 'Birmingham'; 
            $.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=86c1d10549d3397897e88a9c6b8ef1ec`,
            function(data, status){
                console.log(data);
    
                weatherMessage.innerText = `Current weather in ${cityName}:`
                londonWeather.innerText = data.main.temp;
                londonWeather.innerText = londonWeather.innerText + '°C';
            })
        })
    })

    $(document).ready(function(){
        $("#londonButton").click(function(){
            let cityName = 'London'; 
            $.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=86c1d10549d3397897e88a9c6b8ef1ec`,
            function(data, status){
                console.log(data);
    
                weatherMessage.innerText = `Current weather in ${cityName}:`
                londonWeather.innerText = data.main.temp;
                londonWeather.innerText = londonWeather.innerText + '°C';
            })
        })
    })


    $.get(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=86c1d10549d3397897e88a9c6b8ef1ec`,
            function(data, status){
                console.log(data);
    
                londonWeather.innerText = data.main.temp;
                londonWeather.innerText = londonWeather.innerText + '°C';
            })
    })