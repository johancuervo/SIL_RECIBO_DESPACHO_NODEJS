import { validateProduct } from "../../Sheme/product.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config';
export class GestionController {
  constructor({ gestionModel }) {
    this.gestionModel = gestionModel;
  }
  create = async (req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.errors });
    }
    const newRegister = await this.gestionModel.create({ input: result.data });
    res.status(201).json(newRegister);
  };

  getAll=async(req,res)=>{
    const stock= await this.gestionModel.getAll();
    if(stock) return res.json(stock)
      res.status(404).json({message:"Sin Stock"})
  }
  getById = async (req, res) => {
    const { id } = req.params;
    const despachos = await this.gestionModel.getById({ id });
    if (despachos) return res.json(despachos);
    res.status(404).json({ message: "Despacho no encontrado" });
  };
  register = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
      const id = await this.gestionModel.createUser({ username, password });
      res.send({ id });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  login = async (req, res) => {
    const { username, password } = req.body
    try {
      const user = await this.gestionModel.login({ username, password })
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_JWT_KEY, {
        expiresIn: '1h'
      })
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      }).send({ user, token })
    } catch (error) {
      res.status(401).send(error.message)
    }
  }
}
