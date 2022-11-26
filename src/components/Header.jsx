import React from "react";

function Header() {
  return (
    <div className='flex flex-col justify-center items-center my-3'>
      <h1 className='font-bold text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl text-orange-500 my-4 md:mt-20 lg:mt-2'>
        Welcome
      </h1>
      <h3 className='text-orange-500 text-sm md:text-xl lg:text-2xl '>
        Please Click Button For Other Cities' Weather Condition
      </h3>
    </div>
  );
}

export default Header;
