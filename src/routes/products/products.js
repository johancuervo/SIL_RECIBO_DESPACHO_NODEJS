import { Router } from "express";
import { ProductController } from "../../controllers/products/products.js";
export const productRouter = ({ productModel }) => {
  const productsRouter = Router();
  const productsCotroller = new ProductController({ productModel });
  productsRouter.post("/Recibo/ReciboProductos/", productsCotroller.create);
  productsRouter.get("/Despacho/Shipments/:id", productsCotroller.getById);
  return productsRouter;
};
