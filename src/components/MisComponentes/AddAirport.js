
import React, {Component } from 'react';
import { Toast, Modal, Button, Col, Row } from 'react-materialize';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.AddAirport=this.AddAirport.bind(this);
    }


    AddAirport(e){
        
        fetch('http://localhost:3001/api/journeys/Apts', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            window.Materialize.toast("Aeropuerto Agregado",4000)
            this.setState({
                Ap_Name:'', 
                Ap_Country:'',
                Ap_State:'',
                Ap_City:'',
                Ap_Address:''
            });
            this.fetchAirports();
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
            <form onSubmit={this.AddAirport}>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Name" value={this.state.Ap_Name} onChange={this.handleChange} type="text" placeholder="Nombre de Aeropuerto"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Country" value={this.state.Ap_Country} onChange={this.handleChange} type="text" placeholder="Pais"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_State" value={this.state.Ap_State} onChange={this.handleChange}  type="text" placeholder="Estado"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_City" value={this.state.Ap_City} onChange={this.handleChange}  type="text" placeholder="Ciudad"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s10 push-s1 MiInputField">
                                                <input name="Ap_Address" value={this.state.Ap_Address} onChange={this.handleChange}  type="text" placeholder="Dirección"/>
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

export default Airport;
