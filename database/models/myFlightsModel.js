const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let myFlightsSchema = new Schema({
    vueloId: {type:String, required:true,},
    userId: {type: String, required:true,},
    seat: {type: String, required:true,},
});

module.exports=mongoose.model('myFlights', myFlightsSchema);//collection airports