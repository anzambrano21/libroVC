import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import '../../css/libroV.css';
import { Exaplecontect } from "../context/contexto";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos

export const Hoja7 = () => {
    const [date, setDate] = useState(null);
    const events = [
        {
            title: 'Evento importante',
            start: new Date(2024, 7, 10),
            end: new Date(2024, 7, 12),
        },]
    return (
        <div>
            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">Codigo</th>
                            <th className="col">Cliente</th>
                            <th className="col">Numero</th>

                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>
            </div>
            <div className="d-flex formulario mt-4 ml-5 justify-content-around">
                <div className="Datos col-md-4 ">
                    <div className=' row '>
                        <p className='col-sm-5'>Clinete</p>
                        <input id='Nf'  className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Codigo</p>
                        <input id='Nf'  className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Numero</p>
                        <input id='Nf'  className='col-sm-6' type="text" />
                    </div>
                </div >
                <div className="Datos col-md-4 ">
                <div className="row  justify-content-around">
                        <Calendar selectRange={true} onChange={setDate}  />
                    </div>
                    <div className="row justify-content-around">
                        
                        <input className="col-sm-5" type="button" value="Eliminar" />
                        <input className="col-sm-5" type="button" value="Agregar" />
                        <input className="col-sm-5" type="button" value="Limpiar" />
                        
                    </div>
                </div>
                <div className="botones col-md-3 ">
                    <div className="row justify-content-center ">
                        <input type="button" className='col-sm-5'   value="Procesar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button"  className='col-sm-5' value="Sucursales" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5'  value="Libro Compra" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Exel Compra" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Libro Ventas" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Exel Ventas" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Limpiar" />

                    </div>
                </div>

            </div>
        </div>
    )
}