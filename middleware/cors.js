import cors from "cors";
const ACCEPTED_ORIGINS = ["http://localhost:8080", "http://localhost:1234","https://localhost:1234","https://sil-recibo-despacho-nodejs-f4t3apttd-johancuervos-projects.vercel.app"];
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  });
