import connectDB from "./db/db.js";
const db = await connectDB();
export class InventarioModel {
  static async consultarStock() {
    if (!db) throw new Error("❌ Error: db no está definido");

    try {
      const stock = await db
        .collection("Products").find().project({_id:0})
        .toArray(); 

      if (!stock.length) {
        return null; // Si no hay resultados, devuelve null
      }

      return stock;
    } catch (error) {
      console.error("Error al obtener Stock", error);
      throw error;
    }
  }
}
