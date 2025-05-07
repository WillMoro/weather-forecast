import "./weatherInformations.css"

function WeatherInformations({ weather }) {
  if (!weather || !weather.main) {
    return <p className="logo">Made by ©Will</p>;
  }

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <p className="description">{weather.weather?.[0]?.description}</p>
      <div className="weather-info">
        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}.png`} alt="Ícone do clima" />
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>

      

    <div className="details">
      <p>Sensação térmica: {Math.round(weather.main.feels_like) } ºC</p>
      <p>Umidade: {weather.main.humidity}%</p>
      <p>Pressão: {weather.main.pressure}</p>
    </div>

    </div>
  );
}

export default WeatherInformations;
