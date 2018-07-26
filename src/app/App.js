import React, {Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state={
            Ap_Name:'', 
            Ap_Country:'',
            Ap_State:'',
            Ap_City:'',
            Ap_Address:'',
            Aeropuertos:[]
        };
        this.handleChange=this.handleChange.bind(this);
        this.AddAirport=this.AddAirport.bind(this);
    }

    AddAirport(e){
        fetch('/api/journeys', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            M.toast({html:'Aeropuerto guardado'});
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

    DeleteAirport(id){
        if(confirm('Estas seguro de eliminar el aeropuerto')){
            fetch(`/api/journeys/${id}`,{
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                M.toast({html:'Aeropuerto Eliminado'});
                this.fetchAirports();
            });
        }
    }
    componentDidMount(){
        this.fetchAirports();
    }
    fetchAirports(){
        fetch('api/journeys')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
                console.log(this.state.Aeropuertos);
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
                {/* Navigation*/}
                <nav className="light-blue darken-3">
                    <div className="container">
                        <a className="brand-logo" href="/">Mernstack</a> 
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.AddAirport}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="Ap_Name" value= {this.state.Ap_Name} onChange={this.handleChange} type="text" placeholder="Nombre de Aeropuerto"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="Ap_Country" value= {this.state.Ap_Country} onChange={this.handleChange} type="text" placeholder="Pais"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="Ap_State" value= {this.state.Ap_State} onChange={this.handleChange} type="text" placeholder="Estado"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="Ap_City" value= {this.state.Ap_City} onChange={this.handleChange} type="text" placeholder="Ciudad"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="Ap_Address" value= {this.state.Ap_Address} onChange={this.handleChange} placeholder="Dirección" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-3">Send</button>
                                    </form>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="col s7">
                            <table>
                                    <thead>
                                        <tr>
                                            <th>Nombre de aeropuerto</th>
                                            <th>Pais</th>
                                            <th>Estado</th>
                                            <th>Ciudad</th>
                                            <th>Dirección</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.Aeropuertos.map(Aeropuertos=>{
                                                return(
                                                    <tr key={Aeropuertos._id}>
                                                        <td>{Aeropuertos.Ap_Name}</td>
                                                        <td>{Aeropuertos.Ap_Country}</td>
                                                        <td>{Aeropuertos.Ap_State}</td>
                                                        <td>{Aeropuertos.Ap_City}</td>
                                                        <td>{Aeropuertos.Ap_Address}</td>
                                                        <td>
                                                            <button className="btn light-blue darken-3" onClick={()=>this.DeleteAirport(Aeropuertos._id)}>
                                                                <i className="material-icons">delete</i>
                                                            </button>
                                                            <button className="btn light-blue darken-3" style={{margin :'4px'}}>
                                                            <i className="material-icons">edit</i>
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
            </div>
        )
    }
}

export default App;