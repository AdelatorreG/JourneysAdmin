
import React, {Component } from 'react';
import { Toast, Modal, Button, Col, Row } from 'react-materialize';
import EditAirportView from './AddAirport';

import './estilos.css'

class Airport extends Component{

    constructor(props){
        super(props);
        this.state={
            Ap_Name: '', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            _id: '',
            Aeropuertos: []
        };
        this.handleChange=this.handleChange.bind(this);
       this.AddAirport=this.AddAirport.bind(this);
        //this.EditAirport=this.EditAirport.bind(this);
    }
fetchAirports(){
    fetch('http://localhost:3001/api/journeys/Apts/')  
        .then(res=>res.json())
        .then(data=>{
            this.setState({Aeropuertos:data});
        });
    }

   AddAirport(e){
        e.preventDefault();
        if(this.state._id) {
          fetch(`http://localhost:3001/api/journeys/Apts/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
          Ap_Name: this.state.Ap_Name,
          Ap_Country: this.state.Ap_Country,
          Ap_State: this.state.Ap_State,
          Ap_City: this.state.Ap_City,
          Ap_Address: this.state.Ap_Address         
        }),

      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Airport Updated'});
          this.setState({_id: '', Ap_Name: '', Ap_Country: '', Ap_State: '', Ap_City: '', Ap_Address: ''});
          this.fetchAirports();
        });
    }
        else{
    
            fetch('http://localhost:3001/api/journeys/Apts', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  window.M.toast({html: 'Airport Saved'});
                  this.setState({Ap_Name: '', Ap_Country: '', Ap_State: '', Ap_City: '', Ap_Address: ''});
                  this.fetchAirportss();
                })
                .catch(err => console.error(err));
            }
        
          }

    EditAirport(id){
            fetch(`http://localhost:3001/api/journeys/Apts/${id}`)
              .then(res => res.json())
              .then(data => {
                console.log(data);
                this.setState({
                  Ap_Name: data.Ap_Name,
                  Ap_Country: data.Ap_Country,
                  Ap_State: data.Ap_State,
                  Ap_City: data.Ap_City,
                  Ap_Address: data.Ap_Address,
                  _id: data._id
                });
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
                                                <button  type="submit" className="btn light-blue darken-3">Update</button>
                                            </div>
                                        </div>
                                    </form>
        </div>
        )
    }
}

export default Airport;