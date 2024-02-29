'use client'
import React from 'react'
import { useTienda } from '../../hooks/useTienda'
import ProductCard from '../../components/productoCard'

function Shop() {
  const {productos} = useTienda()
  return (
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
  )
}

export default Shop