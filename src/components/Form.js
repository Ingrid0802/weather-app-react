import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";

const Form = ({
  location,
  setLocation,
  setData,
  degrees,
  setDegrees,
  setIsError,
}) => {
  const key = "18ced195aeb8f3e5b6e65ab0e305405a";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${degrees}&appid=${key}`;

  const getWeather = async () => {
    try {
      const { data } = await axios.get(url);
      setIsError(false);
      setData(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [degrees]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") {
      return;
    }
    getWeather();
  };

  const changeDegrees = () => {
    if (degrees === "metric") {
      setDegrees("imperial");
      console.log(degrees);
    } else {
      setDegrees("metric");
    }
  };

  return (
    <div className='form '>
      <form onSubmit={onSubmit}>
        <input
          aria-label='location'
          type='text'
          placeholder='Search for location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onSubmit={onSubmit}
        />
        <BsSearch className='btn' type='submit' onClick={onSubmit} size='1.3em'>
          search
        </BsSearch>
      </form>
      <button className='temp-btn' onClick={changeDegrees}>
        C &deg; | K &deg;
      </button>
    </div>
  );
};

export default Form;
