import express from "express";
import * as Users from "./Data/data.js";
import 'dotenv/config'

const app  = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/api/users', (req, res) => {
    res.send(Users)
  })
app.get('/api/pawan', (req, res) => {
    res.send("HII Pawan")
  })


app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port : ${process.env.PORT}`);
})