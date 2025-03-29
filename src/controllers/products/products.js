import { validateProduct } from "../../Sheme/products.js";

export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel;
  }
  create = async (req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.errors });
    }
    const newProduct = await this.productModel.create({ input: result.data });
    res.status(201).json(newProduct);
  };
  getById = async (req, res) => {
    const { id } = req.params;
    const despachos = await this.productModel.getById({ id });
    if (despachos) return res.json(despachos);
    res.status(404).json({ message: "Despacho no encontrado" });
  };
}
