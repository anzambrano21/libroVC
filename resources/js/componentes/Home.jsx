import React, { useState, useEffect, useContext } from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './inicio'
import { LibroV } from './libroV';
import { LibroC } from './libroC';
import { Cliente } from './Cliente';
import { Activar } from './Activar';
import { Registro } from './usuario.jsx';

import { IGTF } from "./IGTF.jsx";
import { Hoja7 } from "./hoja7.jsx";
import {RetenC} from "./retenciones.jsx";
import "../../css/menu.css";

import ExamplecontexProvier, { Exaplecontect } from "../context/contexto"
export default function Home() {
    const currentURL = window.location.href;
    let url=currentURL.split('/')[3]
    console.log(url);
    
    const style = url === '' ? { backgroundColor: '#080710' } : {};
    
    
    //<a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i>    Home </a>
    return (
        <div className='dashboard col' style={style}>
            <div className={(url=='')? "None":'dashboard-nav'} >
                <header><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a><a href="#" className="brand-logo"><i
                    className="fas fa-anchor"></i> <span>LOGO</span></a></header>
                <nav className="dashboard-nav-list"><a href="LibroV" className={(url=="LibroV" )? "dashboard-nav-item active":"dashboard-nav-item"}><i className="fas fa-tachometer-alt"></i> Ventas
                    </a><a href="LibroC" className={(url=="LibroC" )? "dashboard-nav-item active":"dashboard-nav-item"}><i className="fas fa-file-upload"></i> Compras </a>
                    <div className='dashboard-nav-dropdown'>
                        <a href="Cliente" className={(url=="Cliente" )? "dashboard-nav-item active dashboard-nav-dropdown-toggle":"dashboard-nav-item dashboard-nav-dropdown-toggle"}> Clientes </a>
                        <div className='dashboard-nav-dropdown-menu'>
                        </div>
                        <div className='dashboard-nav-dropdown'>
                            <a href="Activar" className={(url=="Activar" )? "dashboard-nav-item active dashboard-nav-dropdown-toggle":"dashboard-nav-item dashboard-nav-dropdown-toggle"}> Activar </a>

                            <div className='dashboard-nav-dropdown'><a href="Reten"
                                className={(url=="Reten" )? "dashboard-nav-item active dashboard-nav-dropdown-toggle":"dashboard-nav-item dashboard-nav-dropdown-toggle"}>Retenciones</a>
                            </div>
                            <a href="Hoja7" className="dashboard-nav-item"><i className="fas fa-cogs"></i>Hoja 7 </a><a href="IGTF"
                                className="dashboard-nav-item"><i className="fas fa-user"></i> IGTF </a>
                            <div className="nav-item-divider"></div>
                            <a href="/" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='dashboard-app col-1' >
                <BrowserRouter>

                    <Routes>
                        
                        

                        <Route path='/LibroV' element={<LibroV />} />
                        <Route path='/LibroC' element={<LibroC />} />
                        <Route path='/' element={<Inicio />} />
                        <Route path='/IGTF' element={<IGTF />} />
                        <Route path='/Hoja7' element={<Hoja7 />} />
                        <Route path='/Reten' element={<RetenC />} />
                        <Route path='/Cliente' element={<Cliente />} />
                        <Route path='/Activar' element={<Activar />} />
                        <Route path='/Registro' element={<Registro />} />


                    </Routes>


                </BrowserRouter>
            </div>
        </div>


    );
}
if (document.getElementById('codeareact')) {
    
    createRoot(document.getElementById('codeareact')).render(
        <ExamplecontexProvier>
            <Home />
        </ExamplecontexProvier>

    )
}