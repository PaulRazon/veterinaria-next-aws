import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Links = styled(Link)`
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition-property: background-color;
    transition-duration: 0.5s;
    width: 100%;
    text-align: center;
    font-size: 4rem;
    &:hover {
        cursor: pointer;
        background-color: white;
        opacity: 75%;
        color: #654190;
    }
`;

function Hamburguesa() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        document.getElementById('burger')?.classList.toggle('hidden');
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='w-full flex justify-start items-end md:absolute'>
                <MenuIcon
                    id='burger'
                    onClick={toggleMenu}
                    className="text-white text-7xl mr-4 font-bold hover:cursor-pointer md:hidden  text-right"
                />
            </div>
            <div 
                className={`md:hidden ${
                    isOpen ? 'flex' : 'hidden'
                }  top-0 flex-col h-screen bg-slate-100 justify-around items-end w-full text-[#654190] font-bold `}
            >
                <CloseIcon
                    onClick={toggleMenu}
                    className="text-[#654190] mt-2 mr-3 text-3xl font-bold hover:cursor-pointer"
                />
                <Links href={'/dashboard'}>Inicio</Links>
                <Links href={'/dashboard/shop'}>Tienda</Links>
                <Links href={'/dashboard/blog'}>Blog</Links>
                <Links href={'/dashboard/contactos'}>Contactos</Links>
            </div>
        </>
    );
}

export default Hamburguesa;
