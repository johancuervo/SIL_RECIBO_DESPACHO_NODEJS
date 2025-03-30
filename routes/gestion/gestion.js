import { Router } from "express";
import { GestionController } from "../../controllers/gestion/gestion.js";
export const gestionRouter = ({ gestionModel }) => {
  const gestionRouter = Router();
  const gestionCotroller = new GestionController({ gestionModel });
  gestionRouter.get("/Productos/Stock/", gestionCotroller.getAll);
  gestionRouter.post("/Usuarios/Register/", gestionCotroller.register);
  gestionRouter.post("/Usuarios/Login/", gestionCotroller.login);
  gestionRouter.post("/Recibo/ReciboProductos/", gestionCotroller.create);
  gestionRouter.get("/Despacho/Shipments/:id", gestionCotroller.getById);
  
  return gestionRouter;
};
