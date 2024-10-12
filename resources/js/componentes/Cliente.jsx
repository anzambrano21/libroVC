import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';
import axios from 'axios';


export const Cliente = () => {
    const [data, setData] = useState(null);
    const [tipoContribuyente, setTipoContribuyente] = useState('Especial');
    const [tipoPatente, setTipoPatente] = useState('Con Patente');
    const [tipoRegistradora, setRegistradora] = useState('Con Caja Registradora');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = 'Registro de Cliente';
        const fetchData = async () => {
            try {
                let res = await fetch('http://127.0.0.1:8000/api/cliente');
                let myData = await res.json();
                setData(myData);
              } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setLoading(false);
              }
          };
      
          fetchData();
      }, []); 
      if (loading) {
        return <p>Cargando datos...</p>;
      }


    const manejarCambioTipo = (e) => {
        setTipoContribuyente(e.target.value);
    };
    const manejarPatente = (e) => {
        setTipoPatente(e.target.value);
    };
    const manejarRegistradora = (e) => {
        setRegistradora(e.target.value);
    };



    const registrar = async () => {
        let user = {
            codi: document.getElementById('cod').value,
            nom: document.getElementById('Nom').value,
            rep: document.getElementById('Rep').value,
            rif: document.getElementById('rif').value,

            dire: document.getElementById('dire').value,
            telef: document.getElementById('telef').value,
            num: document.getElementById('Num').value,
            subC: document.getElementById('sucur').value,

            con: tipoContribuyente,
            paten: tipoPatente,
            regis: tipoRegistradora,

        }
        let response = await axios.post('http://127.0.0.1:8000/api/cliente', user)
        console.log(response);
        alert("Cliente Registrado")


    }
    function completar(index) {
        
        document.getElementById('cod').value=cliente[index]['codi']
        document.getElementById('Nom').value=cliente[index]['nombre']
        document.getElementById('Rep').value=cliente[index]['representante']
        document.getElementById('rif').value=cliente[index]['rif']

        document.getElementById('dire').value=cliente[index]['direccion']
        document.getElementById('telef').value=cliente[index]['telefono']
        document.getElementById('Num').value=cliente[index]['numero']
        document.getElementById('sucur').value=cliente[index]['sucursal']
        document.getElementById('paten').value=cliente[index]['patente']
        document.getElementById('regis').value=cliente[index]['cajaregistradora']
        document.getElementById('contri').value=cliente[index]['contribuyente']



    }
    
    
    return (
        <div>
            <div className="tabla2">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Codigo</th>
                            <th className="col">Nombre Razon Social</th>
                            <th className="col">RIF</th>
                            <th className="col">Numero</th>
                            <th className="col">Cod Cpc</th>
                            <th className="col">Contribuyente</th>
                            <th className="col">Patente</th>

                            <th className="col">Clave Patente</th>
                            <th className="col">Clasificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (

                            <tr key={index + 1} onClick={() => completar(index)}>

                                <td >{index + 1}</td>
                                <td >{item.codi}</td>
                                <td>{item.nombre}</td>
                                <td>{item.rif}</td>
                                <td>{item.numero}</td>
                                <td>{item.codcpc}</td>
                                <td>{item.contribuyente}</td>
                                <td>{item.patente}</td>
                                <td>{item.patenteclave}</td>
                                <td>pendiente</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            <div className="d-flex formulario mt-4 justify-content-around">
                <div className='Datos col-md-3'>
                    <div className=' row '>
                        <p className='col-sm-5'>Codigo</p>
                        <input id='cod' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Nombre</p>
                        <input id='Nom' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Representante</p>
                        <input id='Rep' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Rif</p>
                        <input id='rif' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Direccion</p>
                        <input id='dire' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Telefono</p>
                        <input id='telef' className='col-sm-6' type="number" name="" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Numero</p>
                        <input className='col-sm-6' type="number" name="" id="Num" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Sucursal</p>
                        <input className='col-sm-6' type="text" id='sucur' />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Contribuyente</p>
                        <select className='col-sm-6' onChange={manejarCambioTipo} name="" id="contri">
                            <option value="Especial">Especial</option>
                            <option value="Ordinario">Ordinario</option>
                        </select>
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Patente</p>
                        <select className='col-sm-6' onChange={manejarPatente} name="" id="paten">
                            <option value="Con Patente">Con Patente</option>
                            <option value="Sin Patente">Sin Patente</option>
                        </select>
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Registradora</p>
                        <select className='col-sm-6' onChange={manejarRegistradora} name="" id="regis">
                            <option value="Con Caja Registradora">Con Caja Registradora</option>
                            <option value="Sin Caja Registradora">Sin Caja Registradora</option>
                        </select>
                    </div>


                </div>
                <div className="Datos2 col-md-6">
                    <h5 className='row justify-content-around'>Portal Seniat</h5>
                    <div className="row justify-content-around">
                        <p className='col-sm-2'>Usuario</p>
                        <input id='sentUser' className='col-sm-4' type="text" />
                        <p className='col-sm-2'>Clave</p>
                        <input id='sentClav' className='col-sm-4' type="text" />
                    </div>
                    <div className="row tabla">
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th className="col">No</th>
                                    <th className="col">Codigo</th>
                                    <th className="col">Nombre Razon Social</th>
                                    <th className="col">RIF</th>
                                    <th className="col">Numero</th>
                                    <th className="col">Cod Cpc</th>
                                    <th className="col">Contribuyente</th>
                                    <th className="col">Patente</th>
                                    
                                    <th className="col">Clave Patente</th>
                                    <th className="col">Clasificacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (

                                    <tr key={index + 1}>

                                        <td >{index + 1}</td>
                                        <td >{item.codi}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.rif}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.codcpc}</td>
                                        <td>{item.contribuyente}</td>
                                        <td>{item.patente}</td>
                                        <td>{item.patenteclave}</td>
                                        <td>pendiente</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    <br />
                    <div className="row mt-3 justify-content-around">
                        <p className='col-sm-2'>Mes</p>
                        <input className='col-sm-4' type="date" />
                        <p className='col-sm-2'>Inpreso</p>
                        <input className='col-sm-4' type="text" />

                    </div>
                    <div className="row justify-content-around">
                        <input className='col-sm-2' type="button" value="Adicion" onClick={registrar} />
                        <input className='col-sm-2' type="button" value="Eliminar" />
                        <input className='col-sm-2' type="button" value="Refrescar" />
                    </div>

                </div>
                <div className="botones col-md-2">
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Adicion" className="col-md-5" />
                        <input type="button" value="Crear Data" className="col-md-5" />
                    </div>
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Consulta" className="col-md-5" />
                        <input type="button" value="Eliminar" className="col-md-5" />
                    </div>

                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Actualizar" className="col-md-5" />
                        <input type="button" value="Limpiar" className="col-md-5" />
                    </div>

                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Refrescar" className="col-md-5" />
                        <input type="button" value="Rastro" className="col-md-5" />
                    </div>
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Meses" className="col-md-5" />
                        <input type="button" value="Impreso" className="col-md-5" />
                    </div>
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Exel" className="col-md-5" />
                        <input type="button" value="Caja R" className="col-md-5" />
                    </div>

                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Borrador" className="col-md-5" />
                        <input type="button" value="Salir" className="col-md-5" />
                    </div>



                </div>

            </div>
        </div>
    )
}