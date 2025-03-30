import express, { json } from "express";
import { gestionRouter } from "./routes/gestion/gestion.js";
import { corsMiddleware } from "./middleware/cors.js";
import setupSwagger from "./config/swagger.js";
import cookieParser from 'cookie-parser'
export const createApp = ({ gestionModel }) => {

  const app = express();
  app.use(cookieParser());
  app.use(express.static("public"));
  app.use(json());
  app.use(corsMiddleware());
  app.disable("x-powered-by");

  app.use("/api", gestionRouter({ gestionModel }));
  setupSwagger(app);
  app.get("/", (req, res) => {
    res.redirect("/swagger");
  });
  const PORT = process.env.PORT ?? 1234;
  app.listen(PORT, () => {
    console.log("server listening on port http://localhost:" + PORT);
  });
};
