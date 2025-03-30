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
          name: "Productos", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión de productos",
        },
        {
          name: "Recibo", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión del Recibo",
        },
        {
          name: "Despacho", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión del despacho",
        },
        {
          name: "Usuarios", // Nombre del grupo en Swagger UI
          description: "Endpoints relacionados con la gestión de los usuarios",
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
  app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec, {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-standalone-preset.min.js'
    ],
    explorer: true
  }));
};

export default setupSwagger;