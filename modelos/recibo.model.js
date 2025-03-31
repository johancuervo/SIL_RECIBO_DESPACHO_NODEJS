import connectDB from "./db/db.js";
const db = await connectDB();
export class ReciboModel {
  static async reciboProductos({ input }) {
    if (!db) throw new Error("❌ Error: db no está definido");
    try {
      const {
        sku,
        descripcion,
        categoria,
        codigoBarras,
        peso,
        volumen,
        cantidad,
        packQuantity,
        fechaRecepcion,
        estado,
        observaciones,
      } = input;
      // Insertar el registro en la coleccion products
      const result = await db.collection("recepcion_productos").insertOne({
        sku,
        descripcion,
        categoria,
        codigoBarras,
        peso,
        volumen,
        cantidad,
        packQuantity,
        fechaRecepcion,
        estado,
        observaciones,
        createdAt: new Date(),
      });

      // Obtener el documento recién insertado
      const newRegister = await db
        .collection("recepcion_productos")
        .findOne({ _id: result.insertedId });

      return newRegister;
    } catch (error) {
      console.error("Error al crear la recepcion del producto:", error);
      throw error;
    }
  }
}
