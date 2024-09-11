import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import '../../css/libroV.css';
import { Exaplecontect } from "../context/contexto";

export const IGTF = () => {
    function imprimir() {

    }
    return (
        <div>
            <div className="tabla">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th className="col">No</th>
                            <th className="col">Registro</th>
                            <th className="col">Documento</th>
                            <th className="col">Control</th>
                            <th className="col">Doc Afectado</th>
                            <th className="col">Fecha</th>
                            <th className="col">Fecha Factura</th>
                            <th className="col">Rif</th>
                            <th className="col">Cliente</th>
                            <th className="col">Monto Incluyendo Iva</th>
                            <th className="col">Exenta</th>
                            <th className="col">Base Reducida</th>
                            <th className="col">Iva Reducido</th>
                            <th className="col">Base Nacional</th>
                            <th className="col">Iva Nacional</th>
                            <th className="col">Usuario</th>
                            <th className="col">Tasa Dolar</th>
                            <th className="col">Porc.IGTF</th>
                            <th className="col">Dolares</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>
            </div>
            <div className="formulario mt-5 d-flex justify-content-center">
                <div className="botones col">
                    <div className="col justify-content-center">
                        <input type="button" className=" col-sm-5 btn-grande" value="Incluir" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Consultar" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Eliminar" />
                    </div>
                </div>
                <div className="botones col">
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Modificar" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Totales" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Cliente" />
                    </div>
                </div>
                <div className="botones col">
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Registradora" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Mes Antes" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Referencia" />
                    </div>
                </div>
                <div className="botones col">
                    <div className="col justify-content-center mt-2">
                        <input onClick={imprimir} type="button" className=" col-sm-5 btn-grande" value="Libro V" />
                    </div>
                    <div className="col justify-content-center mt-2">
                        <input type="button" className=" col-sm-5 btn-grande" value="Salir" />
                    </div>
                </div>
            </div>

        </div>
    )
}
