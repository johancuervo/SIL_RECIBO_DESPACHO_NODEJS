import connectDB from "./db/db.js";
const db = await connectDB();
export class DespachoModel {
   static async consultarEstadoDespacho({ id }) {
      if (!db) throw new Error("❌ Error: db no está definido");
  
      try {
        const despachos = await db
          .collection("Despachos")
          .find({ orden_id: id })
          .project({ orden_id: 1, estado: 1, _id: 0 }) 
          .toArray(); 
  
        if (!despachos.length) {
          return null; // Si no hay resultados, devuelve null
        }
  
        return despachos;
      } catch (error) {
        console.error("Error al obtener el despacho por ID", error);
        throw error;
      }
    }
}
