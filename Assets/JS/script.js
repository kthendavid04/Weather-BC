console.log ("js is attached correctly")


var weather = {
fetchWeather: function(){
    fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=london&units=imperial&appid=0926fcb0e02c66abd7c1f869bc9dfc05"
        )
        .then((response) => response.json())
        console.log (response)
        .then((data) => this.displayWeather(data));
        },
displayWeather: function(data){
   // const { name } = data;
    //const { icon, description } = data.weather;
    //const { temp, humidity } = data.main;
    //const { speed } = data.wind;
    //console.log (name, icon, description, temp, humidity, speed)

}

    };
