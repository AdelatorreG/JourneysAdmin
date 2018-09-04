const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let CardsSchema = new Schema({
    Ap_Number:{type:String, required:true},
    Ap_Type:{type:String, requiered:true,},
    Ap_Exp_Month:{type:String, requiered:true,},
    Ap_Exp_Year:{type:String, requiered:true,},
    Ap_CSV:{type:String, requiered:true,},
    Ap_Name:{type:String, required:true},
    Ap_Customer_ID:{type:String, requiered:true,}
});


module.exports=mongoose.model('Cards',CardsSchema);//collection airports