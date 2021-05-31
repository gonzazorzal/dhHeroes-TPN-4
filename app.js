const express= require ('express');
const app = express();
const port = 3000;
const path = require('path');
console.log(__dirname);

app.listen(port, ()=> console.log('Servidor corriendo en el puerto ' + port));
app.get('/', (req,res) => res.send('HOME'))

