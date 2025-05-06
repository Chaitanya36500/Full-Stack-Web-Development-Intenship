const API_KEY = f8d19072036879c27bf704399a23baef;

async function getWeatherByLocation(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

function displayWeather(data) {
  // Process and display the weather data
}

// Event listeners for buttons
document.getElementById('search-btn').addEventListener('click', () => {
  const location = document.getElementById('location-input').value;
  getWeatherByLocation(location);
});

document.getElementById('location-btn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );
  } else {
    alert('Geolocation is not supported by your browser');
  }
});