import express from 'express';
import PersonaRouter from './routes/persona.router';
const app= express();
const port = 3000;

app.use(express.json());
app.use('')

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`);
});