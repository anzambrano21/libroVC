import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';
import axios from 'axios';
import Select from 'react-select';

export const Cliente = () => {
    const [data, setData] = useState(null);
    const [dataT, setDataT] = useState(null);
    const [tipoContribuyente, setTipoContribuyente] = useState('Especial');
    const [tipoPatente, setTipoPatente] = useState('Con Patente');
    const [tipoRegistradora, setRegistradora] = useState('Con Caja Registradora');
    const [loading, setLoading] = useState(true);

    const [ban, setban] = useState(false);
    const [indice, setIndice] = useState(null);
    const [indice2, setIndice2] = useState(null);
    const [sucursal, setsucursal] = useState([]);
    useEffect(() => {
        document.title = 'Registro de Cliente';
        const fetchData = async () => {
            try {
                let res = await fetch('http://127.0.0.1:8000/api/cliente');
                let myData = await res.json();
                setData(myData);
                setDataT(myData);
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


    const buscarCliente = (e) => {
        if (e.target.value == '') {
            console.log(e.target.value == '');

            setData(dataT)
            return
        }


        setData(dataT.filter(dataT => dataT.codi === e.target.value))
    };



    function completar(index) {
        

        setIndice(data[index]['codi']) 
        document.getElementById('cod').value = data[index]['codi']
        document.getElementById('Nom').value = data[index]['nombre']
        document.getElementById('Rep').value = data[index]['representante']
        document.getElementById('rif').value = data[index]['rif']

        document.getElementById('dire').value = data[index]['direccion']
        document.getElementById('telef').value = data[index]['telefono']
        document.getElementById('Num').value = data[index]['numero']

        document.getElementById('paten').value = data[index]['patente']
        document.getElementById('regis').value = data[index]['cajaregistradora']
        document.getElementById('contri').value = data[index]['contribuyente']



    }
    function completar2(index) {
        setIndice2(sucursal[index]["codigosucursal"])
        document.getElementById('NomSucur').value = sucursal[index]['nombresucursal']
    }
    const registrar = async () => {
        console.log(indice);

        if (indice != null) {
            let user = {
                codi: document.getElementById('cod').value,
                nom: document.getElementById('Nom').value,
                rep: document.getElementById('Rep').value,
                rif: document.getElementById('rif').value,

                dire: document.getElementById('dire').value,
                telef: document.getElementById('telef').value,
                num: document.getElementById('Num').value,


                con: tipoContribuyente,
                paten: tipoPatente,
                regis: tipoRegistradora,

            }
            let response = await axios.put(`http://127.0.0.1:8000/api/cliente/${document.getElementById('cod').value}`, user)
            console.log(response);
            return
        }
        let user = {
            codi: document.getElementById('cod').value,
            nom: document.getElementById('Nom').value,
            rep: document.getElementById('Rep').value,
            rif: document.getElementById('rif').value,

            dire: document.getElementById('dire').value,
            telef: document.getElementById('telef').value,
            num: document.getElementById('Num').value,


            con: tipoContribuyente,
            paten: tipoPatente,
            regis: tipoRegistradora,

        }
        let response = await axios.post('http://127.0.0.1:8000/api/cliente', user)
        console.log(response);
        alert("Cliente Registrado")
        limpieza()

    }
    const eliminar = async () => {
        let response = await axios.delete(`http://127.0.0.1:8000/api/cliente/${indice}`)
        console.log(response);
    }
    const Sucursal= async ()=>{
        if(indice!=null){
            setban(!ban)
            let response = await axios.get  (`http://127.0.0.1:8000/api/sucursal/${indice}`)
            setsucursal(response.data)
        }
        
    }
    function limpieza() {
        indice=null
        document.getElementById('cod').value = null
        document.getElementById('Nom').value = null
        document.getElementById('Rep').value = null
        document.getElementById('rif').value = null

        document.getElementById('dire').value = null

    }
    const addSucursal = async ()=>{
        if(indice!=null){
            let sucur={
                nomSucur: document.getElementById("NomSucur").value,
                codi: document.getElementById('cod').value,

            }
            setban(!ban)
            let response = await axios.post(`http://127.0.0.1:8000/api/sucursal`,sucur)
            setsucursal(response.data)
        }
    }
    const deletsucursal= async ()=>{
        if(indice2!=null){
            let sucur={
                nomSucur: document.getElementById("NomSucur").value,
                codi: document.getElementById('cod').value,

            }
            setban(!ban)
            let response = await axios.put(`http://127.0.0.1:8000/api/sucursal/${indice2}`,sucur)
            
        }
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
            <div className={`Datos3 RetenV ${ban ? '' : "None"} `}>
            <div className="tabla2">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">Nombre</th>
                            <th className="col">Codigo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sucursal.map((item, index) => (

                            <tr key={index + 1} onClick={() => completar2(index)}>

                                <td >{item.nombresucursal}</td>
                                <td >{item.codigosucursal}</td>

                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

                    
                <div className="row">
                    <p className='col-sm-5'>Nombre Sucursal</p>
                    <input id='NomSucur' className='col-sm-6' type="text" />
                </div>
                <div className="row justify-content-around mb-3">
                    <input type="button" className="col-md-5" value="Adicionar" onClick={addSucursal} />
                    <input type="button" className="col-md-5" value="Eliminar" onClick={deletsucursal}/>
                </div>

            </div>
            <div className="d-flex formulario mt-4 justify-content-around">
                <div className='Datos col-md-3'>
                    <div className=' row '>
                        <p className='col-sm-5'>Codigo</p>
                        <input id='cod' className='col-sm-6' type="text" onChange={buscarCliente} />
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
                        <input className='col-sm-2' type="button" value="Adicion" />
                        <input className='col-sm-2' type="button" value="Eliminar" />
                        <input className='col-sm-2' type="button" value="Refrescar" />
                    </div>

                </div>
                <div className="botones col-md-2">
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Adicion" className="col-md-5" onClick={registrar} />
                        <input type="button" value="Crear Data" className="col-md-5" />
                    </div>
                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Consulta" className="col-md-5" />
                        <input type="button" value="Eliminar" className="col-md-5" onClick={eliminar} />
                    </div>

                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Actualizar" className="col-md-5" />
                        <input type="button" value="Limpiar" className="col-md-5" />
                    </div>

                    <div className="row justify-content-around mb-3">
                        <input type="button" value="Añadir Sucursal" className="col-md-5" onClick={Sucursal}/>
                        <input type="button" value="Impreso" className="col-md-5" />
                    </div>






                </div>

            </div>
        </div>
    )
}