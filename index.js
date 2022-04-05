console.log('desde indeex.js');

const express = require('express');
const conectarDB = require('./config/db')


//creamos el servidor
const app = express (); 

// conectamos a la DB
conectarDB();
app.use(express.json());

app.use('/api/validaUsuario/v1/valida', require ('./routes/users'));


app.listen(8080, () => {
    console.log('Server run successfully');

})
