import connectDB from "../db/db.js";
const db = await connectDB();
export class ProductModel {
  static async getById({ id }) {
    if (!db) throw new Error("❌ Error: db no está definido");

    try {
        const despachos = await db
            .collection("Despachos")
            .find({ orden_id: id })
            .project({ orden_id: 1, estado: 1, _id: 0 }) // Corrección en la proyección
            .toArray(); // Convertir a un array

        if (!despachos.length) {
            return null; // Si no hay resultados, devuelve null
        }

        return despachos;
    } catch (error) {
        console.error("Error al obtener el despacho por ID", error);
        throw error;
    }
}
  static async create({input}) {
    if (!db) throw new Error("❌ Error: db no está definido");
    try {
      const { sku, description, categoria, codigoBarras, peso, volumen,cantidad,packQuantity,fechaRecepcion,estado,observaciones } = input;
      console.log(input)
      // Insertar la película en la colección "movies"
      const result = await db.collection("Products").insertOne({
        sku,
        description,
        categoria,
        codigoBarras,
        peso,
        volumen,
        cantidad,
        packQuantity,
        fechaRecepcion,
        estado,
        observaciones,
        createdAt: new Date(), // Opcional: marca de tiempo
      });

      // Obtener el documento recién insertado
      const newMovie = await db.collection("Products").findOne({ _id: result.insertedId });

      return newMovie;
    } catch (error) {
      console.error("Error al crear la película:", error);
      throw error;
    }
  }
}
