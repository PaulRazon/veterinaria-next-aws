'use client'
import React from 'react'
import Carrusel from '../components/carrusel'
import Card from '../components/card'
import { useTienda } from '../hooks/useTienda'
import ProductCard from '../components/productoCard'
import BlogCard from '../components/blogCard'

function Home() {
  const {productos, blogs} = useTienda()
  return (
    <main className='flex flex-col h-screen w-full items-center'>
      <div className='w-3/4 bg-[#654190] flex p-7 mt-8 rounded-md'>
        <div className='w-3/4'>
            <h2 className='text-white text-xl md:text-6xl'>Para una mejor <span className='text-[#a07dd0] opacity-15 font-bold'>experiencia</span> para ti y tu peludo ,<span className='font-bold'>descarga la app</span></h2>
           
        </div>
        <Carrusel/>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-around items-center mt-9 w-full '>
        <Card titulo="Alimento para" subtitulo='Perro' image='dogs' fondo='primary'/>
        <Card titulo="Alimento para" subtitulo='Gato' image='cats' fondo='secondary'/>
        <Card titulo="Veterinarias" subtitulo='Asistencias' image='services' fondo='azul'/>
      </div>
      <div className='p-4 flex flex-col items-center'>
        <h3 className='text-[#654190] text-6xl font-bold '>Productos</h3>
        <div className='flex flex-wrap gap-4 justify-around p-4'>
          {productos.map(producto=>(
            <ProductCard 
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </div>

      <div className='p-4 flex flex-col items-center'>
        <h3 className='text-[#654190] text-6xl font-bold '>Blogs</h3>
        <div className='flex flex-wrap gap-4 justify-around p-4'>
          {blogs.map(blog=>(
            <BlogCard 
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home