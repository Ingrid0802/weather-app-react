import {
  BsFillSunFill,
  BsCloudFill,
  BsFillCloudRainHeavyFill,
  BsSnow,
} from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { WiThermometerExterior } from "react-icons/wi";
import { BsCloudFog2 } from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import Error from "./Error";

const WeatherList = ({ data, degrees, isError }) => {
  const showWeatherIcon = () => {
    switch (data.weather[0].main) {
      case "Clear":
        return <BsFillSunFill size='4em' />;
      case "Clouds":
        return <BsCloudFill size='4em' />;
      case "Rain":
        return <BsFillCloudRainHeavyFill size='4em' />;
      case "Snow":
        return <BsSnow size='4em' />;
      case "Fog":
        return <BsCloudFog2 size='4em' />;
      case "Mist":
        return <RiMistFill size='4em' />;
    }
  };

  const isMetric = () => {
    if (degrees === "metric") {
      return true;
    }
    return false;
  };

  return isError ? (
    <Error />
  ) : (
    <div className='weather-container'>
      {data.name !== undefined && (
        <div className='weather-list'>
          <div className='weather-icon'>
            {data.weather ? (
              <div className='icon'>{showWeatherIcon()}</div>
            ) : null}
          </div>
          <div className='city-and-weather'>
            <h1>{data ? data.name : ""}</h1>
            <p className='weather-status'>
              {data.weather ? data.weather[0].main : ""}
            </p>
            <p className='temp'>
              {data.main ? data.main.temp.toFixed() : ""}
              {isMetric() ? "C°" : "K°"}
            </p>
          </div>
          <div className='additional-info'>
            <p>
              Feels like:{" "}
              <strong>
                {data.main ? data.main.feels_like.toFixed() : ""}
                {isMetric() ? "C°" : "K°"}
              </strong>
            </p>
            <p>
              Humidity: <strong>{data.main ? data.main.humidity : ""}%</strong>
            </p>
            <p>
              Wind:{" "}
              <strong>
                {data.wind ? data.wind.speed : ""}
                {isMetric() ? "km/h" : "mph"}
              </strong>
            </p>
          </div>
        </div>
      )}
      {data.name !== undefined && (
        <div className='min-max'>
          <p>
            <AiOutlineArrowDown size='1em' /> temp min:{" "}
            {data.main ? data.main.temp_min.toFixed() : ""}
            {isMetric() ? "C°" : "K°"}
          </p>
          <p>
            <AiOutlineArrowUp size='1em' /> temp max:{" "}
            {data.main ? data.main.temp_max.toFixed() : ""}
            {isMetric() ? "C°" : "K°"}
          </p>
          <p>
            <WiThermometerExterior size='1em' /> pressure:{" "}
            {data.main ? data.main.pressure : ""}mph
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherList;
