import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import '../../css/libroV.css';
import axios from 'axios';
import { Exaplecontect } from "../context/contexto"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Alert } from 'bootstrap';
import '../../css/calcularbase.css'
import '../../css/LibroC.css'
export const LibroC = () => {

    const [data2, setdatos] = useState([]);
    const [ban, setban] = useState(false);
    const [habili, sethabili] = useState(true);
    const example = useContext(Exaplecontect)
    console.log(example.datos);

    const consulta = async () => {
        let datos = {
            cidi: example.datos.codi,
            fecha1: example.datos.fech1,
            fecha2: example.datos.fech2,
            sucursal: example.datos.sucursal,
        }


        const queryString = new URLSearchParams(datos).toString();
        try {

            let reponse = await axios.get(`http://contaduria.com/api/busCom?${queryString}`)
            console.log(reponse);
            setdatos(reponse.data)


        } catch (error) {
            alert(error)

        }


    }
    useEffect(() => {
        document.title = 'Libro de Compra';
        consulta()
    }, []);
    const registrar = async () => {


        if (('codi' in example.datos) && indice == null) {
            let user = {
                Nf: document.getElementById('Nf').value,
                codF: document.getElementById('codF').value,
                docA: document.getElementById('docA').value,
                Fr: document.getElementById('Fr').value,
                Ff: document.getElementById('Ff').value,
                rif: document.getElementById('rif').value,
                cli: example.datos.codi,
                sucursal: example.datos.sucursal,
                prov: document.getElementById('cli').value,
                monisv: document.getElementById('monisv').value,
                Ex: document.getElementById('Ex').value,
                Bi: document.getElementById('Bg').value,
                isvi: document.getElementById('Miva').value,
                Fp: document.getElementById('Fp').value,
                Doc: document.getElementById('Doc').value,
                ImN: document.getElementById('In').value,
            }


            try {
                const response = await axios.post('http://contaduria.com/api/LibCompra', user);


                alert("Factura Registrada")

            } catch (error) {
                alert(error)
            }
            //location.reload();


        } else {
            alert("necesitas Activar un cliente o tratas de registrar la misma Factura")
        }




    }
    let indice = null
    let ide = null

    const Modificar = async () => {
        let user = {
            Nf: document.getElementById('Nf').value,
            codF: document.getElementById('codF').value,
            docA: document.getElementById('docA').value,
            Fr: document.getElementById('Fr').value,
            Ff: document.getElementById('Ff').value,
            rif: document.getElementById('rif').value,
            cli: example.datos.codi,
            prov: document.getElementById('cli').value,
            monisv: document.getElementById('monisv').value,
            Ex: document.getElementById('Ex').value,
            Bi: document.getElementById('Bg').value,
            isvi: document.getElementById('Miva').value,
            Fp: document.getElementById('Fp').value,
            Doc: document.getElementById('Doc').value,
            ImN: document.getElementById('In').value,
        }
        const response = await fetch(`http://contaduria.com/api/LibCompra/${indice}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        indice = null
        alert("Factura Modificado")

    }
    const handleKeyDown = (e) => {
        let inputs = [document.getElementById('Nf'),
        document.getElementById('codF'),
        document.getElementById('docA'),
        document.getElementById('Fr'),
        document.getElementById('Ff'),
        document.getElementById('rif'),
        document.getElementById('cli'),
        document.getElementById('monisv'),
        document.getElementById('Ex'),
        document.getElementById('Bg'),
        document.getElementById('Miva')

        ]
        if (e.key === 'Enter') {
            // Cambiar el foco al siguiente campo de entrada
            // Puedes ajustar esto según tu estructura de componentes

            ide++
            if (ide > inputs.length - 1 && indice == null) {
                registrar()
                ide = 0;
            } else if (ide > inputs.length - 1 && indice != null) {
                Modificar()
                ide = 0;
            }
            inputs[ide].focus()

        }
    }
    function completar(index) {
        indice = data2[index].id
        document.getElementById('Nf').value = data2[index].numfactur
        document.getElementById('codF').value = data2[index].controlFac
        document.getElementById('docA').value = data2[index].docafectado
        document.getElementById('Fr').value = data2[index].fecharegistro
        document.getElementById('Ff').value = data2[index].fechafactur
        document.getElementById('rif').value = data2[index].rif
        document.getElementById('cli').value = data2[index].provedor
        document.getElementById('monisv').value = data2[index].montoimputotal
        document.getElementById('Ex').value = data2[index].exentas
        document.getElementById('Bg').value = data2[index].basegeneral
        document.getElementById('Miva').value = data2[index].MontoIva
        document.getElementById('Fp').value = data2[index].facPolar
        document.getElementById('Doc').value = data2[index].documento
        document.getElementById('In').value = data2[index].pornacional




    }
    const Eliminar = async () => {
        axios.delete(`http://contaduria.com/api/LibCompra/${indice}`)
        alert("Factura eliminado")
        indice = null


    }

    const imprimir = async () => {

        let datos = {
            cidi: example.datos.codi,
            fecha1: example.datos.fech1,
            fecha2: example.datos.fech2,
            sucursal:example.datos.sucursal,
            hoja: "Compra"

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

    function BaseGeneral() {
        let baseG = document.getElementById('Bg').value
        document.getElementById('monisv').value = baseG * (parseInt(document.getElementById('In').value) + 100) / 100
        document.getElementById('Miva').value = baseG * parseInt(document.getElementById('In').value) / 100




    }
    const DocumentoAfec = (event) => {


        if (event.target.value == "Nota de Credito" || event.target.value == "Nota de Debito") {

            sethabili(false)

            return
        }
        sethabili(true)

    }
    const calcularBase=()=>{
        setban(!ban)
    }
    const today = new Date().toISOString().split('T')[0];
    console.log(data2);
    return (
        <div className='col'>
            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Doc Afectado</th>
                            <th className="col">Fecha</th>
                            <th className="col">Fecha Factura</th>
                            <th className="col">Rif</th>
                            <th className="col">Provedor</th>
                            <th className="col">Monto Incluye IVA</th>
                            <th className="col">Exenta</th>
                            <th className="col">Base general</th>

                            <th>Monto Iva</th>
                            <th>Factura Polar</th>
                            <th>Documento</th>
                            <th>Impuesto Nacional</th>
                            <th>Usuario</th>
                            <th>Porc Nacional</th>
                            <th>Retencion</th>
                            <th>Comprobante</th>
                            <th>Fecha Comprobante</th>
                            <th>Factura Polar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index + 1} onClick={() => completar(index)}>

                                <td >{index + 1}</td>

                                <td >{item.docafectado}</td>
                                <td>{item.fecharegistro}</td>
                                <td>{item.fechafactur}</td>
                                <td>{item.rif}</td>
                                <td>{item.provedor}</td>
                                <td>{item.MontoIva}</td>
                                <td>{item.exentas}</td>
                                <td>{item.basegeneral}</td>

                                <td>{item.MontoIva}</td>
                                <td>{item.facPolar}</td>

                                <td>{item.documento}</td>
                                <td>{item.pornacional}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className={` dialog-container ${ban ? '' : 'None'}`}>
                <h2>Libro de Ventas</h2>
                <label htmlFor="factura">Introduzca la base de la factura:</label>
                <input type="text" id="factura" className="input-box"/>
                    <div className="button-container">
                        <button className="btn accept">Aceptar</button>
                        <button className="btn cancel" onClick={calcularBase}>Cancelar</button>
                    </div>
            </div>
            <div className="d-flex formulario mt-4 ml-5 justify-content-around">
                <div className="Datos col-md-4 ">
                    <div className=' row '>
                        <p className='col-sm-5'>N Factura</p>
                        <input id='Nf' onKeyPress={handleKeyDown} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Control de la Factura</p>
                        <input onKeyPress={handleKeyDown} id='codF' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Doc Afectado</p>
                        <input onKeyPress={handleKeyDown} id='docA' disabled={habili} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Registro</p>
                        <input onKeyPress={handleKeyDown} defaultValue={today} id='Fr' className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Factura</p>
                        <input onKeyPress={handleKeyDown} defaultValue={new Date().toISOString().split('T')[0]} id='Ff' className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>RIF</p>
                        <input onKeyPress={handleKeyDown} id='rif' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Proveedor</p>
                        <input onKeyPress={handleKeyDown} id='cli' defaultValue={example.datos.codi} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto Incluyendo ISV</p>
                        <input onKeyPress={handleKeyDown} id='monisv' className='col-sm-6' type="number" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Exentas</p>
                        <input onKeyPress={handleKeyDown} id='Ex' className='col-sm-6' type="text" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Base General</p>
                        <input onKeyPress={handleKeyDown} onChange={BaseGeneral} id='Bg' className='col-sm-6' type="number" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Monto Iva</p>
                        <input onKeyPress={handleKeyDown} onChange={BaseGeneral} id='Miva' className='col-sm-6' type="number" />
                    </div>

                </div>
                <div className="Datos col-md-3 mr-5">
                    <div className="row justify-content-center">
                        <p className='row justify-content-center'>Factura Polar</p>
                        <select className='col-md-6 ' name="" id="Fp">
                            <option value=""></option>
                            <option value="Cervesa">Cerveza</option>
                            <option value="Harina">Harina</option>
                            <option value="Ketchup">Ketchup</option>
                            <option value="P&G">P&G</option>
                            <option value="Normal">Normal</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Detergente">Detergente</option>
                        </select>
                    </div>
                    <div className="row mt-3 justify-content-center ">
                        <p className='row justify-content-center'>Documento</p>
                        <select className='col-md-6' name="" onChange={DocumentoAfec} id="Doc">
                            <option value="Factura">Factura</option>
                            <option value="Nota de Credito">Nota de Credito</option>
                            <option value="Nota de Devito">Nota de Devito</option>

                        </select>
                    </div>
                    <div className="row mt-3 justify-content-center ">
                        <p className='row justify-content-center'>Impuesto Nacional</p>
                        <select onChange={BaseGeneral} className='col-md-6' name="" id="In">
                            <option value="16">16</option>
                            <option value="8">8</option>
                            <option value="21">21</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <br /> <br />


                    <div className="row mt-2  justify-content-between">

                        <input className='col-md-5' type="button" value="Calcular Base" onClick={calcularBase} />
                    </div>

                </div>
                <div className="botones col-md-3">
                    <div className="row justify-content-center ">
                        <input onClick={registrar} type="button" className='col-sm-6 ' value="Incluir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-6' value="Consultar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" onClick={Eliminar} className='col-sm-6' value="Eliminar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" onClick={Modificar} className='col-sm-6' value="Modificar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-6' value="Totales" />

                    </div>

                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-6' onClick={imprimir} value="Libro C" />
                    </div>





                </div>

            </div>
        </div>
    )
}