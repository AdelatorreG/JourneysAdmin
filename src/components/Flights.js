
import React, {Component } from 'react';
import { Modal, Button, Row, Col} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';
import AddAFlightsView from './AddFlights';
import EditFlights from './EditFlights';

import './estilos.css'

const KEYS_TO_FILTERS = [
    'Origen', 'Fecha_De_Salida', 
    'Hora_De_Salida', 
    'Destino', 
    'Fecha_De_Llegada', 
    'Hora_De_Llegada',
    'Capacidad',
    'Precio'
]

class Airport extends Component{
    constructor(props){
        super(props);
        this.state={
            Origen:'',
            Fecha_De_Salida:'',
            Hora_De_Salida:'',
            Destino:'',
            Fecha_De_Llegada:'',
            Hora_De_Llegada:'',
            Capacidad:'',
            Precio:'',
            Vuelos:[],
            searchTerm:''
        };
        this.searchUpdated = this.searchUpdated.bind(this)
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
        if(window.confirm('Estas seguro de eliminar el aeropuerto')){
            fetch(`http://localhost:3001/api/journeys/Flgts/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                window.Materialize.toast("Aeropuerto Eliminado");
                this.fetchFlights();
            });
        }
    }


    render(){
        const filteredVuelos = this.state.Vuelos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            [
                <div className="container">
                <div className="section">
                <div>
        <Row>
        <SearchInput  style={{width: "400px",position: "relative", padding: "10px 10px",
  height: "15px", lenght: "400px"}} 
        className="col s6 search-input light-blue darken-3" onChange={this.searchUpdated} />
            <Col className="col s5 push-s1 ">
                        <Modal header="Agregar Nuevo Vuelo" className="MiModal center"
                            trigger={
                                <Button className="waves-effect waves-light light-blue darken-3">
                                    Agregar Vuelo
                                </Button>
                            }>
                            <AddAFlightsView/> 
                            {this.fetchFlights()}
                        </Modal>
                            </Col>
                        </Row>
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
        
        {filteredVuelos.map(Vuelos => {
          return (
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

            <button className="waves-effect waves-light light-blue darken-3 btn tiny" style={{margin:"6px"}} 
                onClick={()=>this.DeleteFlights(Vuelos._id)}>
                <i className="material-icons ">delete</i>
            </button>
            </td>
            <td>
                <Modal header='Editar Aeropuerto' className="MiModal center"
                    fixedFooter
                    actions={
                    <div>
                        <Button flat style={{padding:" 10px 15px"}} disabled/>
                        <Button modal="close" className="btn light-blue darken-3" >Cerrar  </Button>
                    </div>
                    }
                    modalOptions={{dismissible:false,
                    complete:()=>this.fetchFlights(),
                    }}
                    trigger={
                        <button className="waves-effect waves-light light-blue darken-3 btn tiny" style={{margin:"6px"}}>
                            <i className="material-icons ">edit</i>
                        </button>
                    }>
                    <EditFlights IdFromParent={Vuelos._id}/>
                </Modal>
            </td>
         </tr>
          )
        })
        }
         </tbody>
                        </table>
                        <ul className="pagination center">
                            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                            <li className="active"><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    
            ]
        )
    }    
        searchUpdated (term) {
            this.setState({searchTerm: term})
    }
}

export default Airport;