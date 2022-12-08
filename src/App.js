import { useState } from "react";
import WeatherList from "./components/WeatherList";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("Bucharest");
  const [data, setData] = useState({});
  const [degrees, setDegrees] = useState("metric");
  const [isError, setIsError] = useState(false);

  return (
    <div className='container'>
      <Form
        location={location}
        setLocation={setLocation}
        data={data}
        setData={setData}
        degrees={degrees}
        setDegrees={setDegrees}
        isError={isError}
        setIsError={setIsError}
      ></Form>
      <WeatherList
        data={data}
        degrees={degrees}
        isError={isError}
        setIsError={setIsError}
      />
    </div>
  );
}

export default App;
