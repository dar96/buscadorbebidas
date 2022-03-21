import { useContext } from "react";
import CategoriasContext from "../context/CategoriasProvider";


const useCategorias=()=>useContext(CategoriasContext)

export default useCategorias