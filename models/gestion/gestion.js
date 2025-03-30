import connectDB from "../db/db.js";
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../../config/config.js'
const db = await connectDB();
export class GestionModel {
  static async getAll() {
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
  static async getById({ id }) {
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
  static async create({ input }) {
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
      console.log(input);
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
  static async createUser({ username, password }) {
    Validation.username(username);
    Validation.password(password);
    // Asegurarnos que el usuario no exista
    const user = await db.collection("Users").findOne({ username: username });
    console.log(user)
    if (user) throw new Error("username alredy exists");
    const hasdedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const result = await db.collection("Users").insertOne({
      username,
      password: hasdedPassword,
      createdAt: new Date(), 
    });
   
    return { username } = result;
  }
  static async login ({ username, password }) {
    Validation.username(username)
    Validation.password(password)
    const user = await db.collection("Users").findOne({ username: username });
    if (!user) throw new Error('Username does not exist')
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('Password is not valid')
    const { password: _, ...publicUser } = user
    return publicUser
  }
}

class Validation {
  static username(username) {
    if (typeof username !== "string")
      throw new Error("username must be a string");
    if (username.length < 3)
      throw new Error("username must be a least 3 characters long");
  }
  static password (password) {
    if (typeof password !== 'string') throw new Error('username must be a string')
    if (password.length < 6) throw new Error('username must be a least 6 characters long')
  }
}
