import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import ListOfCities from "../pages/ListOfCities";
import TurkeyMap from "../pages/TurkeyMap";

function Weather() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Malatya");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const datum = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e813d7a57f8e6eaf1c8c534da4ec575a&units=metric&lang=tr`
        );
        // console.log(datum.data);
        setWeather(datum.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [city]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='turkeyMap'
            element={
              <TurkeyMap weather={weather} city={city} setCity={setCity} />
            }
          />
          <Route
            path='listOfCities'
            element={
              <ListOfCities weather={weather} city={city} setCity={setCity} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Weather;
