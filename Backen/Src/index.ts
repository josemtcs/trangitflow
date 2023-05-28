import express from 'express';
import cors from 'cors';

import AnimalRouter from './routes/ANIMAL.router';
const app= express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/animal',AnimalRouter)

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`);
});