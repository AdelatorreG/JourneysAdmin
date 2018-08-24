const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let UserSchema = new Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, requiered:true,},
    email:{type:String, requiered:true,},
    role:{type:String, requiered:true,},
    telephone:{type:String, requiered:true,},
    password:{type:String, required:true}
});


module.exports=mongoose.model('Users',UserSchema);//collection airports