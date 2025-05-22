import RenderImage from "../WeatherIcon/WeatherIcon";
import RenderData from "../WeatherData/WeatherData";
import "./WeatherForecast.css";

function RenderForecast({ day, img, imgAlt, time, conditions }) {
  return (
    <div className="weather">
      <RenderImage img={img} imgAlt={imgAlt} />
      <RenderData day={day} time={time} conditions={conditions} />
    </div>
  );
}

export default RenderForecast;
