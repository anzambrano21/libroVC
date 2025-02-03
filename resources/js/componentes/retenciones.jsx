import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
//import '../../css/libroV.css';
import { Exaplecontect } from "../context/contexto";


export const RetenC = () => {
    const example = useContext(Exaplecontect)
    console.log(example);

    const [data2, setdatos] = useState([]);
    const consulta = async () => {
        try {
            let datos = {
                cidi: example.datos.codi,
                fecha1: example.datos.fech1,
                fecha2: example.datos.fech2,


            }
            const queryString = new URLSearchParams(datos).toString();
            let reponse = await axios.get(`http://contaduria.com/api/libVR?${queryString}`)
            console.log(reponse);
            setdatos(reponse.data)


        } catch (error) {

        }

    }
    useEffect(() => {
        document.title = 'Retenciones';
        consulta();

    }, []);
    const montoISV = (event) => {
        if (document.getElementById('monisv').value !== null) {
            document.getElementById('isvg').value = document.getElementById('monisv').value * parseInt(document.getElementById("porcen").value) / 100;
            document.getElementById('Bg').value = document.getElementById('monisv').value - (document.getElementById('monisv').value * parseInt(document.getElementById("porcen").value) / 100);
            document.getElementById('MonCan').value = document.getElementById('isvg').value - ivae
        }
    }
    const exentas = () => {
        ivae = document.getElementById('Ex').value * 0.16;
        document.getElementById('MonCan').value = document.getElementById('isvg').value - ivae
    }
    let indi = null;

    function completar(index) {
        indi = data2[index].id
        document.getElementById('Nf').value = data2[index].numfactur
        document.getElementById('Hast').value = data2[index].hasta
        document.getElementById('Con').value = data2[index].control
        document.getElementById('docA').value = data2[index].docafecta
        document.getElementById('Fr').value = data2[index].fecharegistro
        document.getElementById('Ff').value = data2[index].fechafactur
        document.getElementById('RIF').value = data2[index].rif
        document.getElementById('monisv').value = data2[index].montoimputotal
        document.getElementById('Ex').value = data2[index].basee
        document.getElementById('Bg').value = data2[index].basenacional
        document.getElementById('isvg').value = data2[index].impunacional
        document.getElementById('CajaR').value = data2[index].registradora
        document.getElementById('MonCan').value = data2[index].Impuesto
        document.getElementById('Ntf').value = data2[index].retencion
        document.getElementById('FRR').value = data2[index].registrofecha
        document.getElementById('Compro').value = data2[index].comprobante
        document.getElementById('FComp').value = data2[index].comprofecha
        document.getElementById('porReten').value = data2[index].poreten
        document.getElementById('Reten').value = data2[index].retenmonto
    }
    const registrar = async () => {
        let user = {
            num: document.getElementById('Ntf').value,
            RIF: document.getElementById('RIF').value,
            FechaR: document.getElementById('FRR').value,
            compro: document.getElementById('Compro').value,
            fechacom: document.getElementById('FComp').value,
            porReten: document.getElementById('porReten').value,
            reten: document.getElementById('Reten').value
        }

        const response = await axios.put(`http://contaduria.com/api/Creten/${indi}`, user);
        console.log(response);
        indi != null


    }
    let indice = 0
    const handleKeyDown = (e) => {
        let inputs = [
            document.getElementById('Nf'),
            document.getElementById('Hast'),
            document.getElementById("Con"),
            document.getElementById("Ff"),
            document.getElementById('Fr'),
            document.getElementById('cli'),
            document.getElementById('monisv'),
            document.getElementById('Ex'),
            document.getElementById('CajaR'),
            document.getElementById('MonCan'),
            document.getElementById('Ntf'),
            document.getElementById('RIF'),
            document.getElementById('FRR'),
            document.getElementById("Compro"),
            document.getElementById("FComp"),
            document.getElementById("porReten"),
            document.getElementById("Reten"),
        ]
        if (e.key === 'Enter') {
            // Cambiar el foco al siguiente campo de entrada
            // Puedes ajustar esto según tu estructura de componentes

            indice++
            if (indice > inputs.length - 1 && indi != null) {

                registrar()
                indice = 0;
            }
            inputs[indice].focus()

        }
    }

    return (
        <div>
            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Registro</th>
                            <th className="col">Fecha</th>
                            <th className="col">Cliente</th>
                            <th className="col">Monto con IVA</th>
                            <th className="col">Exentas</th>
                            <th className="col">Base Reducidas</th>
                            <th className="col">Impuesto Reducido</th>


                            <th className="col">Usuario</th>
                            <th className="col">Registradora</th>
                            <th className="col">Por Reter</th>
                            <th className="col">Retencion</th>
                            <th className="col">Comprovante</th>
                            <th className="col">Fecha Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index} onClick={() => completar(index)}>
                                <td>{index}</td>
                                <td>{item.hasta}</td>

                                <td>{item.fecharegistro}</td>
                                <td>{example.datos.clien}</td>
                                <td>{item.montoimputotal}</td>
                                <td>{item.basee}</td>
                                <td>{item.basenacional}</td>
                                <td>{item.impunacional}</td>
                                <td>{item.usuario}</td>
                                <td>{item.registradora}</td>
                                <td>{item.poreten}</td>
                                <td>{item.retenmonto}</td>
                                <td>{item.comprobante}</td>
                                <td>{item.registrofecha}</td>


                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
            <div className="formulario mt-5  d-flex justify-content-around">

                <div className='Datos col-md-4'>
                    <div className=' row '>
                        <p className='col-sm-5'>N de Factura</p>
                        <input onKeyPress={handleKeyDown} id='Nf' className='col-sm-6' type="number" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Hasta</p>
                        <input onKeyPress={handleKeyDown} id='Hast' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>control</p>
                        <input onKeyPress={handleKeyDown} id='Con' defaultValue={example.datos.codi} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Doc Afectado</p>
                        <input onKeyPress={handleKeyDown} id='docA' defaultValue={new Date().toLocaleDateString('es-VE') + '/' + example.datos.user + '/' + example.datos.clien} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha Factura</p>
                        <input onKeyPress={handleKeyDown} id='Ff' className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha Registro</p>
                        <input onKeyPress={handleKeyDown} id='Fr' defaultValue={new Date().toISOString().split('T')[0]} className='col-sm-6' type="date" />
                    </div>

                    <div className=' row '>
                        <p className='col-sm-5'>Cliente</p>
                        <input onKeyPress={handleKeyDown} id='cli' defaultValue={example.datos.clien} className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto Incluyendo ISV</p>
                        <input onKeyPress={handleKeyDown} onChange={montoISV} id='monisv' className='col-sm-6' type="number" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Exentas</p>
                        <input onKeyPress={handleKeyDown} id='Ex' onChange={exentas} className='col-sm-6' type="text" />
                    </div>

                    <div className=' row '>
                        <p className='col-sm-5'>Base General %</p>
                        <input onKeyPress={handleKeyDown} id='Bg' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV General %</p>
                        <input onKeyPress={handleKeyDown} id='isvg' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Caja Registradora</p>
                        <input onKeyPress={handleKeyDown} id='CajaR' className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto a Cancelar</p>
                        <input onKeyPress={handleKeyDown} id='MonCan' className='col-sm-6' type="text" />
                    </div>

                </div>
                <div className='Datos2 col-md-4'>
                    <div className="row">
                        <p className='col-sm-5'>Numero</p>
                        <input onKeyPress={handleKeyDown} id='Ntf' className='col-sm-6' type="number" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>RIF</p>
                        <input onKeyPress={handleKeyDown} id='RIF' className='col-sm-6' type="number" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Fecha Registro Retenciones</p>
                        <input onKeyPress={handleKeyDown} id='FRR' className='col-sm-6' type="date" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Comprovante</p>
                        <input onKeyPress={handleKeyDown} id='Compro' className='col-sm-6' type="text" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Fecha Comprobante</p>
                        <input onKeyPress={handleKeyDown} id='FComp' className='col-sm-6' type="date" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>% Retencion</p>
                        <input onKeyPress={handleKeyDown} id='porReten' className='col-sm-6' type="number" />
                    </div>
                    <div className="row">
                        <p className='col-sm-5'>Retencion</p>
                        <input onKeyPress={handleKeyDown} id='Reten' className='col-sm-6' type="number" />
                    </div>

                </div >
                <div className="botones col-md-3">
                    <div className="row justify-content-center ">
                        <input type="button" onClick={registrar} className='col-sm-5 ' value="Incluir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Consultar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Eliminar"  />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Modificar"  />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Totales" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir" />

                    </div>
                </div>
            </div>


        </div >
    )
}