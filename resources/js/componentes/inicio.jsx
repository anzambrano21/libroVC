import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from 'react-router-dom';
import "../../css/inicio.css"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Exaplecontect } from "../context/contexto"


export const Inicio = () => {
    useEffect(() => {
        document.title = 'Inicio Secion';
    }, []);

    const example = useContext(Exaplecontect)

    /*if (Object.keys(example.datos).length>0){
        example.setDatos({})
        alert('Sesion Cerrada')
    }*/
    console.log(example);


    const iniciar = async () => {
        let user = document.getElementById("loginName").value;
        let pasw = document.getElementById("loginPassword").value;
        let usur = {
            email: user,
            password: pasw
        }
        example.setDatos(usur);
        let response = await axios.post('http://contaduria.com/api/login', usur)

        if (response.data.home === 'Login successful') {
            example.setDatos(response.data)
            // Redirige al usuario a la página deseada
            window.location.href = 'Activar';
        } else {
            alert("inicio de secion fallida");
        }




    }



    
        return (
            <div className="container1">


                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <div className="form">
                    <h3>OFICONTA</h3>

                    <label htmlFor="loginName">USUARIO</label>
                    <input type="text" placeholder="Usuario" id="loginName" />

                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" placeholder="Contraceña" id="loginPassword" />

                    <button onClick={iniciar}>Inicio de Sesion</button>


                </div>

            </div>
        );
    

}

export const Navega = () => {
    const location = useLocation();

    let estilo = {};
    let estilo2 = {};

    switch (location.pathname) {
        case '/inicio':
            estilo = { background: 'blue', color: 'white' };
            break;
        case '/registro':
            estilo2 = {
                background: 'blue',
                color: 'white'
            };
            break;
        default:

    }


    return (
        <div className="container">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-login" data-mdb-pill-init to="/inicio" role="tab"
                        aria-controls="pills-login" aria-selected="true" style={estilo}>Iniciar Secion</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/registro" role="tab"
                        aria-controls="pills-register" aria-selected="false" style={estilo2}>Registrarce</Link>
                </li>
            </ul>
        </div>
    );

}
export const Registro = () => {

    useEffect(() => {
        document.title = 'Registro';
    }, []);

    const example = useContext(Exaplecontect)
    console.log(example);

    const guardar = async () => {
        let user = document.getElementById("registerUsername").value;
        let emai = document.getElementById("registerEmail").value;
        let pasw1 = document.getElementById("registerPassword").value
        let pasw2 = document.getElementById("registerRepeatPassword").value
        let pswd
        let guar = {}
        let error = false
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (pasw1 === pasw2) {
            pswd = pasw1;
            if (!passwordRegex.test(pswd)) {
                error = true
                alert("La contraceña deve de tener por lomenos A a 9 @")
            } else {
                console.log("gol");

            }
        } else {
            error = true
        }
        if (!emailRegex.test(emai)) {
            error = true
            alert("El campo de correo tiene que ser valido ")
        }
        console.log(error);
        guar["nom"] = user
        guar["email"] = emai
        guar["password"] = pswd
        if (!error) {
            const response = await axios.post('https://redes/api/usuario', guar);
            let guar2 = {
                correo: emai
            }
            axios.post("https://redes/seguridad", guar2)

            //example.setDatos(guar)
            //window.location.href = "http://127.0.0.1:8000/registro/comprovar";  
        }



    }
    const Defaul = () => {
        return (
            <div className="container1">
                <Navega />
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">

                        <div className="text-center mb-3">
                            <p></p>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="registerUsername" maxLength={5} required className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">Nombre de Usuario</label>

                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="registerEmail" required className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Correo </label>

                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerPassword" required className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Contraseña</label>

                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" required className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repite Contraseña</label>

                        </div>





                        <button onClick={guardar} className="btn btn-primary btn-block mb-3">Registrar</button>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <Defaul />


    );

}