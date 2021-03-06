// imports
require("dotenv").config({path: __dirname + '/.env'})
const app=require("express")();
const bodyParser=require("body-parser");
const mongoose=require("mongoose")
const College=require("./routers/college")
const Student=require("./routers/student")
const cors=require("cors")

// variables
let PORT=process.env.PORT || 5000;

// middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// routes
app.use("/college",College)
app.use("/student",Student)
app.get("/",(req,res)=>{res.send("welcome to odin Revolution")})


// db connection
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const connection= mongoose.connection;
connection.on("open",()=>console.log("connected to db"))





// listen
app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})