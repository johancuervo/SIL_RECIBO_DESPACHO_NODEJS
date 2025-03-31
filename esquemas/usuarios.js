import z from "zod";

// Esquema para validar username y password
const userValidationSchema = z.object({
    username: z.string()
        .min(3, { message: "el nombre de usuario debe tener al menos 3 caracteres" }),
    password: z.string()
        .min(6, { message: "la contraseña debe tener al menos 6 caracteres" }),
});

export function validarUsuario(usuario) {
  const result = userValidationSchema.safeParse(usuario);
  if (!result.success) {
    throw new Error(result.error.errors.map(err => err.message).join(", "));
  }
  return result.data;
}