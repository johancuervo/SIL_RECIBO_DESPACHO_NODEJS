import { Router } from "express";
import { UsuarioController } from "../../controllers/usuario.controller.js";
import { ReciboController } from "../../controllers/recibo.controller.js";
import { InventarioController } from "../../controllers/inventario.controller.js";
import { DespachoController } from "../../controllers/despacho.controller.js";
export const gestionRouter = ({ reciboModel,inventarioModel,usuarioModel,despachoModel }) => {
  const gestionRouter = Router();
  const reciboController=new ReciboController({reciboModel});
  const inventarioController=new InventarioController({inventarioModel});
  const usuarioController=new UsuarioController({usuarioModel});
  const despachoController=new DespachoController({despachoModel});
  gestionRouter.get("/Productos/Stock/", inventarioController.consultarStock);
  gestionRouter.post("/Usuarios/Registro/", usuarioController.crearUsuario);
  gestionRouter.post("/Usuarios/Login/", usuarioController.login);
  gestionRouter.post("/Recibo/ReciboProductos/", reciboController.reciboProducto);
  gestionRouter.get("/Despacho/Orden/:id", despachoController.consultarDespacho);
  
  return gestionRouter;
};
