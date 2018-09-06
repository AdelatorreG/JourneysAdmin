const express = require('express');
const router = express.Router();

const airportModel = require('../models/airportsModel');
const flightModel = require('../models/flightsModel');
const permissionsModel = require('../models/permissionsModel');
const userModel = require('../models/usersModel');
const clientModel = require('../models/ClientModel');
const CardsModel = require('../models/CardsModel');

router.get('/Apts/', async (req,res)=>{
    const TodosLosAeropuertos = await airportModel.find();
    res.json(TodosLosAeropuertos);
}
);

router.get('/Apts/:id', async (req,res)=>{
    const AeropuertoPorId = await airportModel.findById(req.params.id);
    res.json(AeropuertoPorId);
});

router.post('/Apts/', async (req,res)=>{
    const {Ap_Code, Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const NuevoAeropuerto = new airportModel({Ap_Code, Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address});
    await NuevoAeropuerto.save();
    res.json({status:'Airport saved'});
});

router.put('/Apts/:id', async (req,res)=>{
    const {Ap_Code, Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const ActualizarAeropuerto = {Ap_Code, Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address};
    await airportModel.findByIdAndUpdate(req.params.id, ActualizarAeropuerto);
    res.json({status:'Airport updated'});
});

router.delete('/Apts/:id', async (req,res)=>{
    await airportModel.findByIdAndRemove(req.params.id);
    res.json({status:'Airport deleted'});
});


//////////////////////////////////////////////////////////////////////////////////

router.get('/Flgts/', async (req,res)=>{
    const TodosLosVuelos = await flightModel.find();
    res.json(TodosLosVuelos);
}
);

router.get('/Flgts/:id', async (req,res)=>{
    const VuelosPorId = await flightModel.findById(req.params.id);
    res.json(VuelosPorId);
});

router.post('/Flgts/', async (req,res)=>{
    const {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    } = req.body;
    const NuevoVuelo = new flightModel({
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    });
    await NuevoVuelo.save();
    res.json({status:'Flight saved'});
});

router.put('/Flgts/:id', async (req,res)=>{
    const {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    } = req.body;
    const ActualizarVuelo = {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio  
    };
    await flightModel.findByIdAndUpdate(req.params.id, ActualizarVuelo);
    res.json({status:'Flight updated'});
});

router.delete('/Flgts/:id', async (req,res)=>{
    await flightModel.findByIdAndRemove(req.params.id);
    res.json({status:'Flight deleted'});
});


/////////////////////////////////

router.get('/Permissions/', async (req,res)=>{
    const TodosLosPermisos = await permissionsModel.find();
    res.json(TodosLosPermisos);
}
);

router.get('/Permissions/:id', async (req,res)=>{
    const PermisosPorId = await permissionsModel.findById(req.params.id);
    res.json(PermisosPorId);
});

router.post('/Permissions/', async (req,res)=>{
    const {
        P_Numero, P_UserName, 
        P_Date, P_For_Airports, P_For_Flights, 
        P_For_Usernames, status
    } = req.body;
    const NuevoPermiso = new permissionsModel({
        P_Numero, P_UserName, 
        P_Date, P_For_Airports, P_For_Flights, 
        P_For_Usernames, status
    });
    await NuevoPermiso.save();
    res.json({status:'Permission saved'});
});

router.put('/Permissions/:id', async (req,res)=>{
    const {
        P_Numero, P_UserName, 
        P_Date, P_For_Airports, P_For_Flights, 
        P_For_Usernames, status
    } = req.body;
    const ActualizarPermiso = {
        P_Numero, P_UserName, 
        P_Date, P_For_Airports, P_For_Flights, 
        P_For_Usernames, status
    };
    await permissionsModel.findByIdAndUpdate(req.params.id, ActualizarPermiso);
    res.json({status:'Permission updated'});
});

//////////////////////////////

router.get('/User/', async (req,res)=>{
    const TodosLosUsuarios = await userModel.find();
    res.json(TodosLosUsuarios);
}
);

router.get('/User/:id', async (req,res)=>{
    const UsuarioPorId = await userModel.findById(req.params.id);
    res.json(UsuarioPorId);
});

router.post('/User/', async (req,res)=>{
    const {
        first_name, last_name,
        email, role, telephone,
        password
    } = req.body;
    const NuevoUsuario = new userModel({
        first_name,
        last_name,
        email,
        role,
        telephone,
        password
    });
    await NuevoUsuario.save();
    res.json({status:'User saved'});
});

router.put('/User/:id', async (req,res)=>{
    const {
        first_name,
        last_name,
        email,
        role,
        telephone,
        password
    } = req.body;
    const ActualizarUsuario = {
        first_name,
        last_name,
        email,
        role,
        telephone,
        password
    };
    await userModel.findByIdAndUpdate(req.params.id, ActualizarUsuario);
    res.json({status:'User updated'});
});


router.delete('/User/:id', async (req,res)=>{
    await userModel.findByIdAndRemove(req.params.id);
    res.json({status:'User deleted'});
});

///////////////////////////////


router.get('/Clnts/', async (req,res)=>{
    const TodosLosClientes = await clientModel.find();
    res.json(TodosLosClientes);
}
);

router.get('/Client/:id', async (req,res)=>{
    const ClientePorId = await clientModel.findById(req.params.id);
    res.json(ClientePorId);
});

router.post('/Clnts/', async (req,res)=>{
    const {
        first_name, last_name,
        email, role, phone,
        password
    } = req.body;
    const NuevoCliente = new clientModel({
        first_name,
        last_name,
        email,
        role,
        phone,
        password
    });
    await NuevoCliente.save();
    res.json({status:'Client saved'});
});

router.put('/Clnts/:id', async (req,res)=>{
    const {
        first_name,
        last_name,
        email,
        role,
        phone,
        password
    } = req.body;
    const ActualizarCliente = {
        first_name,
        last_name,
        email,
        role,
        phone,
        password
    };
    await clientModel.findByIdAndUpdate(req.params.id, ActualizarCliente);
    res.json({status:'Client updated'});
});


router.delete('/Clnts/:id', async (req,res)=>{
    await clientModel.findByIdAndRemove(req.params.id);
    res.json({status:'Client deleted'});
});

/////////////////////////////

router.get('/Cards/', async (req,res)=>{
    const TodasLasCartas = await CardsModel.find();
    res.json(TodasLasCartas);
}
);

router.get('/Cards/:id', async (req,res)=>{
    const CartasPorId = await CardsModel.findById(req.params.id);
    res.json(CartasPorId);
});

router.post('/Cards/', async (req,res)=>{
    const {Ap_Number, Ap_Type, Ap_Exp_Month, Ap_Exp_Year, Ap_CSV, Ap_Name, Ap_Customer_ID} = req.body;
    const NuevaCarta = new CardsModel({Ap_Number, Ap_Type, Ap_Exp_Month, Ap_Exp_Year, Ap_CSV, Ap_Name, Ap_Customer_ID});
    await NuevaCarta.save();
    res.json({status:'Card saved'});
});

router.put('/Cards/:id', async (req,res)=>{
    const {Ap_Number, Ap_Type, Ap_Exp_Month, Ap_Exp_Year, Ap_CSV, Ap_Name, Ap_Customer_ID} = req.body;
    const ActualizarCarta = {Ap_Number, Ap_Type, Ap_Exp_Month, Ap_Exp_Year, Ap_CSV, Ap_Name, Ap_Customer_ID};
    await CardsModel.findByIdAndUpdate(req.params.id, ActualizarCarta);
    res.json({status:'Card updated'});
});

router.delete('/Cards/:id', async (req,res)=>{
    await CardsModel.findByIdAndRemove(req.params.id);
    res.json({status:'Card deleted'});
});




module.exports = router;