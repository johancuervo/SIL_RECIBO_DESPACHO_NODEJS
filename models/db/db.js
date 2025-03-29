import {MongoClient} from 'mongodb'

const uri = "mongodb+srv://CUEM02:C1udadJarab3@cluster0.xkb5dba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
      console.log("✅ Conectado a MongoDB Atlas");
    }
    return client.db("WMS"); // Cambia "miBD" por el nombre de tu BD
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    throw error;
  }
}

export default connectDB;