import { comparePassword, hashPassword } from "../helpers/encripcion.js";
import connectDB from "./db/db.js";

const db = await connectDB();
export class UsuarioModel {

 static async crearUsuario({ username, password }) {
    // Asegurarnos que el usuario no exista
    const user = await db.collection("Usuarios").findOne({ username: username });
    if (user) throw new Error("este nombre de usuario ya existe");
    const hasdedPassword = await hashPassword(password)
    const result = await db.collection("Usuarios").insertOne({
      username,
      password: hasdedPassword,
      createdAt: new Date(), 
    });
   
    return { username } = result;
  }
  static async login ({ username, password }) {
    const user = await db.collection("Usuarios").findOne({ username: username });
    if (!user) throw new Error('Usuario no existe')
    const isValid = await comparePassword(password,user.password)
    if (!isValid) throw new Error('la contrasena no es valida')
    const { password: _, ...publicUser } = user
    return publicUser
  }
}


