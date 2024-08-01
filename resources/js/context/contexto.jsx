import React, {useState,useEffect } from "react";
export const Exaplecontect=React.createContext({})



export default function ExamplecontexProvier({children}){
    const [datos, setDatos] = useState(() => {
        // Intenta obtener los datos del localStorage al iniciar
        const localData = localStorage.getItem('datos');
        return localData ? JSON.parse(localData) : null;
    });

    useEffect(() => {
        // Guarda los datos en el localStorage cada vez que cambien
        localStorage.setItem('datos', JSON.stringify(datos));
    }, [datos]); 
    return(
        <Exaplecontect.Provider value={{datos,setDatos}}>
            {children}
        </Exaplecontect.Provider>
    )
}