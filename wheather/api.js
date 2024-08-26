
document.getElementById('wheatherReport').addEventListener('click', GetWeatherDetails);

async function GetWeatherDetails() {

    const city = document.getElementById('searchcity').value;
    const apiKey = '8e3d6dcf814770694740b458ab929068';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    
        const response = await fetch(url);

        
        if (!response.ok) {
            
            const container = document.getElementById('citydetails');
        container.innerHTML = `<h1>this is not working try with another city</h1>`
        }
        if(response.cod===404)
        {
            const container = document.getElementById('citydetails');
        container.innerHTML = `<h1>this is not working try with another city</h1>`

        }
        const data = await response.json();

     
        const container = document.getElementById('citydetails');
        container.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        
        
    }

