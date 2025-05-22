import "./WeatherForecast.css";
export default function RenderDayWeather({ day }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src="" alt="" />
      <p>
        <span>conditions: </span>current weather conditions
      </p>
      <p>
        <span>time: </span>time of day
      </p>
    </div>
  );
}
