/**
 * Configuración de conexión a MongoDB
 */

// js/db.js
const { MongoClient } = require('mongodb');

var database;

async function connectToDatabase() {
    const uri = 'mongodb+srv://almaypapa0304:almaypapa0304@qcomemos.bpclx.mongodb.net/?retryWrites=true&w=majority&appName=QComemos';  
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Conexión exitosa a MongoDB');
        database = client.db('QComemos');  //  nombre de la base de datos 
        return database;
    } catch (error) {
        console.error('Error al conectarse a MongoDB:', error);
        throw error;
    }
}

function getDatabase() {
    return database;
}

module.exports = { connectToDatabase, getDatabase };

