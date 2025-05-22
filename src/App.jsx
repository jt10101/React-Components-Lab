// src/App.jsx

import RenderDayWeather from "./components/WeatherForecast/WeatherForecast";
import RenderImage from "./components/WeatherIcon/WeatherIcon";

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
      dayId: 1,
    },
    {
      day: "Tue",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
      dayId: 2,
    },
    {
      day: "Wed",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
      dayId: 3,
    },
    {
      day: "Thu",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
      dayId: 4,
    },
    {
      day: "Fri",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
      dayId: 5,
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      {weatherForecasts.map((entry) => (
        <RenderDayWeather
          key={entry.dayId}
          day={entry.day}
          img={entry.img}
          imgAlt={entry.imgAlt}
          conditions={entry.conditions}
          time={entry.time}
        />
      ))}
    </>
  );
};

export default App;
