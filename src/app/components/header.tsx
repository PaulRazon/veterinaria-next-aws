'use client'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Hamburguesa from './hamburguesa';

const Links = styled(Link)`
    padding:0.5rem;
    border-radius:0.5rem;
    transition-property: background;
    transition-duration: 0.5s;
    font-size:1.4rem;
    &:hover{
        cursor: pointer;
        background: white;
        opacity: 75%;
        color:#654190;
    }
`
function Header() {
  return (
    <header className='bg-[#654190] flex flex-col md:flex-row justify-between items-center'>
        <div className='pl-2 pb-2 flex flex-col items-start w-1/2'>
        <div className='flex p-4 w-full'>
            <Image src={'/img/logo.png'} width={70} height={50} alt='logo'/>
        </div>
        <OutlinedInput
        id="outlined-basic"
        className='text-[#654190] bg-white border-white font-bold w-full'
        startAdornment={
        <InputAdornment position="start">
            <SearchIcon  className='text-[#654190] fotn-bold'/>
        </InputAdornment>}
        />
        </div>
        
        <Hamburguesa/>
        <div className='md:flex justify-between items-end  w-1/2 text-white font-bold p-5 hidden' id='links'>
            <Links href={'/dashboard'}>Inicio</Links>
            <Links href={'/dashboard/shop'}>Tienda</Links>
            <Links href={'/dashboard/blog'}>Blog</Links>
            <Links href={'/dashboard/contactos'} >Contactos</Links>
        </div>    
    </header>
  )
}

export default Header