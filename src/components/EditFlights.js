
import React, {Component } from 'react';
import {Input, Row} from 'react-materialize';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Ap_Code:'',
            Ap_Name:'',
            Ap_Country:'',
            Origen: '',
            Fecha_De_Salida: '',
            Hora_De_Salida: '',
            Destino: '',
            Fecha_De_Llegada: '',
            Hora_De_Llegada: '',
            Capacidad: '',
            Precio: '',
            Aeropuertos:[],
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchFlights();
        this.fetchAirports();
    }

    fetchAirports(){
        fetch('http://localhost:3001/api/journeys/Apts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
            });
    }

    fetchFlights(){
        fetch(`http://localhost:3001/api/journeys/Flgts/${this.props.IdFromParent}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                Origen:data.Origen, 
                Fecha_De_Salida:data.Fecha_De_Salida,
                Hora_De_Salida:data.Hora_De_Salida,
                Destino:data.Destino,
                Fecha_De_Llegada:data.Fecha_De_Llegada,
                Hora_De_Llegada:data.Hora_De_Llegada,
                Capacidad:data.Capacidad,
                Precio:data.Precio,
                _id:data._id
            });
            })
    }

    GuardarCambios(){
        fetch(`http://localhost:3001/api/journeys/Flgts/${this.props.IdFromParent}`,{
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        window.Materialize.toast("Vuelo Actualizado",900,"light-blue darken-3")
        });
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        let optionItems = this.state.Aeropuertos.map((Aeropuerto) =>
        <option key={Aeropuerto._id}>{Aeropuerto.Ap_Name}</option>
    );
        return(
            <div>
                <div className="row">
                <label className="col s3">
                    Origen
                </label>
                <Input
                className="col s10 push-s1 select"
                        s={12} type='select' 
                        data={this.state.Aeropuertos}
                        textField="Origen" 
                        defaultValue='Selecciona un Aeropuerto'
                        id="_id"
                        onChange={this.handleChange}
                        value={this.state.Origen}
                        name="Origen"
                        >
                     
                        {optionItems}
                  
                    </Input>
                    <Row>
                    </Row>    
                </div>
                <div className="row">
                <label className="col s3">
                    Fecha Salida
                </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Fecha_Salida" value={this.state.Fecha_De_Salida} onChange={this.handleChange} type="date" placeholder="Fecha De Salida"/>
                    
                </div>
                <div className="row">
                    <label className="col s3">
                        Hora Salida
                    </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Hora_Salida" value={this.state.Hora_De_Salida} onChange={this.handleChange}  type="time" placeholder="Hora De Salida"/>
                </div>
                <Row>
                <label className="col s3">
                    Destino
                </label>
                <Input className="col s10 push-s1 select"
                        s={12} type='select' 
                        data={this.state.Aeropuertos}
                        textField="Destino" 
                        defaultValue='Selecciona un Aeropuerto'
                        id="_id"
                        onChange={this.handleChange}
                        value={this.state.Destino}
                        name="Destino"
                        >
                     
                        {optionItems}
                
                    </Input>
                    </Row>
                    <Row>
                        </Row>
                <div className="row">
                    <label className="col s3">
                        Fecha Llegada
                    </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Fecha_Llegada" value={this.state.Fecha_De_Llegada} onChange={this.handleChange}  type="date" placeholder="Fecha De Llegada"/>
                    
                </div>
                <div className="row">
                    <label className="col s3">
                        Hora Llegada
                    </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Hora_Llegada" value={this.state.Hora_De_Llegada} onChange={this.handleChange}  type="time" placeholder="Hora De Llegada"/>
                    
                </div>
                <div className="row">
                    <label className="col s3">
                        Capacidad
                    </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Capacidad" value={this.state.Capacidad} onChange={this.handleChange}  type="number" placeholder="Capacidad"/>
                    
                </div>
                <div className="row">
                    <label className="col s3">
                        Precio
                    </label>
                        <input className="input-field col s10 push-s1 MiInputField" name="Precio" value={this.state.Precio} onChange={this.handleChange}  type="number" placeholder="Precio"/>
                    
                </div>
                <div className="row"></div>
                <div className="row">
                    <div className="col s1 push-s9">
                        <button onClick={()=>{this.GuardarCambios()}}  className="btn light-blue darken-3 large" disabled={
                            !this.state.Origen ||
                            !this.state.Fecha_De_Salida||
                            !this.state.Hora_De_Salida||
                            !this.state.Destino||
                            !this.state.Fecha_De_Llegada||
                            !this.state.Hora_De_Llegada||
                            !this.state.Capacidad||
                            !this.state.Precio
                        }>
                            Guardar
                        </button>
                    </div>
                </div>
        </div>
        )
    }
}

export default Airport;