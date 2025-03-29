import z from "zod";
const productShema = z.object({
    sku: z.string({
      required_error: "sku is required",
      invalid_type_error: "sku must be a string",
    }),
    descripcion:z.string({
      required_error: "Descripcion is required",
      invalid_type_error: "Descripcion must be a string",
    }),
    categoria:z.string(),
    codigoBarras:z.string({
      required_error: "codigo de barras is required",
      invalid_type_error: "codigo de barras must be a string",
    }),
    peso:z.number({
      required_error: "peso is required",
      invalid_type_error: "peso must be a string",
    }).min(0).max(100),
    volumen:z.number({
      required_error: "volumen is required",
      invalid_type_error: "volumen must be a number",
    }),
    cantidad:z.number({
      required_error: "cantidad is required",
      invalid_type_error: "cantidad must be a number",
    }),
    fechaRecepcion:z.string({
      required_error: "fechaRecepcion is required",
      invalid_type_error: "fechaRecepcion must be a string",
    }),
    packQuantity:z.number(),
    estado:z.string({
      required_error: "estado is required",
      invalid_type_error: "estado must be a string",
    }),
    observaciones:z.string()
  });
export function validateProduct(product){
    return productShema.safeParse(product);
}