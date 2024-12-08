import { app } from "./app";
import { database } from "./db";
import dotenv from "dotenv";

dotenv.config()

database()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("application is listening at ",`${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("connection failed",err)
})
