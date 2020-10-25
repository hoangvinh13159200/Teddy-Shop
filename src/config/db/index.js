const mongoose = require('mongoose')

async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/Teady', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
        });
        console.log("Connect Successfully")
    }
    catch(error){
        console.log("Connect error")
    }
}

module.exports  = {connect};