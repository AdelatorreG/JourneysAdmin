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
            P_For_Usernames:'',
            status:'',
            _id:'',
            Permisos:[],
            searchTerm: '',
            checked:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this);
        this.SendChanges = this.SendChanges.bind(this);
        this.SaveOne = this.SaveOne.bind(this);

    }

    SaveOne(id){
        this.state.Permisos.forEach(element => {
            if(element["_id"]==id){
                this.setState({
                    P_Numero: element["P_Numero"]
                  });
                  this.setState({
                    P_UserName: element["P_UserName"]
                  });
                  this.setState({
                    P_Date: element["P_Date"]
                  });
                  this.setState({
                    P_For_Airports: element["P_For_Airports"]
                  });
                  this.setState({
                    P_For_Flights: element["P_For_Flights"]
                  });
                  this.setState({
                    P_For_Usernames: element["P_For_Usernames"]
                  });
                  this.setState({
                    status: element["status"]
                  });
                  this.GuardarCambios(id);
            }
        });
    }
    
    SendChanges(){
        var id="";
        this.state.Permisos.forEach(element => {
            id = element["_id"]
            this.setState({
                _id: element["_id"]
              });
            this.setState({
                P_Numero: element["P_Numero"]
              });
              this.setState({
                P_UserName: element["P_UserName"]
              });
              this.setState({
                P_Date: element["P_Date"]
              });
              this.setState({
                P_For_Airports: element["P_For_Airports"]
              });
              this.setState({
                P_For_Flights: element["P_For_Flights"]
              });
              this.setState({
                P_For_Usernames: element["P_For_Usernames"]
              });
              this.setState({
                status: element["status"]
              });
            console.log(id);
            this.GuardarCambios(this.state._id);
        });
    }

      GuardarCambios(id){
        fetch(`http://localhost:3001/api/journeys/permissions/${id}`,{
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        window.Materialize.toast("Permisos Actualizado",900,"light-blue darken-3")
        });
    }

    componentDidMount(){
        this.fetchPermisos();
       
    }

    handleChange(id,namePermiso) {
       this.state.Permisos.forEach(element => {
           if(element["_id"]==id){
               element[namePermiso]=!element[namePermiso];
               console.log(element);
           }
       });
       console.log(this.state.Permisos);

      }

    fetchPermisos(){
        fetch('http://localhost:3001/api/journeys/permissions/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Permisos:data});
                console.log(this.state.Permisos);
            });
        }

    DeleteUsers(id){
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

    componentWillUnmount(){
        console.log("modal unmountd")
    }

    render(){
        let base1 = this.state.Permisos.map((Permiso) =>
        <option key={Permiso._id}>{Permiso.P_For_Airports}</option>
        );
        let base2 = this.state.Permisos.map((Permiso) =>
        <option key={Permiso._id}>{Permiso.P_For_Flights}</option>
        );
        let base3 = this.state.Permisos.map((Permiso) =>
        <option key={Permiso._id}>{Permiso.P_For_Usernames}</option>
        );

        const filteredPermisos = this.state.Permisos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
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
                                    <Modal header="Agregar Usuario" className="MiModal center"
                                    fixedFooter
                                    actions={
                                        <div>
                                            <Button flat style={{padding:" 10px 15px"}} disabled/>
                                            <Button modal="close" className="btn light-blue darken-3" >Cerrar  </Button>
                                        </div>
                                    }
                                    modalOptions={{
                                        dismissible:false,
                                        complete:()=>this.fetchPermisos(),
                                    }}
                                    trigger={
                                        <Button className="waves-effect waves-light light-blue darken-3">
                                            Agregar Usuario
                                        </Button>
                                    }>
                                        <AddUserView/>
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
                                    <th>Save</th>
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
                            id={"airports"+Permisos._id}
                            value="Permisos.P_For_Airports"
                            label='A'
                            className='filled-in' 
                            onChange={(e)=>this.handleChange(Permisos._id,"P_For_Airports")}
                            checked={Permisos.P_For_Airports}
                        />}
                    </td>
                    <td>{<Input name='group2' 
                            type='checkbox' 
                            id={"flights"+Permisos._id}
                            value='base2'  
                            label='V'
                            className='filled-in' 
                            onChange={(e)=>this.handleChange(Permisos._id,"P_For_Flights")}
                            checked={Permisos.P_For_Flights}
                        />}
                    </td>
                    <td>{<Input name='group3' 
                            type='checkbox' 
                            id={"users"+Permisos._id}
                            label='P'
                            value='base3'  
                            className='filled-in' 
                            onChange={(e)=>this.handleChange(Permisos._id,"P_For_Usernames")}
                            checked={Permisos.P_For_Usernames}
                        />}
                    </td>
                    <td>{<Input
                            name="group4"
                            type="switch"
                            value="Permisos.status"
                            //onChange={this.handleChange(Permisos._id,"status")}
                            checked={Permisos.status}
                            className='filled-in'
                            id={"estado"+Permisos._id}
                        />}
                    </td>
                    <td>{
                        <button onClick={()=>{this.SaveOne(Permisos._id)}}  className="btn light-blue darken-3 large right">
                            Guardar
                        </button>
                    }</td>
                   
                </tr>
            )
        })
        }
         </tbody>
                        </table>
                        
                        <Row>
                        <ul class="pagination center">
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="active"><a href="#!">1</a></li>
                            <li class="waves-effect"><a href="#!">2</a></li>
                            <li class="waves-effect"><a href="#!">3</a></li>
                            <li class="waves-effect"><a href="#!">4</a></li>
                            <li class="waves-effect"><a href="#!">5</a></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                        </Row>
                        <Row>
                        <button onClick={()=>{this.SendChanges()}}  className="btn light-blue darken-3 large right">
                                            Guardar Cambios
                        </button>
                        </Row>
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