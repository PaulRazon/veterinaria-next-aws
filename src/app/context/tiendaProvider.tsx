'use client'
import React, { createContext, useEffect } from "react";
import axios from 'axios'
export type GlobalContent ={
    modal:boolean
    setModal:(m:boolean)=>void
    productos: Producto[]
    blogs:Blogs[]
}

export type Blogs = {
    id: number,
    titulo: string,
    descripcion: string,
    categorias: string[],
    fecha: string,
    autor: string,
    imagen:string
}
export type Producto={
    id:number,
    nombre:string,
    precio:number,
    categoria:string,
    descripcion:string,
    caducidad:string,
    imagen:string
}

const TiendaContext = createContext<GlobalContent>({
    modal:false,
    setModal:()=>{},
    productos:[],
    blogs:[]
});



const TiendaProvider = ({children}:{children:React.ReactNode})=>{
    const [modal,setModal] = React.useState(false)
    const [productos,setProductos] = React.useState([]);
    const [blogs,setBlogs] = React.useState([]);

    useEffect(()=>{
        getProducts();
        getBlogs();
    },[]);

    const getProducts=async ()=>{
        try {
            const {data} = await axios('http://localhost:3000/productos')
            setProductos(data)
        } catch (error) {
            console.log(error)
        }
    }

    //

    const getBlogs = async () =>{
        try {
            const {data} = await axios('http://localhost:3000/blogs')
            setBlogs(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <TiendaContext.Provider
            value={{
                modal,
                setModal,
                productos,
                blogs
            }}
        >
            {children}
        </TiendaContext.Provider>
    )
}

export default TiendaContext
export {TiendaProvider}
