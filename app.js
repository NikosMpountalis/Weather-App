//Init class
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

// Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// change weatherlocation button 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Ser change location in local storage
  storage.setLocationData(city,country);

  //get and display weather
  getWeather();

  //close Modal
  $('#locModal').modal('hide');
});