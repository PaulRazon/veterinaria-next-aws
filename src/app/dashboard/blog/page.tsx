'use client'
import React from 'react'
import BlogCard from '../../components/blogCard'
import { useTienda } from '../../hooks/useTienda'

function Blog() {
  const {blogs}= useTienda();
  return (
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
  )
}

export default Blog