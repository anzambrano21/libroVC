import React, { useState,useEffect,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';
import axios from 'axios';
import { Exaplecontect } from "../context/contexto"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos
import dayjs from "dayjs"; // ES 2015

let res = await fetch('http://127.0.0.1:8000/api/cliente');
let myData = await res.json();
let data2 = myData;


const events = [
    {
        title: 'Evento importante',
        start: new Date(2024, 7, 10),
        end: new Date(2024, 7, 12),
    },]
export const Activar = () => {
    useEffect(() => {
        document.title = 'Activcion de Cliente';
      }, []); 
    const example = useContext(Exaplecontect)
    console.log(example);
    
    const [datos, setdatos] = useState(data2);
    const [date, setDate] = useState(null);
    const [cliente, setcliente] = useState(null);
    
    const formatDate = (date) => {
        return dayjs(date).format("DD/MM/YYYY");
      };
    const buscar = async (band) => {
        let cliente = {
            codigo: document.getElementById('codi').value,
            numero: document.getElementById('numero').value,
            rif: document.getElementById('rif').value,
            cliente: document.getElementById('cliente').value,
            contri: document.getElementById('contri').value,
            ban:band
        }
        const response = await axios.post('http://127.0.0.1:8000/api/buscar', cliente)
        setdatos(response.data) 
        console.log(response);


    }
    const Activar= ()=>{
        if (cliente!=null && date!=null) {
            let activado={
                user:example.datos.user,
                home:example.datos.home,
                rol:example.datos.rol,
                fech1:formatDate(date[0]),
                fech2:formatDate(date[1]),
                codi:cliente.codi,
                clien:cliente.nombre
            } 
            example.setDatos(activado)
            
        }else{
            alert("Necesita un Cliente y Fechas para Activar")
            
            
        }
        
    }
    function completar(index) {
        console.log(cliente);
        
        setcliente(datos[index])
        document.getElementById("codi").value=datos[index].codi
        document.getElementById("numero").value=datos[index].numero
        document.getElementById("numero").value=datos[index].numero
        document.getElementById("rif").value=datos[index].rif
        document.getElementById("cliente").value=datos[index].nombre
        document.getElementById("contri").value=datos[index].contribuyente
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
                            <th className="col">Contribuyente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((item, index) => (
                            <tr onClick={()=>completar(index)} key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.codi }</td>
                                <td>{item.nombre}</td>
                                <td>{item.rif}</td>
                                <td>{item.telefono}</td>
                                <td>{item.contribuyente}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className='d-flex formulario mt-4 justify-content-around'>
                <div className=" datos col-md-3">
                    <div className="row">
                        <p className='col-sm-5'>Codigo</p>
                        <input type="text" className="col-sm-6" id='codi' />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Numero</p>
                        <input type="number" id='numero' className="col-sm-6" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>RIF</p>
                        <input type="number" id='rif' className="col-sm-6" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Cliente</p>
                        <input type="text" id='cliente' className="col-sm-6" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Contribuyente</p>
                        <select className='col-6 align-self-start' name="" id="contri">
                            <option value="vacio"></option>
                            <option value="Ordinario">Ordinadio</option>
                            <option value="Especial">Especial</option>
                        </select>
                    </div>

                </div>
                <div className='datos2 col-md-4 '>
                    <div className="row  justify-content-around">
                        <Calendar selectRange={true} onChange={setDate}  />
                    </div>
                    <h5 className='row  justify-content-around'>Fecha de Reporte</h5>
                    <div className="row">
                        <p className="col-sm-3">Inicial</p>
                        <input className="col-sm-3" type="date" name="" id="" />
                        <p className="col-sm-3">final</p>
                        <input className="col-sm-3" type="date" name="" id="" />
                    </div>
                    <div className="row justify-content-around">
                        <input className="col-sm-5" type="button" value="Mensual" />
                        <input className="col-sm-5" type="button" value="Quincenal" />
                    </div>
                    <div className="row justify-content-around">
                        <input className="col-sm-5" type="button" value="Semanal" />
                        
                    </div>

                </div>
                <div className="botones col-md-3 ">
                    <div className="row justify-content-center ">
                        <input type="button" className='col-sm-5' onClick={Activar}  value="Activar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" onClick={()=> buscar(false)} className='col-sm-5' value="Rastro" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' onClick={()=> buscar(true)} value="Sucursales" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir-Ventas" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir-Compras" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Status" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Totales" />

                    </div>
                </div>

            </div>
        </div>
    )
}