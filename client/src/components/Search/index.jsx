import React from 'react';
import './style.css'
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 ' >
      <input type='text' placeholder='Search for Products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
      <Button className='!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w[37px] h-[37px] !rounded-full text-black' ><IoSearchOutline className='text-[#4e4e4e] text=[22px]' /></Button>
    </div>
  )
}

export default Search
