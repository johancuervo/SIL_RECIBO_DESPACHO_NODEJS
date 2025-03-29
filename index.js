import express, { json } from "express";
import { productRouter } from "./routes/products/products.js";
import { corsMiddleware } from "./middleware/cors.js";
import setupSwagger from "./config/swagger.js";
export const createApp = ({ productModel }) => {
  const app = express();
  app.use(express.static("public"));
  app.use(json());
  app.use(corsMiddleware());
  app.disable("x-powered-by");

  app.use("/api", productRouter({ productModel }));
  setupSwagger(app);
  const PORT = process.env.PORT ?? 1234;
  app.listen(PORT, () => {
    console.log("server listening on port http://localhost:" + PORT);
  });
};
