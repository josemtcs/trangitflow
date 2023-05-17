import express from 'express';
import PersonaRouter from './routes/ANIMAL.router';
const app= express();
const port = 3000;

app.use(express.json());
app.use('/api/persona',PersonaRouter)

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`);
});