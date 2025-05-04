const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mi-app', 
    { /*useNewUrlParser: true,
        //useUnifiedTopology: true,*/
        serverSelectionTimeoutMS: 30000
    });

// Modelo de usuario (ejemplo)
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', userSchema, 'users');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
    const users = await User.find();
    console.log('Usuarios obtenidos de MongoDB:', users);
    res.json(users);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});