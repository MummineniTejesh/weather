let weather ={
    "apikey": "82005d27a116c2880c8f0fcb866998a0",
    fetchweather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather:function(data){
        if(data==""){
            alert("city not found");
        }
        const { name } =data;
        const { icon,description }=data.weather[0];
        const { temp,humidity,feels_like } = data.main;
        const { speed } = data.wind;
        document.querySelector("#city").innerText="Weather in " + name;
        document.querySelector("#temperature").innerText=temp +"°C";
        document.querySelector("#icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector("#description").innerText=description;
        document.querySelector("#feelslike").innerText="Feels like:" + feels_like +"°C";
        document.querySelector("#humidity").innerText="Humidity:"+ humidity +"%";
        document.querySelector("#windspeed").innerText="Wind speed:"+ speed +"km/h";
    },
    search:function(){
        this.fetchweather(document.querySelector("#search-bar").value)
    }
};

document.querySelector("#search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector("#search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})