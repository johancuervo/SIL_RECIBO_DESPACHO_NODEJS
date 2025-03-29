import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import productDocs from "./docs/product-docs.js";

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Recibo y Despacho",
        version: "1.0.0",
        description: "API para gestionar la recepción y despacho de productos en el almacén",
      },
      tags: [
        {
          name: "Recibo", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión de productos",
        },
        {
          name: "Despacho", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión de productos",
        }
      ],
      paths: {
        ...productDocs, // Agregamos la documentación de productos
      },
    },
    apis: ["./routes/*.js"], // Archivos donde se definen las rutas
  };

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default setupSwagger;