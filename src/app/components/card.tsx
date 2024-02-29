import Image from 'next/image'
import React from 'react'

export type Prop={
    titulo:string
    subtitulo:string
    image:string
    fondo:string
} 
const Card:React.FC<Prop>=({titulo,subtitulo,image,fondo})=>{
  return (
    <div className={`bg-${fondo} rounded-2xl flex-col justify-center md:justify-start items-start w-[80%] md:w-1/4 hover:opacity-90 hover:cursor-pointer`}>
        <p className='text-white text-2xl p-6 absolute'>{titulo} <br /> <span className='font-bold text-white text-4xl'>{subtitulo}</span></p>
        <div className='flex justify-center md:justify-end md:items-end pt-9'>
            <Image src={`/img/${image}.png`} width={180} height={100} alt={''} className=''/>
        </div>
        
    </div>
  )
}

export default Card;
