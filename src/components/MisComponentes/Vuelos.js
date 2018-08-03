
import React, {Component } from 'react';
import { Toast, Modal, Button } from 'react-materialize';
import AddAirportView from './AddVuelos';

import './estilos.css'

class Airport extends Component{
    constructor(){
        super();
        this.state={
            Vuelos:[]
        };
    }

    componentDidMount(){
        this.fetchFlights();
    }
    
    fetchFlights(){
        fetch('http://localhost:3001/api/journeys/Flgts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Vuelos:data});
            });
        }

    DeleteFlights(id){
        if(window.confirm('Estas seguro de eliminar el vuelo')){
            fetch(`http://localhost:3001/api/journeys/Flgts/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                window.Materialize.toast("Vuelo Eliminado");
                this.fetchFlights();
            });
        }
    }


    render(){
        return(
            <div className="container">
            <p>VUELOS</p>
                <div className="section">
                    <div className="row valign-wrapper">
                        <div className="col s6 input-field light-blue darken-3 ">
                            <input id="search" type="search" required/>
                            <label className="label-icon" ><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                        <div className="col s3 "><a className="waves-effect waves-light light-blue darken-3 btn-large">Search</a></div>
                        <div className="col s3 push-s1 ">
                        <Modal header="Agregar nuevo aeropuerto" className="MiModal center"
                            trigger={
                                <Button className="waves-effect waves-light light-blue darken-3">
                                    Agregar Aeropuerto
                                </Button>
                            }>

                            <AddAirportView/> 
                            {this.fetchFlights()}
                        </Modal>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col s12 ">
                        <table className=" highlight">
                            <thead>
                                <tr>
                                    <th>Origen</th>
                                    <th>Fecha De Salida</th>
                                    <th>Hora De Salida</th>
                                    <th>Destino</th>
                                    <th>Fecha De Salida</th>
                                    <th>Hora De Salida</th>
                                    <th>Capacidad</th>
                                    <th>Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.Vuelos.map(Vuelos=>{
                                        return(
                                            <tr key={Vuelos._id}>
                                                <td>{Vuelos.Origen}</td>
                                                <td>{Vuelos.Fecha_De_Salida}</td>
                                                <td>{Vuelos.Hora_De_Salida}</td>
                                                <td>{Vuelos.Destino}</td>
                                                <td>{Vuelos.Fecha_De_Llegada}</td>
                                                <td>{Vuelos.Hora_De_Llegada}</td>
                                                <td>{Vuelos.Capacidad}</td>
                                                <td>{Vuelos.Precio}</td>
                                                <td>
                                                    <button className="waves-effect waves-light light-blue darken-3 btn small" style={{margin:"6px"}} 
                                                     onClick={()=>this.DeleteFlights(Vuelos._id)}>
                                                        <i className="material-icons ">delete</i>
                                                    </button>
                                                    <button className="waves-effect waves-light light-blue darken-3 btn" style={{margin:"6px"}} 
                                                    onClick={()=>this.DeleteFlight(Vuelos._id)}>
                                                        <i className="material-icons ">edit</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Airport;