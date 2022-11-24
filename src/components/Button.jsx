import React from "react";
import { NavLink } from "react-router-dom";

function Button() {
  return (
    <div className='flex flex-row justify-center items-center'>
      <NavLink
        to='turkeyMap'
        className='bg-black text-white border-none flex items-center px-6 py-3 my-2 rounded-2xl hover:bg-orange-500 mr-4'
      >
        Turkey Map
      </NavLink>
      <NavLink
        to='listOfCities'
        className='bg-black text-white border-none flex items-center px-6 py-3 my-2 rounded-2xl hover:bg-orange-500'
      >
        List of Cities
      </NavLink>
    </div>
  );
}

export default Button;
