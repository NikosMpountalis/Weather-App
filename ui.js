class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.sunsun = document.getElementById('w-sunsun');
    this.temp = document.getElementById('w-temp');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name + ' - ' + weather.sys.country;
    this.desc.textContent =weather.weather[[0]].main + ' - '+ weather.weather[[0]].description;
    this.string.textContent = weather.main.temp + ' F';
    this.icon.setAttribute('src', weather.weather[[0]].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.sunsun.textContent = `Sunrise: ${weather.sys.sunrise}`+' - '+`Sunset: ${weather.sys.sunset}`
    this.temp.textContent = `Temp-min: ${weather.main.temp_min}`+' - '+`Temp max: ${weather.main.temp_max}`;
    this.wind.textContent = `Wind-Speed: ${weather.wind.speed}`+` km/h`;
  }
} 

