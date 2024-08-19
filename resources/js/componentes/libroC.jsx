import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';
import axios from 'axios';
let res = await fetch('http://127.0.0.1:8000/api/LibCompra');
let myData = await res.json();
let data2 = myData;

export const LibroC = () => {
    const [FacturaPolar, setFacturaPolar] = useState('Especial');
    const [Documento, setDocumento] = useState('Con Patente');
    const [inpuestoNacional, setRegistradora] = useState('Con Caja Registradora');

    const manejarFacturaPolar = (e) => {
        setFacturaPolar(e.target.value);
    };
    const manejarDocumento = (e) => {
        setDocumento(e.target.value);
    };
    const manejarinpuestoNacional = (e) => {
        setRegistradora(e.target.value);
    };
    const registrar = async () => {
        let user = {
            Nf: document.getElementById('Nf').value,
            codF: document.getElementById('codF').value,
            docA: document.getElementById('docA').value,
            Fr: document.getElementById('Fr').value,
            Ff: document.getElementById('Ff').value,
            rif: document.getElementById('rif').value,
            cli: document.getElementById('cli').value,
            monisv: document.getElementById('monisv').value,
            Ex: document.getElementById('Ex').value,
            Bi: document.getElementById('Bi').value,
            isvi: document.getElementById('isvi').value,
            Bn: document.getElementById('Bn').value,
            isvN: document.getElementById('isvN').value
            //document.getElementById('Fp'),
            //document.getElementById('Doc'),
            //document.getElementById('In'),
        }



        const response = await fetch('http://127.0.0.1:8000/api/LibCompra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        console.log(response);


    }
    let indice = 0

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
        document.getElementById('Bi'),
        document.getElementById('isvi'),
        document.getElementById('Bn'),
        document.getElementById('isvN')
            //document.getElementById('Fp'),
            //document.getElementById('Doc'),
            //document.getElementById('In'),
        ]
        if (e.key === 'Enter') {
            // Cambiar el foco al siguiente campo de entrada
            // Puedes ajustar esto según tu estructura de componentes

            indice++
            if (indice > inputs.length - 1) {
                registrar()
                indice = 0;
            }
            inputs[indice].focus()

        }
    }
    function completar(index) {
        alert('hola')



    }

    return (
        <div>
            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Registro</th>
                            <th className="col">Doc Afectado</th>
                            <th className="col">Fecha</th>
                            <th className="col">Fecha Factura</th>
                            <th className="col">Rif</th>
                            <th className="col">Provedor</th>
                            <th className="col">Monto Incluye IVA</th>
                            <th className="col">Exenta</th>
                            <th className="col">Base Inportacion</th>
                            <th>IVA Inportacion</th>
                            <th>Base Nacional</th>
                            <th>IVA Nacional</th>
                            <th>Usuario</th>
                            <th>Porc Import</th>
                            <th>Porc Nacional</th>
                            <th>Retencion</th>
                            <th>Comprobante</th>
                            <th>Fecha Comprobante</th>
                            <th>Factura Polar</th>
                            <th>Fecha Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index + 1} onClick={() => completar(index)}>

                                <td >{index + 1}</td>
                                <td>{item.id}</td>
                                <td >{item.docafectado}</td>
                                <td>{item.created_at}</td>
                                <td>{item.fechafactur}</td>
                                <td>{item.rif}</td>
                                <td></td>
                                <td></td>
                                <td>{item.exentas}</td>
                                <td>{item.baseimportacion}</td>
                                <td></td>
                                <td>{item.basenacional}</td>

                                <td>pendiente</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
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
                        <input onKeyPress={handleKeyDown} id='docA' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Registro</p>
                        <input onKeyPress={handleKeyDown} id='Fr' className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Factura</p>
                        <input onKeyPress={handleKeyDown} id='Ff' className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>RIF</p>
                        <input onKeyPress={handleKeyDown} id='rif' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Cliente</p>
                        <input onKeyPress={handleKeyDown} id='cli' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto Incluyendo ISV</p>
                        <input onKeyPress={handleKeyDown} id='monisv' className='col-sm-6' type="number" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Exentas</p>
                        <input onKeyPress={handleKeyDown} id='Ex' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base Inportacion</p>
                        <input onKeyPress={handleKeyDown} id='Bi' className='col-sm-6' type="text" />

                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV Inportacion</p>
                        <input onKeyPress={handleKeyDown} id='isvi' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base Nacional</p>
                        <input onKeyPress={handleKeyDown} id='Bn' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV NAcional</p>
                        <input onKeyPress={handleKeyDown} id='isvN' className='col-sm-6' type="text" />
                    </div>
                </div>
                <div className="Datos col-md-3 mr-5">
                    <div className="row justify-content-center">
                        <p className='row justify-content-center'>Factura Polar</p>
                        <select onChange={manejarFacturaPolar} className='col-md-6 ' name="" id="Fp">
                            <option value="Cervesa">Cervesa</option>
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
                        <select onChange={manejarDocumento} className='col-md-6' name="" id="Doc">
                            <option value="Cervesa">Factura</option>
                            <option value="Harina">Nota de Credito</option>
                            <option value="Ketchup">Nota de Devito</option>

                        </select>
                    </div>
                    <div className="row mt-3 justify-content-center ">
                        <p className='row justify-content-center'>Impuesto Nacional</p>
                        <select onChange={manejarinpuestoNacional} className='col-md-6' name="" id="In">
                            <option value="16">16</option>
                            <option value="8">8</option>
                            <option value="31">31</option>
                            <option value="0">12</option>
                        </select>
                    </div>
                    <br /> <br />
                    <div className="row mt-2 justify-content-between ">
                        <input className='col-md-5' type="button" value="Recuperar %" />
                        <input className='col-md-5' type="button" value="Soberanos" />
                    </div>

                    <div className="row mt-2  justify-content-between">
                        <input className='col-md-5' type="button" value="Digitales" />
                        <input className='col-md-5' type="button" value="Calcular Base" />
                    </div>

                </div>
                <div className="botones col-md-3">
                    <div className="row justify-content-center ">
                        <input type="button" className='col-sm-5 ' value="Incluir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Consultar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Eliminar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Modificar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Totales" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Cliente" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir R" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Mes Antes" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Refrescar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Exel" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Salir" />

                    </div>
                </div>

            </div>
        </div>
    )
}