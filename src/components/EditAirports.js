
import React, {Component } from 'react';
import {Input} from 'react-materialize';
import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Ap_Code:'',
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.fetchAirport();
    }

    fetchAirport(){
        fetch(`http://localhost:3001/api/journeys/Apts/${this.props.IdFromParent}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                Ap_Code:data.Ap_Code,
                Ap_Name:data.Ap_Name,
                Ap_Country: data.Ap_Country,
                Ap_State:data.Ap_State,
                Ap_City:data.Ap_City,
                Ap_Address:data.Ap_Address,
                _id:data._id
            });
            })
    }

    GuardarCambios(){
        fetch(`http://localhost:3001/api/journeys/Apts/${this.props.IdFromParent}`,{
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        window.Materialize.toast("Aeropuerto Actualizado",900,"light-blue darken-3")
        });
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
                 <div className="row">
                    <label className="col s3">
                        Code
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_Code" value={this.state.Ap_Code} onChange={this.handleChange} type="text" placeholder="Codigo de Aeropuerto"/>
                </div>
                <div className="row">
                    <label className="col s3">
                        Name
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_Name" value={this.state.Ap_Name} onChange={this.handleChange} type="text" placeholder="Nombre de Aeropuerto"/>
                </div>
                <div className="row">
                    <label className="col s3">
                        Country
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_Country" value={this.state.Ap_Country} onChange={this.handleChange} type="text" placeholder="Pais"/>
                </div>
                <div className="row">
                    <label className="col s3">
                        State
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_State" value={this.state.Ap_State} onChange={this.handleChange}  type="text" placeholder="Estado"/>
                </div>
                <div className="row">
                    <label className="col s3">
                        City
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_City" value={this.state.Ap_City} onChange={this.handleChange}  type="text" placeholder="Ciudad"/>
                </div>
                <div className="row">
                    <label className="col s3">
                        Address
                    </label>
                        <input className="input-field col s10 push-s1 EditField" name="Ap_Address" value={this.state.Ap_Address} onChange={this.handleChange}  type="text" placeholder="Dirección"/>
                </div>
                <div className="row"></div>
                <div className="row">
                    <div className="col s1 push-s9">
                        <button onClick={()=>{this.GuardarCambios()}}  className="btn light-blue darken-3 large" disabled={
                            !this.state.Ap_Code ||
                            !this.state.Ap_Address ||
                            !this.state.Ap_City ||
                            !this.state.Ap_Country ||
                            !this.state.Ap_Name ||
                            !this.state.Ap_State
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