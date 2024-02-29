import { useContext } from "react"
import TiendaContext from "../context/tiendaProvider"

export const useTienda = ()=>{
    return useContext(TiendaContext);
}