import React from "react";

function Card() {
  return (
    <div className='flex justify-center m-5 lg:m-0 my-5 lg:my-7 pb-28'>
      <div className='border border-orange-500 w-[39rem] h-60 sm:h-80 text-center rounded-2xl bg-yellow-500'>
        <div>
          <h1 className='my-1 sm:my-3 font-bold'>İL</h1>
        </div>
        <div>
          <div className='text-3xl sm:text-5xl mt-10 sm:mt-14'>Sıcaklık</div>
          <div className='mt-2 mb-4 sm:mb-16'>Açık/Kapalı</div>
        </div>
        <div className='flex justify-between'>
          <div className='p-2'>
            <div className='p-2'>Km</div>
            <div className="px-3">Yüzde</div>
          </div>
          <div className='flex items-center p-5'>icon</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
