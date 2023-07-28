const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

/* configuraciones */
app.use(express.static('./public'));
app.use(express.static('./views'));

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'/views/register.html')));
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'/views/login.html')));
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'/views/404.html')));


app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));

