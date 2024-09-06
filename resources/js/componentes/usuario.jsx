import React, { useState, useEffect, useContext } from 'react';
import '../../css/registro.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Exaplecontect } from "../context/contexto"
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;
export const Registro = () => {
    console.log(data2);

    const registrar = async () => {

        let user = {
            use: document.getElementById('usuario').value,
            CI: document.getElementById('cedula').value,
            tf: document.getElementById('telefono').value,
            pw: document.getElementById('contrasena').value,
            ce: document.getElementById('codigo_empleado').value,
            ubi: document.getElementById('ubicacion').value,
            fC: document.getElementById('fecha_contratacion').value,
            permiso: document.getElementById('nivel_permiso').value,
        }
        const response = await axios.post('http://127.0.0.1:8000/api/usuario', user)
        console.log(response.data);

    }

    return (
        <div className='row '>
            <div className=' tablauser col-md-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">Cod Empleado</th>
                            <th className="col">Usuario</th>
                            <th className="col">Cedula</th>
                            <th className="col">Telefono</th>


                            <th className="col">Ubicacion</th>
                            <th className="col">Fecha de Contratacion</th>
                            <th className="col">Permiso</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index + 1} onClick={() => completar(index)}>

                                <td>{item.codUser}</td>
                                <td >{item.usuario}</td>
                                <td>{item.CI}</td>
                                <td>{item.telefono}</td>

                                <td>{item.ubicacion}</td>
                                <td>{item.fecha}</td>

                                <td>{item.nivel}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className='justify-content-center col-md-6'>
                <div className='justify-content-center'>
                    <h2>Registro de Usuario</h2>
                    <div className='containerR'>
                        <label htmlFor="usuario">Usuario:</label>
                        <input className='inputR' type="text" id="usuario" name="usuario" required />

                        <label htmlFor="cedula">Cédula:</label>
                        <input className='inputR' type="text" id="cedula" name="cedula" required />

                        <label htmlFor="telefono">Teléfono:</label>
                        <input className='inputR' type="tel" id="telefono" name="telefono" required />

                        <label htmlFor="contrasena">Contraseña:</label>
                        <input className='inputR' type="password" id="contrasena" name="contrasena" required />

                        <label htmlFor="codigo_empleado">Código de Empleado:</label>
                        <input className='inputR' type="text" id="codigo_empleado" name="codigo_empleado" required />

                        <label htmlFor="ubicacion">Ubicación:</label>
                        <input className='inputR' type="text" id="ubicacion" name="ubicacion" required />

                        <label htmlFor="fecha_contratacion">Fecha de Contratación:</label>
                        <input className='inputR' type="date" id="fecha_contratacion" name="fecha_contratacion" required />

                        <label htmlFor="nivel_permiso">Nivel de Permiso:</label>
                        <select className='selectR' id="nivel_permiso" name="nivel_permiso" required>
                            <option value="0">Seleccione un nivel</option>
                            <option value="1">Nivel 1</option>
                            <option value="2">Nivel 2</option>
                            <option value="3">Nivel 3</option>
                            <option value="4">Nivel 4</option>
                            <option value="5">Nivel 5</option>
                        </select>

                        <button onClick={registrar} className='buttonR' type="submit">Registrar</button>
                    </div>
                </div>

            </div>
        </div>

    )
}