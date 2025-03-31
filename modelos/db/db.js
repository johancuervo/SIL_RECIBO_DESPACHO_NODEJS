import {MongoClient} from 'mongodb'
import { decrypt } from '../../middleware/cors.js';
import dotenv from "dotenv";
import 'dotenv/config';
dotenv.config();
if (!process.env?.DATABASE_URL || !process.env?.SECRET_KEY) {
  throw new Error("❌ Missing required environment variables: DATABASE_URL or SECRET_KEY");
}
const uri = decrypt(process.env.DATABASE_URL,process.env.SECRET_KEY);
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