import React from "react";
import { useNavigate } from "react-router-dom";
import useTurkeyCities from "use-turkey-cities";

function ListOfCities({ setLocation }) {
  const { cities, city, setCity } = useTurkeyCities();

  const navigate = useNavigate();

  const handleClick = () => {
    setLocation(city);
    navigate("/");
  };

  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(city);
        }}
        className='flex justify-center items-center'
      >
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className='selectt h-7  sm:w-60 rounded-lg mr-6 px-2 outline-none show font-bold'
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          type='submit'
          className='bg-orange-500 text-white border-none  px-4 rounded-lg hover:bg-orange-600 h-7 show'
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
      <div className='style flex justify-center items-center mt-[50%] lg:mt-[17%] weather'>
        <h1 className='font-extrabold text-xl sm:text-2xl lg:text-4xl uppercase'>
          weather app turkey
        </h1>
      </div>
    </div>
  );
}

export default ListOfCities;
