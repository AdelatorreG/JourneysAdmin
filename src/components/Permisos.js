import React, {Component } from 'react';
import { Modal, Button, Row, Col, Input} from 'react-materialize';
import SearchInput, {createFilter} from 'react-search-input';
import Switch from "react-switch";
import AddUserView from './AddUser';

import './estilos.css'


const KEYS_TO_FILTERS = ['P_Numero', 'P_UserName', 'P_Date']


class Permisos extends Component{
    constructor(props){
        super(props);
        this.state={
            P_Numero:'',
            P_UserName:'',
            P_Date:'',
            P_For_Airports:'',
            P_For_Flights:'',
            P_For_Usernames :'',
            _id:'',
            Permisos:[],
            searchTerm: '',
            checked:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    componentDidMount(){
        this.fetchPermisos();
       
    }

    handleChange(checked) {
        this.setState({ checked });
      }

    fetchPermisos(){
        fetch('http://localhost:3001/api/journeys/permissions/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Permisos:data});
            });
        }

    DeletePermiso(id){
        if(window.confirm('Estas seguro de eliminar el Usuario')){
            fetch(`http://localhost:3001/api/journeys/permissions/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                window.Materialize.toast("Permiso Eliminado");
                this.fetchPermisos();
            });
        }
    }

    render(){
        const filteredPermisos = this.state.Permisos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
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
                        <Modal header="Agregar nuevo Usuario" className="MiModal center"
                            trigger={
                                <Button className="waves-effect waves-light light-blue darken-3">
                                    Agregar Usuario Admin
                                </Button>
                            }>
                            <AddUserView/> 
                            {this.fetchPermisos()}
                        </Modal>
                            </Col>
                        </Row>
        <div className="row">
                    <div className="col s12 ">
                        <table className=" highlight">
                            <thead>
                                <tr>
                                    <th>Numero</th>
                                    <th>Usuario</th>
                                    <th>Fecha de Creación</th>
                                    <th>Aeropuertos</th>
                                    <th>Vuelos</th>
                                    <th>Permisos</th>
                                    <th>Habilitar</th>
                                </tr>
                            </thead>
                            <tbody >
        
        {filteredPermisos.map(Permisos => {
            return (
                <tr key={Permisos._id}>
                                                <td>{Permisos.P_Numero}</td>
                                                <td>{Permisos.P_UserName}</td>
                                                <td>{Permisos.P_Date}</td>
                                                <td>{<Input name='group1' 
                                                    type='checkbox' 
                                                    value='green' 
                                                    label='A'
                                                    className='filled-in' 
                                                    defaultValue='checked'
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<Input name='group2' 
                                                    type='checkbox' 
                                                    value='green'  
                                                    label='V'
                                                    className='filled-in' 
                                                    defaultValue='checked' 
                                                    disabled=''
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<Input name='group3' 
                                                    type='checkbox' 
                                                    label='P'
                                                    value='green'  
                                                    className='filled-in' 
                                                    defaultValue='checked' 
                                                    disabled=''
                                                    onChange={function(e, value){}}/>}</td>
                                                <td>{<label htmlFor={Permisos.checked}>
        <span></span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.Permisos.checked}
          id={Permisos._id}
        />
      </label> }</td>

                                            </tr>
          )
        })
        }
         </tbody>
                        </table>
                        <ul class="pagination center">
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="active"><a href="#!">1</a></li>
                            <li class="waves-effect"><a href="#!">2</a></li>
                            <li class="waves-effect"><a href="#!">3</a></li>
                            <li class="waves-effect"><a href="#!">4</a></li>
                            <li class="waves-effect"><a href="#!">5</a></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
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

export default Permisos;