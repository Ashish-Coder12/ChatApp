import express from "express";
import * as Users from "./Data/data.js";
import * as Accounts from "./Data/users.js";
import 'dotenv/config'
import cors from "cors";

const app  = express()
const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/api/users', (req, res) => {
    res.send(Users)
  })
  app.post('/authenticate', (req, res) => {
    try {
      console.log(req.body);
      const { username, password } = req.body;
      const data = Accounts.Accounts
      const user = data.find(u => u.username == username && u.password == password);
      if (user) {
        res.status(200).json({ status: 'success', unique_id: user.unique_id });
      } else {
        res.status(401).json({ status: 'failed', message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ status: 'error', message: "Internal server Error" });
    }   
  });

app.listen(process.env.PORT ,()=>{
    console.log(`server is running on port : ${process.env.PORT}`);
})