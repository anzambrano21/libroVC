import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio,Registro } from './inicio'
import { LibroV } from './libroV';
export default function Home(){
    return(
        
        <BrowserRouter>
            
            <Routes>
                
                <Route path='/' element={<LibroV/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/registro/*' element={<Registro/>} />
                
                
                
            </Routes>

            
        </BrowserRouter>
    );
}

if(document.getElementById('codeareact')){
    createRoot(document.getElementById('codeareact')).render(<Home/>)
}