import RenderImage from "../WeatherIcon/WeatherIcon";
import "./WeatherForecast.css";

function RenderDayWeather({ day, img, imgAlt, time, conditions }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      {/* <img src={img} alt={imgAlt} /> */}
      <RenderImage img={img} imgAlt={imgAlt} />

      <p>
        <span>conditions: {conditions} </span>
      </p>
      <p>
        <span>time: {time}</span>
      </p>
    </div>
  );
}

export default RenderDayWeather;
