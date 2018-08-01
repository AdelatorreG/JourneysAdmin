
import React, {Component } from 'react';
import { Toast, Modal, Button, Col, Row } from 'react-materialize';
import AddFlightsView from './AddFlights';

import './estilos.css'

class Flight extends Component{
    constructor(){
        super();
        this.state={
            Origen: '',
            Fecha_De_Salida: '',
            Hora_De_Salida: '',
            Destino: '',
            Fecha_De_Llegada: '',
            Hora_De_Llegada: '',
            Capacidad: '',
            Precio: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.AddFlight=this.AddFlight.bind(this);
    }


    AddFlight(e){
        
        fetch('http://localhost:3001/api/journeys/Flgts/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            window.Materialize.toast("Vuelo Agregado",4000)
            this.setState({
                Origen: '',
                Fecha_De_Salida:'',
                Hora_De_Salida:'',
                Destino:'',
                Fecha_De_Llegada:'',
                Hora_De_Llegada:'',
                Capacidad:'',
                Precio:''
            });
        })
        .catch(err=> console.error(err));
        e.preventDefault();


    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
            <form onSubmit={this.AddFlight}>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Origen" value={this.state.Origen} onChange={this.handleChange} type="text" placeholder="Origen"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Fecha_De_Salida" value={this.state.Fecha_De_Salida} onChange={this.handleChange} type="text" placeholder="Fecha de Salida"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Hora_De_Salida" value={this.state.Hora_De_Salida} onChange={this.handleChange}  type="text" placeholder="Hora de Salida"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Destino" value={this.state.Destino} onChange={this.handleChange}  type="text" placeholder="Destino"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Fecha_De_Llegada" value={this.state.Fecha_De_Llegada} onChange={this.handleChange}  type="text" placeholder="Fecha de Llegada"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Hora_De_Llegada" value={this.state.Hora_De_Llegada} onChange={this.handleChange} type="text" placeholder="Hora de Llegada"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Capacidad" value={this.state.Capacidad} onChange={this.handleChange} type="text" placeholder="Capacidad"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Precio" value={this.state.Precio} onChange={this.handleChange} type="text" placeholder="Precio"/>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col s1 push-s9">
                                                <button type="submit" className="btn light-blue darken-3">Add</button>
                                            </div>
                                        </div>
                                    </form>
        </div>
        )
    }
}

export default Flight;
