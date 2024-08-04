import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';

export const Cliente = () => {
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
                            <th className="col">No Patente</th>
                            <th className="col">Clave Patente</th>
                            <th className="col">Clasificacion</th>
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
            <div className="d-flex formulario mt-4 justify-content-around">
                <div className='Datos col-md-3'>
                    <div className=' row '>
                        <p className='col-sm-5'>Codigo</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Nombre</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Representante</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Rif</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Direccion</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Telefono</p>
                        <input className='col-sm-6' type="number" name="" id="" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Numero</p>
                        <input className='col-sm-6' type="number" name="" id="" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Sucursal</p>
                        <input className='col-sm-6' type="text" />
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Contribuyente</p>
                        <select className='col-sm-6' name="" id="">
                            <option value="Especial">Especial</option>
                            <option value="Ordinario">Ordinario</option>
                        </select>
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Patente</p>
                        <select className='col-sm-6' name="" id="">
                            <option value="Con Patente">Con Patente</option>
                            <option value="Sin Patente">Sin Patente</option>
                        </select>
                    </div>
                    <div className=' row '>
                        <p className='col-sm-5'>Registradora</p>
                        <select className='col-sm-6' name="" id="">
                            <option value="Con Caja Registradora">Con Caja Registradora</option>
                            <option value="Sin Caja Registradora">Sin Caja Registradora</option>
                        </select>
                    </div>


                </div>
                <div className="Datos2 col-md-6">
                    <h5 className='row justify-content-around'>Portal Seniat</h5>
                    <div className="row justify-content-around">
                        <p className='col-sm-2'>Usuario</p>
                        <input className='col-sm-4' type="text" />
                        <p className='col-sm-2'>Clave</p>
                        <input className='col-sm-4' type="text" />
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
                                    <th className="col">No Patente</th>
                                    <th className="col">Clave Patente</th>
                                    <th className="col">Clasificacion</th>
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