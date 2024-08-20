import React, { useState, useEffect, useContext } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio, Registro } from './inicio'
import { LibroV } from './libroV';
import { LibroC } from './libroC';
import { Cliente } from './Cliente';
import { Activar } from './Activar';
import ExamplecontexProvier, { Exaplecontect } from "../context/contexto"
export default function Home() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Activar />} />
                <Route path='/Cliente' element={<Cliente />} />
                <Route path='/LibroV' element={<LibroV />} />
                <Route path='/LibroC' element={<LibroC />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/registro/*' element={<Registro />} />



            </Routes>


        </BrowserRouter>
    );
}

if (document.getElementById('codeareact')) {
    createRoot(document.getElementById('codeareact')).render(
        <ExamplecontexProvier>
            <Home />
        </ExamplecontexProvier>

    )
}