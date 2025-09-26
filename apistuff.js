$(document).ready(function() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

    $("#getWeatherBtn").click(function() {
        let city = $("#cityInput").val().trim();
        if(city === "") {
            $("#weatherResult").html('<p class="text-danger">Please enter a city name.</p>');
            return;
        }

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

        $.getJSON(apiUrl, function(data) {
            let weatherHTML = `
                <h4>${data.name}, ${data.sys.country}</h4>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            $("#weatherResult").html(weatherHTML);
        }).fail(function() {
            $("#weatherResult").html('<p class="text-danger">City not found. Please try again.</p>');
        });
    });
});







	
