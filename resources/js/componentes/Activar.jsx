import React, { useState,useEffect,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import '../../css/libroV.css';
import axios from 'axios';
import { Exaplecontect } from "../context/contexto"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos
import dayjs from "dayjs"; // ES 2015

import Select from 'react-select';




export const Activar = () => {
    const [datos, setdatos] = useState(null);
    const [date, setdate] = useState(null);
    const [cliente, setcliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    
    useEffect(() => {
        document.title = 'Activcion de Cliente';
        const fetchData = async () => {
            try {
                let res = await fetch('http://contaduria.com/api/cliente');
                let myData = await res.json();
                setdatos(myData);
              } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                setLoading(false);
              }
          };
      
          fetchData();
      }, []); 
    const example = useContext(Exaplecontect)

    if (loading) {
        return <p>Cargando datos...</p>;
      }
   

    
    const formatDate = (date) => {
        return dayjs(date).format("DD/MM/YYYY");
      };

    const Optiones = async (clente) => {
        try {
            let res = await axios.get(`http://contaduria.com/api/sucursal/${clente}`)
            const data = res.data.map(item => ({
                value: item.codigosucursal,
                label: item.nombresucursal
              }));
            setoptionsucur(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        

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
                clien:cliente.nombre,
                sucursal:selectedOption
            } 
            example.setDatos(activado)
            
        }else{
            alert("Necesita un Cliente y Fechas para Activar")
            
            
        }
        
    }
    function completar(index) {
        
        Sucursal(datos[index].codi)
        setcliente(datos[index])
        
        document.getElementById("codi").value=datos[index].codi
        document.getElementById("numero").value=datos[index].numero
        document.getElementById("numero").value=datos[index].numero
        document.getElementById("rif").value=datos[index].rif
        document.getElementById("cliente").value=datos[index].nombre
        document.getElementById("contri").value=datos[index].contribuyente
        
    }

    const Mensual=()=>{
        let fechaA= new Date()
        fechaA.setDate(fechaA.getDate() - 29)
        setdate([fechaA,new Date()])
    }
    const Quinsenal=()=>{
        let fechaA= new Date()
        fechaA.setDate(fechaA.getDate() - 14)
        setdate([fechaA,new Date()])
    }
    const Semanal=()=>{
        let fechaA= new Date()
        fechaA.setDate(fechaA.getDate() - 6)
        setdate([fechaA,new Date()])
    }
    const Sucursal= async (codi)=>{
        if(codi!=null){
            
            let response = await axios.get  (`http://contaduria.com/api/sucursal/${codi}`)
            const data = response.data.map(item => ({
                value: item.codigosucursal,
                label: item.nombresucursal
            }));

            
            setOptions(data)


        }
        
    }
    const handleChange = (option) => { 
        setSelectedOption(option.value); 
        console.log('Opción seleccionada:', option); 
    };
    const imprimirC= async()=>{
        
        let datos={
            cidi:example.datos.codi,
            fecha1:example.datos.fech1,
            fecha2:example.datos.fech2,
            sucursal:example.datos.sucursal,
            hoja:"Compra"

        }
        console.log(datos);
        const queryString = new URLSearchParams(datos).toString();
        try {
            const response = await axios.get(`http://contaduria.com/export?${queryString}`, {
                responseType: 'blob', // Importante para manejar archivos binarios
            });
            
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'LibroCompra.xlsx'); // Nombre del archivo
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            alert('Error descargando el archivo:', error);
        }
        
         
    }
    const imprimirV = async () => {

        let datos = {
            cidi: example.datos.codi,
            fecha1: example.datos.fech1,
            fecha2: example.datos.fech2,
            sucursal:example.datos.sucursal,
            hoja: "Venta"
        }
        console.log(datos);
        const queryString = new URLSearchParams(datos).toString();
        try {
            const response = await axios.get(`http://contaduria.com/export?${queryString}`, {
                responseType: 'blob', // Importante para manejar archivos binarios
            });


            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'LibroVenta.xlsx'); // Nombre del archivo
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error descargando el archivo:', error);
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
                    <div className=' row '>
                        <p className='col-sm-4'>Sucursal</p>
                        <Select
                            options={options}
                            id='sucursal'
                            className='col-7 align-self-start'
                            placeholder="sucursal"
                            isClearable
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className='datos2 col-md-4 '>
                    <div className="row  justify-content-around">
                        <Calendar value={date} selectRange={true} onChange={setdate}  />
                    </div>
                    <h5 className='row  justify-content-around'>Fecha de Reporte</h5>
                    <div className="row justify-content-around">
                        <input className="col-sm-5" type="button" value="Mensual" onClick={Mensual} />
                        <input className="col-sm-5" type="button" value="Quincenal" onClick={Quinsenal} />
                    </div>
                    <div className="row justify-content-around">
                        <input className="col-sm-5" type="button" value="Semanal" onClick={Semanal} />
                        
                    </div>

                </div>
                <div className="botones col-md-3 ">
                    <div className="row justify-content-center ">
                        <input type="button" className='col-sm-5' onClick={Activar}  value="Activar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button"  className='col-sm-5' value="Rastro" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' onClick={Sucursal} value="Sucursales" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir-Ventas" onClick={imprimirV} />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir-Compras" onClick={imprimirC} />

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