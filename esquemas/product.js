import z from "zod";
const productoEsquema = z.object({
    sku: z.string({
      required_error: "sku es requerido",
      invalid_type_error: "sku debe ser un string",
    }),
    descripcion:z.string({
      required_error: "Descripcion es requerida",
      invalid_type_error: "Descripcion debe ser un string",
    }),
    categoria:z.string(),
    codigoBarras:z.string({
      required_error: "codigo de barras es requerido",
      invalid_type_error: "codigo de barras no puede ser string",
    }),
    peso:z.number({
      required_error: "peso es requerido",
      invalid_type_error: "peso debe ser numero",
    }).min(0).max(100),
    volumen:z.number({
      required_error: "volumen es requerido",
      invalid_type_error: "volumen debe ser un numero",
    }),
    cantidad:z.number({
      required_error: "cantidad es requerido",
      invalid_type_error: "cantidad debe ser un numero",
    }),
    fechaRecepcion:z.string({
      required_error: "fechaRecepcion es requerido",
      invalid_type_error: "fechaRecepcion debe ser un string",
    }),
    packQuantity:z.number(),
    estado:z.string({
      required_error: "estado es requerido",
      invalid_type_error: "estado debe ser un string",
    }),
    observaciones:z.string()
  });
export function validarProducto(producto){
    return productoEsquema.safeParse(producto);
}
