import RenderImage from "../WeatherIcon/WeatherIcon";
import RenderData from "../WeatherData/WeatherData";
import "./WeatherForecast.css";

function RenderForecast({ day, img, imgAlt, time, conditions }) {
  return (
    <div className="weather">
      {/* <h2>{day}</h2> */}
      <RenderData day={day} />
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

export default RenderForecast;
