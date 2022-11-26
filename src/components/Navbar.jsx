import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "moment";

function Navbar() {
  const formatDate = Moment().format("DD-MM-YYYY");
  return (
    <div className='grid grid-cols-12 items-center bg-slate-700'>
      <div className='col-span-8 lg:col-span-4 flex justify-start'>
        <NavLink
          to='/'
          className='stylee text-md sm:text-xl ps-3 py-3 tracking-widest duration-500 mx-5 font-bold hover:scale-110 lg:hover:scale-100 text-yellow-500 lg:text-slate-300 hover:text-orange-500 lg:hover:text-slate-300'
        >
          Weather App Turkey
        </NavLink>
      </div>
      <div className='hidden lg:block  col-span-0 lg:col-span-6 family'>
        <nav>
          <ul className='flex flex-row'>
            <li className='hover:scale-125 hover:text-orange-500'>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#f97316" : "yellow",
                  textDecoration: isActive ? "underline" : "none",
                })}
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='hover:scale-125 hover:text-orange-500'>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#f97316" : "yellow",
                  textDecoration: isActive ? "underline" : "none",
                })}
                to='turkeyMap'
              >
                Turkey Map
              </NavLink>
            </li>
            <li className='hover:scale-125 hover:text-orange-500'>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#f97316" : "yellow",
                  textDecoration: isActive ? "underline" : "none",
                })}
                to='listOfCities'
              >
                Cities List
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='col-span-4 lg:col-span-2 pr-5 font-bold '>
        <h1 className='flex justify-end styleee lg:hover:text-slate-300'>{formatDate}</h1>
      </div>
    </div>
  );
}

export default Navbar;
