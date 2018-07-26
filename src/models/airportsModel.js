const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let AirportSchema = new Schema({
    Ap_Name:{type:String, requiered:true,},
    Ap_Country:{type:String, requiered:true,},
    Ap_State:{type:String, requiered:true,},
    Ap_City:{type:String, requiered:true,},
    Ap_Address:{type:String, required:true}
});

module.exports=mongoose.model('Airports',AirportSchema);//collection airports