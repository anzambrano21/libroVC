import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import '../../css/libroV.css';
import '../../css/vistastotales.css';
import { Exaplecontect } from "../context/contexto"


export const LibroV = () => {
    const example = useContext(Exaplecontect)
    
    

    const [data2, setdatos] = useState([]);
    const [ban, setban] = useState(false);
    const [ban2, setban2] = useState(false);
    const [habili, sethabili] = useState(true);
    const consulta = async () => {
        try {
            console.log(example.datos);
            let datos = {
                cidi: example.datos.codi,
                fecha1: example.datos.fech1,
                fecha2: example.datos.fech2,
                sucursal:example.datos.sucursal,
                

            }
            const queryString = new URLSearchParams(datos).toString();
            let reponse = await axios.get(`http://contaduria.com/api/libVR?${queryString}`)
            console.log(reponse.data);
            
            setdatos(reponse.data)


        } catch (error) {

        }

    }



    useEffect(() => {
        document.title = 'Libro de Venta';
        consulta();

    }, []);
    let ivae = 0;
    const registrar = async () => {
        let user = {
            Nf: document.getElementById('Nf').value,
            Hast: document.getElementById('Hast').value,
            Con: document.getElementById("Con").value,
            DocA: document.getElementById('docA').value,
            Ff: document.getElementById('Ff').value,
            Fr: document.getElementById('Fr').value,
            rif: document.getElementById('rif').value,
            cli: example.datos.codi,
            User: example.datos.user,
            sucursal:example.datos.sucursal,
            MonIsv: document.getElementById('monisv').value,
            Ex: document.getElementById('Ex').value,
            Bg: document.getElementById('Bg').value,
            isvg: document.getElementById('isvg').value,
            CajaR: document.getElementById('CajaR').value,
            ivaex: ivae,
            Moncan: document.getElementById('MonCan').value,
            MonIGTF: document.getElementById('MonIGTF').value,
            por: document.getElementById('porcen').value,
            Facp: document.getElementById('FacPol').value,
            Doc: document.getElementById('Documento').value,
            mondol: document.getElementById('monto$').value,
            tasa: document.getElementById('tasa').value

        }
        try {
            const response = await fetch('http://contaduria.com/api/LibVenta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            alert("Factura Registrada")

        } catch (error) {
            alert(error)
        }
        location.reload();


    }
    let indice = 0
    let ide = 0
    const handleKeyDown = (e) => {
        let inputs = [document.getElementById('Nf'),
        document.getElementById('Hast'),
        document.getElementById("Con"),
        document.getElementById('docA'),
        document.getElementById("Ff"),
        document.getElementById('Fr'),
        document.getElementById('rif'),
        document.getElementById('cli'),
        document.getElementById('monisv'),
        document.getElementById('Ex'),
        document.getElementById('CajaR'),
        document.getElementById('MonCan'),
        document.getElementById('tasa'),
        document.getElementById('monto$'),
        document.getElementById('MonIGTF'),
        ]
   
        
        if (e.key === 'Enter') {
            
            
            // Cambiar el foco al siguiente campo de entrada
            // Puedes ajustar esto según tu estructura de componentes
            if(document.getElementById('docA').value!="" && document.activeElement == document.getElementById('docA')){
                NotaCD()
            }
            
            ide++
            if (ide > inputs.length - 1) {
                registrar()
            }
            inputs[ide].focus()

        }
    }
    const NotaCD=()=>{
        if (document.getElementById('Nf').value!=""){
            let NumF=data2.filter(cliente => cliente.numfactur.includes(document.getElementById('docA').value))

            console.log(NumF);
            
            
            if (NumF){
                if(document.getElementById("Documento").value=="Nota de Credito"){
                    document.getElementById('monisv').value= parseFloat(document.getElementById('monisv').value)-parseFloat(NumF[0].montoimputotal)

                }else if(document.getElementById("Documento").value=="Nota de Debito"){
                    document.getElementById('monisv').value= parseFloat(NumF[0].montoimputotal)+parseFloat(document.getElementById('monisv').value)
                }
                
                montoISV()
            }

        }
    }
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
    const Modificar = async () => {
        let user = {
            Nf: document.getElementById('Nf').value,
            Hast: document.getElementById('Hast').value,
            Con: document.getElementById("Con").value,
            DocA: document.getElementById('docA').value,
            Ff: document.getElementById('Ff').value,
            Fr: document.getElementById('Fr').value,
            rif: document.getElementById('rif').value,
            cli: example.datos.codi,
            User: example.datos.user,
            MonIsv: document.getElementById('monisv').value,
            Ex: document.getElementById('Ex').value,
            Bg: document.getElementById('Bg').value,
            isvg: document.getElementById('isvg').value,
            CajaR: document.getElementById('CajaR').value,
            ivaex: ivae,
            Moncan: document.getElementById('MonCan').value,
            MonIGTF: document.getElementById('MonIGTF').value,
            por: document.getElementById('porcen').value,
            Facp: document.getElementById('FacPol').value,
            Doc: document.getElementById('Documento').value,
            mondol: document.getElementById('monto$').value,
            tasa: document.getElementById('tasa').value,
        }
        const response = await fetch(`http://contaduria.com/api/LibVenta/${indice}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        indice = null
        console.log(1);

    }
    function completar(index) {
        indice = data2[index].id
        document.getElementById('Nf').value = data2[index].numfactur
        document.getElementById('Hast').value = data2[index].hasta
        document.getElementById('Con').value = data2[index].control
        document.getElementById('docA').value = data2[index].docafecta
        document.getElementById('Fr').value = data2[index].fecharegistro
        document.getElementById('Ff').value = data2[index].fechafactur
        document.getElementById('rif').value = data2[index].rif
        document.getElementById('monisv').value = data2[index].montoimputotal
        document.getElementById('Ex').value = data2[index].basee
        document.getElementById('Bg').value = data2[index].basenacional
        document.getElementById('isvg').value = data2[index].impunacional
        document.getElementById('CajaR').value = data2[index].registradora
        document.getElementById('FacPol').value = data2[index].docpolar1
        document.getElementById('Documento').value = data2[index].documento
        document.getElementById('porcen').value = data2[index].porcentaje
        document.getElementById('MonCan').value = data2[index].Impuesto
        document.getElementById('MonIGTF').value = data2[index].igtfmontosobre
        document.getElementById('monto$').value = data2[index].igtfdolares

    }
    const imprimir = async () => {

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
    const eliminar = async () => {
        axios.delete(`http://contaduria.com/api/LibVenta/${indice}`)
        indice = null
    }
    const Reten = () => {
        setban(!ban)
 

    }
    const totales=()=>{
        setban2(!ban2)
    }
    const DocumentoAfec = (event) => {


        if (event.target.value == "Nota de Credito" || event.target.value == "Nota de Debito") {
            
            sethabili(false)
            
            return
        }
        document.getElementById("docA").value=""
        sethabili(true)

    }

    return (
        <div>

            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Hasta</th>
                            <th className="col">Control</th>
                            <th className="col">Fecha de Registro</th>
                            <th className="col">Documento</th>
                            <th className="col">Doc Afectado</th>
                            <th className="col">Rif</th>
                            <th className="col">Cliente</th>
                            <th className="col">Monto IVA</th>
                            <th className="col">Exenta</th>
                            <th>Base General </th>
                            <th>Impuesto General </th>
                            <th>Porcentaje</th>

                            <th>Usuario</th>
                            <th>Registradora</th>
                            <th>Por Retener</th>
                            <th>Retencion</th>
                            <th>Comprobante</th>
                            <th>Fecha comprobante</th>
                            <th>Fecha Factura</th>
                            <th>Factura polar</th>
                            <th>Auditoria</th>
                            <th>Por IGTF</th>
                            <th>Monto Sobre</th>
                            <th>Retenido IGTF</th>
                            <th>Dolar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data2.map((item, index) => (
                            <tr key={index} onClick={() => completar(index)}>
                                <td>{index}</td>
                                <td>{item.hasta}</td>
                                <td>{item.control}</td>
                                <td>{item.fecharegistro}</td>
                                <td>{item.documento}</td>
                                <td>{item.docafecta}</td>
                                <td>{item.rif}</td>
                                <td>{example.datos.clien}</td>
                                <td>{item.montoimputotal}</td>
                                <td>{item.basee}</td>
                                <td>{item.basenacional}</td>
                                <td>{item.impunacional}</td>
                                <td>{item.impunacional}</td>
                                <td>{item.porcentaje}</td>

                                <td>{item.registradora}</td>
                                <td>{ }</td>
                                <td>{ }</td>
                                <td>{ }</td>
                                <td>{ }</td>
                                <td>{item.fechafactur}</td>
                                <td>{item.docpolar1}</td>
                                <td>{ }</td>
                                <td>{ }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`Datos3 RetenV ${ban ? '' : "None"} `}>
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

            </div>
            <div className={` totales ${ban2 ? '' : "None"} `}>
                <table className="totales-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Libro Compras del Mes:</td>
                            <td>10/2024</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Monto Incluyen Impuesto:</td>
                            <td>562,471.23</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Exento 1:</td>
                            <td>300,985.05</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Exento 2:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Exento 3:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Base Importación:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Impuesto Importación:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Base Nacional 8:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Impuesto Nacional 8:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Base Nacional 16:</td>
                            <td>225,419.12</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Impuesto Nacional 16:</td>
                            <td>36,067.06</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Base Nacional 12:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Impuesto Nacional 12:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Base Nacional 9:</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button className="accept-button" onClick={totales}>Aceptar</button>
            </div>
            <div className="formulario mt-5  d-flex justify-content-center">
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
                        <input onKeyPress={handleKeyDown} id='docA' disabled={habili} className='col-sm-6' type="text" />
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
                        <p className='col-sm-5'>RIF</p>
                        <input onKeyPress={handleKeyDown} id='rif' className='col-sm-6' type="text" />
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

                    <div className="row ">
                        <p className='col-sm-7'>Documento</p>
                        <select className='col-5 align-self-start' onChange={DocumentoAfec} name="" id="Documento">
                            <option value="Factura">Factura</option>
                            <option value="Nota de Credito">Nota de Credito</option>
                            <option value="Nota de Debito">Nota de Debito</option>
                            <option value="Caja registradora">Caja registradora</option>
                        </select>
                    </div>
                    <div className="row mt-3 pb-3 ">
                        <p className='col-sm-7'>Tipo de Factura Polar</p>
                        <select className='col-5 align-self-start' name="" id="FacPol">
                            <option value="nada"></option>
                            <option value="Cervesa">Cerveza</option>
                            <option value="Harina">Harina</option>
                            <option value="Ketchup">Ketchup</option>
                            <option value="P&G">P&G</option>
                            <option value="Normal">Normal</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Detergente">Detergente</option>
                        </select>

                    </div>

                    <div className="row ">
                        <p className='col-sm-7  '>Porcentaje</p>

                        <select className='col-5 align-self-start' onChange={montoISV} name="" id="porcen">
                            <option value="16">16</option>
                            <option value="10">10</option>

                            <option value="8">8</option>
                            <option value="21">21</option>
                            <option value="12">12</option>
                        </select>

                    </div>

                    <div className="row  ">

                        <p className='col-sm-7'>TASA</p>
                        <input onKeyPress={handleKeyDown} className='col-sm-5' id='tasa' type="text" />
                    </div>
                    <div className="row  ">

                        <p className='col-sm-7'>Monto $ IGTF</p>
                        <input onKeyPress={handleKeyDown} className='col-sm-5' id='monto$' type="text" />
                    </div>
                    <div className=' row  pb-4'>
                        <p className='col-sm-7'>Monto IGTF</p>
                        <input onKeyPress={handleKeyDown} id='MonIGTF' className='col-sm-5' type="text" />
                    </div>
                    <div className="row mt-2 justify-content-between">
                        <button className='col-sm-5 ml-3'>Calcular Impuesto</button>
                        <button className='col-sm-5'>Calcular base</button>
                    </div>





                </div>
                <div className="botones col-md-3 ">
                    <div className="row justify-content-center ">
                        <input type="button" onClick={registrar} className='col-sm-5 ' value="Incluir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Consultar" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Eliminar" onClick={eliminar} />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Modificar" onClick={Modificar} />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Totales"  onClick={totales}/>

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Cliente" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Registradora" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Mes Antes" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Referencia" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input onClick={imprimir} type="button" className='col-sm-5' value="Libro V" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Salir" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="retencion" onClick={Reten} />

                    </div>
                </div>
            </div>

        </div>
    )
}