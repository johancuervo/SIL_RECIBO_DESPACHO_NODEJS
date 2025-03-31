import { validarProducto } from "../esquemas/product.js";
export class ReciboController {
  constructor({ reciboModel }) {
    this.reciboModel = reciboModel;
  }
  reciboProducto = async (req, res) => {
    const result = validarProducto(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.errors });
    }
    const newRegister = await this.reciboModel.reciboProductos({ input: result.data });
    res.status(201).json(newRegister);
  };
}
