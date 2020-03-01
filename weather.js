class Weather {
  constructor(city, country){
    this.api = 'a7ae0dcb05d2e37578cad95124a3ce67';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api}`);

    const responseData = await response.json();

    return responseData;
  }

  //change Weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}


/*{
"coord":{"lon":145.77,"lat":-16.92},
"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
"base":"stations",
"main":{"temp":296.4,"pressure":1010,"humidity":78,"temp_min":293.71,"temp_max":298.15},
"visibility":10000,"wind":{"speed":1,"deg":260},
"clouds":{"all":97},
"dt":1575658887,
"sys":{"type":1,"id":9490,"country":"AU","sunrise":1575660926,"sunset":1575708060},
"timezone":36000,
"id":2172797,
"name":"Cairns",
"cod":200
}*/