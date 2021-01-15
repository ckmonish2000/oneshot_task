// imports
require("dotenv").config({path: __dirname + '/.env'})
const app=require("express")();
const bodyParser=require("body-parser");
const mongoose=require("mongoose")


// variables
let PORT=process.env.PORT || 5000;

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



// db connection
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const connection= mongoose.connection;
connection.on("open",()=>console.log("connected to db"))





// listen
app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})