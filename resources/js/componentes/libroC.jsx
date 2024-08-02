import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';

export const LibroC = () => {
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="d-flex formulario mt-4 justify-content-center">
                <div className="Datos col-md-4">
                    <div className=' row '>
                        <p className='col-sm-5'>N Factura</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Control de la Factura</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Doc Afectado</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Registro</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Fecha de Factura</p>
                        <input className='col-sm-6' type="text" />
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
                        <p className='col-sm-5'>Base Inportacion</p>
                        <input className='col-sm-6' type="text" />
                        
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV Inportacion</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Base Nacional</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>ISV NAcional</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                </div>
                <div className="Datos col-md-4">
                    <div className="row ">
                        <p className='row'>Factura Polar</p>
                        <select className='col-md-6' name="" id="">
                            <option value="Cervesa">Cervesa</option>
                            <option value="Harina">Harina</option>
                            <option value="Ketchup">Ketchup</option>
                            <option value="P&G">P&G</option>
                            <option value="Normal">Normal</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Detergente">Detergente</option>
                        </select>
                    </div>
                    <div className="row mt-3 ">
                        <p className='row'>Documento</p>
                        <select className='col-md-6' name="" id="">
                            <option value="Cervesa">Factura</option>
                            <option value="Harina">Nota de Credito</option>
                            <option value="Ketchup">Nota de Devito</option>

                        </select>
                    </div>
                    <div className="row mt-3  ">
                        <p className='row'>Impuesto Nacional</p>
                        <select className='col-md-6' name="" id="">
                            <option value="16">16</option>
                            <option value="8">8</option>
                            <option value="31">31</option>
                            <option value="0">12</option>
                        </select>
                    </div>
                    <br /> <br />
                    <div className="row mt-2 justify-content-between">
                        <input className='col-md-5' type="button" value="Recuperar %" />
                        <input className='col-md-5' type="button" value="Soberanos" />
                    </div>
                    
                    <div className="row mt-2  justify-content-between">
                        <input className='col-md-5' type="button" value="Digitales" />
                        <input className='col-md-5' type="button" value="Calcular Base" />
                    </div>
                    
                </div>
                <div className="botones col-md-3">
                <div className="row justify-content-end ">
                        <input type="button" className='col-sm-5 ' value="Incluir" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Consultar" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Eliminar" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Modificar" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Totales" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Cliente" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir R" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Imprimir" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Mes Antes" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Refrescar" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Exel" />

                    </div>
                    <div className="row justify-content-end mt-2">
                        <input type="button" className='col-sm-5' value="Salir" />

                    </div>
                </div>

            </div>
        </div>
    )
}