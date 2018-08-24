import React, {Component } from 'react';
import {Input} from 'react-materialize';


import './estilos.css'




class Flight extends Component{
    constructor(){
        super();
        this.state={
            Ap_Code:'',
            Ap_Name:'',
            Ap_Country:'',
            Origen: '',
            Fecha_De_Salida:'',
            Hora_De_Salida: '',
            Destino: '',
            Fecha_De_Llegada:'',
            Hora_De_Llegada: '',
            Capacidad: '',
            Precio: '',
            Aeropuertos:[],
            _id:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.DateChange=this.DateChange.bind(this);
        this.AddFlight=this.AddFlight.bind(this);
    }



    componentDidMount() {
     this.fetchAirports();
    }

    fetchAirports(){
        fetch('http://localhost:3001/api/journeys/Apts/')  
            .then(res=>res.json())
            .then(data=>{
                this.setState({Aeropuertos:data});
            });
    }

    AddFlight(e){
        
        fetch('http://localhost:3001/api/journeys/Flgts/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            window.Materialize.toast("Vuelo Agregado",900,"light-blue darken-3")
            this.setState({
                Origen: '',
                Fecha_De_Salida:'',
                Hora_De_Salida:'',
                Destino:'',
                Fecha_De_Llegada:'',
                Hora_De_Llegada:'',
                Capacidad:'',
                Precio:''
            });
        })
        .catch(err=> console.error(err));
        e.preventDefault();
    }

      DateChange(date) {
    this.setState({
      Fecha_De_Salida: date
    });
  }

  DateChange2(date) {
    this.setState({
      Fecha_De_Llegada: date
    });
  }



    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    valideKey(evt)
    {
        var code = (evt.which) ? evt.which : evt.keyCode;
        if(code==8) 
        {
            //backspace
            return true;
        }
        else if(code>=48 && code<=57) 
        {
            //is a number
            return true;
        }
        else
        {
            return false;
        }
    }

    render(){
        let optionItems = this.state.Aeropuertos.map((Aeropuerto) =>
        <option key={Aeropuerto._id}>{Aeropuerto.Ap_Code}</option>
    );
          
        return(
            <div>
                <form onSubmit={this.AddFlight}>
                    <Input className="col s10 push-s1 selectAdd"
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
    
               
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                            <input 
                            type='date' 
                            name="Fecha_De_Salida" 
                            value={this.state.Fecha_De_Salida} 
                            onChange={this.handleChange} 
                            placeholder="Fecha de Salida"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                            <input name="Hora_De_Salida" value={this.state.Hora_De_Salida} onChange={this.handleChange}  type="time" placeholder="Hora de Salida"/>
                        </div>
                    </div>
                    <Input className="col s10 push-s1 selectAdd"
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
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                        <input 
                            type='date' 
                            name="Fecha_De_Llegada" 
                            value={this.state.Fecha_De_Llegada} 
                            onChange={this.handleChange} 
                            placeholder="Fecha de Llegada"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                            <input name="Hora_De_Llegada" value={this.state.Hora_De_Llegada} onChange={this.handleChange} type="time" placeholder="Hora de Llegada"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                            <input name="Capacidad" value={this.state.Capacidad} onChange={this.handleChange} type="number" placeholder="Capacidad"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 push-s1 MiInputField">
                            <input name="Precio" value={this.state.Precio} onChange={this.handleChange} type="number" placeholder="Precio"/>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col s1 push-s9">
                            <button type="submit" className="btn light-blue darken-3" disabled={
                                !this.state.Origen||
                                !this.state.Fecha_De_Salida||
                                !this.state.Hora_De_Salida||
                                !this.state.Destino||
                                !this.state.Fecha_De_Llegada||
                                !this.state.Hora_De_Llegada||
                                !this.state.Capacidad||
                                !this.state.Precio
                            }>Agregar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Flight;