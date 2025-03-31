import { createApp } from "./index.js";
import { UsuarioModel } from "./modelos/usuario.model.js";
import { InventarioModel } from "./modelos/inventario.model.js";
import { ReciboModel } from "./modelos/recibo.model.js";
import { DespachoModel } from "./modelos/despacho.model.js";
createApp({reciboModel:ReciboModel,inventarioModel:InventarioModel,usuarioModel:UsuarioModel,despachoModel:DespachoModel});