import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  return (
    <div className='fixed bottom-0 flex flex-col md:flex-row justify-between items-center bg-slate-600 w-full p-3'>
      <div className='md:flex-auto md:w-16 bg-blue-300'>
        <h1 className='text-center md:text-start pl-5'>
          Copyright &copy; New Design 2023
        </h1>
      </div>
      <div className='md:flex-auto md:w-16 lg:w-64 bg-red-500'>
        <ul className='flex flex-row py-2 md:py-1 justify-center'>
          <li className='w-[40px] h-[30px] flex  justify-between items-center rounded-xl hover:scale-150 bg-blue-400 hover:bg-blue-500'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='https://www.linkedin.com/in/unaldutlu/'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[40px] h-[30px] flex justify-between items-center rounded-xl hover:scale-150 bg-blue-600 hover:bg-blue-700'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/unaldutlu'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[40px] h-[30px] flex justify-between items-center rounded-xl hover:scale-150 bg-green-500 hover:bg-green-700'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href='#'
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[40px] h-[30px] flex justify-between items-center rounded-xl hover:scale-150 bg-red-600 hover:bg-red-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/?hl=tr&tf=cm&fs=1&to=unaldutlu@gmail.com'
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className='md:flex-auto md:w-16'>
        <h1 className='text-center md:text-end pr-5'>Privacy Policy</h1>
      </div>
    </div>
  );
}

export default Footer;