// url of Express API that serves info from OpenWeatherMap API
const url = 'http://localhost:3000/';



// fetch JSON data to serve to front-end. displays temperature. 
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const icon = data.weather[0].icon;
        document.getElementById('temp').innerHTML = Math.ceil(data.main.temp) + "°C";

        document.getElementById('icon').innerHTML = `<img src="/images/${icon}.png">`;
    })
    .catch(err => {
        console.log(err);
    })

