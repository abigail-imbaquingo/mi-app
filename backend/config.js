// config.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conexión a MongoDB exitosa');
    } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
    process.exit(1); // Detiene la app si no se conecta
    }
};

module.exports = connectDB;
