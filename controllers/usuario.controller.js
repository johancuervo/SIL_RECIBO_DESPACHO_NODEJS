import jwt from 'jsonwebtoken'
import 'dotenv/config';
import { validarUsuario } from "../esquemas/usuarios.js";
export class UsuarioController {
  constructor({ usuarioModel }) {
    this.usuarioModel = usuarioModel;
  }
  crearUsuario = async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = validarUsuario({ username, password });
      if (result.error) {
        return res.status(400).json({ message: result.error.errors });
      }
      const id = await this.usuarioModel.crearUsuario({ username, password });
      res.send({ id });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  login = async (req, res) => {
    const { username, password } = req.body
    try {
      const user = await this.usuarioModel.login({ username, password })
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_JWT_KEY, {
        expiresIn: '1h'
      })
      res.cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      }).send({ user, token })
    } catch (error) {
      res.status(401).send(error.message)
    }
  }
}
