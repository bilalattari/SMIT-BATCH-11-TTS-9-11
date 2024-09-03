import { useEffect, useState } from "react";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("karachi");

  useEffect(() => {
    console.log("Use effect ka function call hogya");
    getWeather();
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
      });
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondtion = currentWeather?.weather[0]?.main;
  return (
    <div>
      <h1>Weather App</h1>
      <select
        name="city"
        onChange={(e) => setCity(e.target.value)}
        className="border px-3 py-1"
      >
        <option value="karachi">Karachi</option>
        <option value="lahore">Lahore</option>
        <option value="islamabad">Islamabad</option>
        <option value="murree">Murree</option>
        <option value="peshawar">Peshawar</option>
        <option value="abbottabad">Abbotabad</option>
      </select>

      <div className="shadow p-2 my-3">
        <div className="flex justify-between">
          <h1>Temperature</h1>
          <h1>{temp} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Feels Like</h1>
          <h1>{feelsLike} C</h1>
        </div>
        <div className="flex justify-between">
          <h1>Weather</h1>
          <h1>{weatherCondtion}</h1>
        </div>
      </div>
    </div>
  );
}

export default Weather;
