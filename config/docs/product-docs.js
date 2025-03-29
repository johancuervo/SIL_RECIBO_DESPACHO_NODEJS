import { request } from "express";

const productDocs = {
    "/api/Recibo/ReciboProductos": {
      post: {
        tags: ["Recibo"], 
        summary: "Registrar un nuevo producto recibido",
        description: "Agrega un producto con sus detalles de recepción",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "sku",
                  "descripcion",
                  "categoria",
                  "codigoBarras",
                  "peso",
                  "volumen",
                  "cantidad",
                  "packQuantity",
                  "fechaRecepcion",
                  "estado",
                ],
                properties: {
                  sku: { type: "string", example: "" },
                  descripcion: { type: "string", example: "" },
                  categoria: { type: "string", example: "" },
                  codigoBarras: { type: "string", example: "" },
                  peso: { type: "number", format: "float", example: 0 },
                  volumen: { type: "number", format: "float", example: 0.0 },
                  cantidad: { type: "integer", example: 0 },
                  packQuantity: { type: "integer", example: 0 },
                  fechaRecepcion: { type: "string", format: "date-time", example: "2025-03-27T10:30:00Z" },
                  estado: { type: "string", example: "" },
                  observaciones: { type: "string", example: "" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Producto registrado exitosamente",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                  require:"id",
                  properties: {
                    order_id: { type: "string", example: "" },
                    estado: { type: "string", example: "" },
                  },
                },
              },
            },
          },
          400: {
            description: "Datos de entrada no válidos",
          },
        },
      },

    },
    "/api/Despacho/Shipments/{id}": {
      get: {
        tags: ["Despacho"], // Agrupa este endpoint en la sección "Productos"
        summary: "Obtiene el estado de un shipment",
        description: "Devuelve el estado de un shipment de acuerdo a su id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "Shipment",
            schema: { type: "string", example: "" },
          },
        ],
        responses: {
          200: {    
            description: "Shipment encotrado",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      order_id: { type: "string", example: "" },
                      estado: { type: "string", example: "" }
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  export default productDocs;