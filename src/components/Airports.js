
import React, {Component } from 'react';
import { Modal, Button, Row, Col} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input'; 
import AddAirportView from './AddAirport';
import EditAirportView from './EditAirports'

import './estilos.css'

const KEYS_TO_FILTERS = ['Ap_Name', 'Ap_Country', 'Ap_State', 'Ap_City', 'Ap_Address']

class Airport extends Component{
    constructor(props){
        super(props);
        this.state={
            Ap_Code:'',
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            _id:'',
            Aeropuertos:[],
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount(){
        this.fetchAirports();
    }
    
    fetchAirports(){
        fetch('http://localhost:3001/api/journeys/Apts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
            });
    }

    DeleteAirport(id){
        if(window.confirm('Estas seguro de eliminar el aeropuerto')){
            fetch(`http://localhost:3001/api/journeys/Apts/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                window.Materialize.toast("Aeropuerto Eliminado",900,"light-blue darken-3");
                this.fetchAirports();
            });
        }
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }

    componentWillUnmount(){
        console.log("modal unmounted");
    }
    render(){
        const filteredAeropuertos = this.state.Aeropuertos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            [
                <div className="container">
                    <div className="section">
                        <div>
                            <Row>
                                <Col className="s6">
                                    <SearchInput className="search-input light-blue darken-3 MiSearchBar valign-wrapper" onChange={this.searchUpdated} />
                                </Col>
                                <Col><Button flat style={{padding:" 10px 15px"}} disabled/></Col>
                                <Col className="s4 push-s2 ">
                                    <Modal header="Agregar Nuevo Aeropuerto" className="MiModal center"
                                    fixedFooter
                                    actions={
                                        <div>
                                            <Button flat style={{padding:" 10px 15px"}} disabled/>
                                            <Button modal="close" className="btn light-blue darken-3" >Cerrar  </Button>
                                        </div>
                                    }
                                    modalOptions={{
                                        dismissible:false,
                                        complete:()=>this.fetchAirports(),
                                    }}
                                    trigger={
                                        <Button className="waves-effect waves-light light-blue darken-3">
                                            Agregar Aeropuerto
                                        </Button>
                                    }>
                                        <AddAirportView/>
                                    </Modal>
                                </Col>
                            </Row>
                            <div className="row">
                                <div className="col s12 ">
                                    <table className=" highlight">
                                        <thead>
                                            <tr>
                                                <th>Codigo</th>
                                                <th>Nombre de Aeropuerto</th>
                                                <th>Pais</th>
                                                <th>Estado</th>
                                                <th>Ciudad</th>
                                                <th>Dirección</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {filteredAeropuertos.map(Aeropuertos => {
                                                return (
                                                    <tr key={Aeropuertos._id}>
                                                        <td>{Aeropuertos.Ap_Code}</td>
                                                        <td>{Aeropuertos.Ap_Name}</td>
                                                        <td>{Aeropuertos.Ap_Country}</td>
                                                        <td>{Aeropuertos.Ap_State}</td>
                                                        <td>{Aeropuertos.Ap_City}</td>
                                                        <td>{Aeropuertos.Ap_Address}</td>
                                                        <td>
                                                            <button className="waves-effect waves-light light-blue darken-3 btn" 
                                                            onClick={()=>this.DeleteAirport(Aeropuertos._id)}>
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
                                                            modalOptions={{
                                                                dismissible:false,
                                                                complete:()=>this.fetchAirports(),
                                                                }}
                                                            trigger={
                                                                <button className="waves-effect waves-light light-blue darken-3 btn tiny" style={{margin:"6px"}}>
                                                                    <i className="material-icons ">edit</i>
                                                                </button>
                                                            }>
                                                                <EditAirportView IdFromParent={Aeropuertos._id}/>
                                                            </Modal>
                                                        </td>
                                                    </tr>)
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
}

export default Airport;