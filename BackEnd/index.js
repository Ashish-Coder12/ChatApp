import express from "express";
import * as Users from "./Data/data.js";
import 'dotenv/config'
import { cors } from "cors";

const app  = express()

var corsOptions = {
  origin: 'https://picochat.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/api/users', cors(corsOptions), (req, res) => {
    res.send(Users)
  })
app.get('/api/pawan', cors(corsOptions),(req, res) => {
    res.send("HII Pawan")
  })


app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port : ${process.env.PORT}`);
})