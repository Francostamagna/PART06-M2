export default function FetchCityById(cityId, setCiudad){
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCiudad(ciudad)
        } else {
          setCiudad(null);
        }
      });
  }