import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import productRoutes from './routes/productsRoutes.js'


const app = express()


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))




const DB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: process.env.HEROKU_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: false
}));

app.use('/product', productRoutes)




mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port`)))
  .catch((error) => console.log(`${error} did not connect`));


mongoose.set('useFindAndModify', false);