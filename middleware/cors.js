import cors from "cors";
import crypto from "crypto";
const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost:1234",
  "https://localhost:1234",
  "https://sil-recibo-despacho-nodejs-f4t3apttd-johancuervos-projects.vercel.app",
  "https://sil-recibo-despacho-nodejs-mcsd8ab8l-johancuervos-projects.vercel.app",
  "sil-recibo-despacho-nodejs-dos111eat-johancuervos-projects.vercel.app"
];
export const corsMiddleware = ({ acceptedOrigins = '*' } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins === '*' || acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

export const decrypt = (encryptedText, secretKey) => {
  const key = Buffer.from(secretKey, "hex");
  const [iv, encrypted] = encryptedText.split(":");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
