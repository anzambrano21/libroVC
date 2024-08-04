import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/libroV.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos
const events = [
    {
      title: 'Evento importante',
      start: new Date(2024, 7, 10),
      end: new Date(2024, 7, 12),
    },]
export const Activar=()=>{
    const [date, setDate] = useState(new Date());
    return(
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
            </table>
            </div>
            <div className='d-flex formulario mt-4 justify-content-around'>
                <div className=" datos col-md-3">
                    <div className="row">
                        <p className='col-sm-5'>Codigo</p>
                        <input type="text" className="col-sm-6" />
                    </div>
                    <div className="row">
                    <p className='col-sm-5'>Numero</p>
                    <input type="text" className="col-sm-6" />
                    </div>
                    <div className="row">
                    <p className='col-sm-5'>RIF</p>
                    <input type="text" className="col-sm-6" />
                    </div>
                    <div className="row">
                    <p className='col-sm-5'>Cliente</p>
                    <input type="text" className="col-sm-6" />
                    </div>
                    <div className="row">
                    <p className='col-sm-5'>Contribuyente</p>
                    <input type="text" className="col-sm-6" />
                    </div>

                </div>
                <div className='datos2 col-md-4 '>
                    <div className="row  justify-content-around">
                        <Calendar onChange={setDate} value={date}/>
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
                        <input className="col-sm-5" type="button" value="Otras Fechas" />
                    </div>

                </div>

            </div>
        </div>
    )
}