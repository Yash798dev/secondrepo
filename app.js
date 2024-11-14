const expross=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=expross()
const port=3000;
const authRoutes=require("./routes/auth");
const {verifyToken,isAdmin}=require("./middleware/auth-middleware")

app.use(cors());
app.use(expross.json());
app.get("/",(req,res)=>{
    res.send("Server Running");
})


app.use("/auth",authRoutes);


async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017",{
        dbName:"infosys"
    });
    console.log("MongoDb connected");
}
connectDb().catch((err)=>{
    console.error(err);
})

app.listen(port,()=>{
    console.log("server running in port",port);
})
