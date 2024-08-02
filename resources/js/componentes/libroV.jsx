import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css'
export const LibroV = () => {
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
                            <th>Base Reducida</th>
                            <th>base 10</th>
                            <th>Impuesto Reducido</th>
                            <th>impuesto 10</th>
                            <th>Base General </th>
                            <th>Impuesto General </th>
                            <th>%10</th>
                            <th>%16</th>
                            <th>Usuario</th>
                            <th>Registradora</th>
                            <th>Por Retener</th>
                            <th>Retencion</th>
                            <th>Comprobante</th>
                            <th>Fecha comprobante</th>
                            <th>Fecha Registro</th>
                            <th>Factura polar</th>
                            <th>Auditoria</th>
                            <th>Por IGTF</th>
                            <th>Monto Sobre</th>
                            <th>Retenido IGTF</th>
                            <th>Dolar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="formulario mt-5  d-flex justify-content-center">
                <div className='Datos col-md-4'>
                    <div className=' row '>
                        <p className='col-sm-5'>N de Factura</p>
                        <input className='col-sm-6' type="number" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Hasta</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>control</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Doc Afectado</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha</p>
                        <input className='col-sm-6' type="date" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>RIF</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Cliente</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto Incluyendo ISV</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Exentas</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base Reducida 8%</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>IVA Reducida 8%</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base Electronica 10%</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV Electronica 10%</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base General %</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base General %</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV General %</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Caja Registradora</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Caja Registradora</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>% a Cancelar</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto a Cancelar</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Monto IGTF</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                </div>
                <div className='Datos2 col-md-4'>

                    <div className="row ">
                        <p className='row'>Documento</p>
                        <select className='col-md-6' name="" id="">
                            <option value="Factura">Factura</option>
                            <option value="Nota de Credito">Nota de Credito</option>
                            <option value="Nota de Debito">Nota de Debito</option>
                            <option value="Caja registradora">Caja registradora</option>
                        </select>
                    </div>
                    <div className="row mt-3 pb-3 ">
                        <p className='row'>Tipo de Factura Polar</p>
                        <select className='col-md-6' name="" id="">
                            <option value="Factura">Factura</option>
                            <option value="Nota de Credito">Nota de Credito</option>
                            <option value="Nota de Debito">Nota de Debito</option>
                            <option value="Caja registradora">Caja registradora</option>
                        </select>

                    </div>
                    <br /><br /><br /><br />
                    <div className="row mt-4 ">
                        <p className='col-sm-7'>Reducida</p>
                        <input className='col-sm-5' type="text" />
                    </div>
                    <div className="row ">
                        <p className='col-sm-7'>Electronica</p>
                        <input className='col-sm-5' type="text" />
                    </div>
                    <div className="row ">
                        <p className='col-sm-7  '>General</p>

                        <select className='col-5 align-self-start ' name="" id="">
                            <option value="16">16</option>
                            <option value="8">8</option>
                            <option value="31">31</option>
                            <option value="12">12</option>
                        </select>

                    </div>
                    <br />
                    <div className="row mt-2 ">

                        <p className='col-sm-7'>TASA</p>
                        <input className='col-sm-5' type="text" />
                    </div>
                    <div className="row  pb-5">

                        <p className='col-sm-7'>Monto $ IGTF</p>
                        <input className='col-sm-5' type="text" />
                    </div>
                    <div className="row  justify-content-between">
                        <button className='col-sm-5 '>Registradora 10%</button>
                        <button className='col-sm-5'>Soberanos</button>
                        
                    </div>
                    <div className="row mt-2 justify-content-between">
                    <button className='col-sm-5 '> digitales</button>
                    <button className='col-sm-5 ml-3'>Calcular Impuesto</button>
                    </div>
                    <div className="row mt-2  justify-content-between">
                        
                        <button className='col-sm-5'>Calcular base</button>
                        <button className='col-sm-5 mr-3'>Recuperar % Usado</button>
                    </div>
                    



                </div>
                <div className="botones col-md-3 ">
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
                        <input type="button" className='col-sm-5' value="Registradora" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Mes Antes" />

                    </div>
                    <div className="row justify-content-center mt-2">
                        <input type="button" className='col-sm-5' value="Referencia" />

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