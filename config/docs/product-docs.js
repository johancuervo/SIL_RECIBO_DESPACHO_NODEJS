const productDocs = {
  "/api/Productos/Stock/": {
    get: {
      tags: ["Productos"],
      summary: "Stock de productos",
      description: "Stock de productos",
      parameters: [],
      responses: {
        201: {
          description: "Se encontraron el siguiente Stock",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  sku: { type: "string", example: "SKU-001" },
                  nombre: { type: "string", example: "Laptop Dell XPS 13" },
                  categoria: { type: "string", example: "Electrónica" },
                  codigo_barras: { type: "string", example: "7501111222233" },
                  cantidad_disponible: { type: "integer", example: 50 },
                  unidades_bloqueadas: { type: "integer", example: 10 },
                  unidades_totales: { type: "integer", example: 60 },
                  unidad_medida: { type: "string", example: "unidad" },
                  ubicacion_almacen: {
                    type: "object",
                    properties: {
                      pasillo: { type: "string", example: "A" },
                      estante: { type: "integer", example: 3 },
                      seccion: { type: "string", example: "Electrónica" },
                    },
                  },
                  proveedor: {
                    type: "object",
                    properties: {
                      nombre: { type: "string", example: "Tech Supplier Inc." },
                      contacto: { type: "string", example: "contacto@techsupplier.com" },
                      telefono: { type: "string", example: "+1-555-1234" },
                    },
                  },
                  fecha_entrada: { type: "string", format: "date-time", example: "2025-03-25T10:00:00Z" },
                  fecha_salida_estimada: { type: "string", format: "date-time", example: null },
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
  "/api/Usuarios/Registro/": {
    post: {
      tags: ["Usuarios"],
      summary: "Registrar un nuevo usuario",
      description: "Registra un nuevo usuario",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["username", "password"],
              properties: {
                username: { type: "string", example: "user123" },
                password: {
                  type: "string",
                  example: "P@ssw0rd123",
                  minLength: 8,
                  maxLength: 128,
                  pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Usuario Creado exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string", example: "user123" },
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
  "/api/Usuarios/Login/": {
    post: {
      tags: ["Usuarios"],
      summary: "Iniciar sesión de usuario",
      description: "Inicia sesión con credenciales válidas",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["username", "password"],
              properties: {
                username: { type: "string", example: "user123" },
                password: {
                  type: "string",
                  example: "P@ssw0rd123",
                  minLength: 8,
                  maxLength: 128,
                  pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Usuario Logueado Correctamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string", example: "" },
                  createdAt: { type: "string", example: "" },
                  token: { type: "string", example: "" },
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
                sku: { type: "string", example: "SKU-001" },
                descripcion: { type: "string", example: "Laptop Dell XPS 13" },
                categoria: { type: "string", example: "Electrónica" },
                codigoBarras: { type: "string", example: "7501111222233" },
                peso: { type: "number", format: "float", example: 1.5 },
                volumen: { type: "number", format: "float", example: 0.03 },
                cantidad: { type: "integer", example: 10 },
                packQuantity: { type: "integer", example: 5 },
                fechaRecepcion: { type: "string", format: "date-time", example: "2025-03-27T10:30:00Z" },
                estado: { type: "string", example: "Recibido" },
                observaciones: { type: "string", example: "Sin daños" },
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
                type: "object",
                properties: {
                  sku: { type: "string", example: "SKU-001" },
                  descripcion: { type: "string", example: "Laptop Dell XPS 13" },
                  categoria: { type: "string", example: "Electrónica" },
                  codigoBarras: { type: "string", example: "7501111222233" },
                  peso: { type: "number", format: "float", example: 1.5 },
                  volumen: { type: "number", format: "float", example: 0.03 },
                  cantidad: { type: "integer", example: 10 },
                  packQuantity: { type: "integer", example: 5 },
                  fechaRecepcion: { type: "string", format: "date-time", example: "2025-03-27T10:30:00Z" },
                  estado: { type: "string", example: "Recibido" },
                  observaciones: { type: "string", example: "Sin daños" },
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
  "/api/Despacho/Orden/{id}": {
    get: {
      tags: ["Despacho"],
      summary: "Obtiene el estado de una orden despachada",
      description: "Devuelve el estado de una orden de acuerdo a su id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID de la orden",
          schema: { type: "string", example: "OD-20250328-003" },
        },
      ],
      responses: {
        200: {
          description: "Orden encontrada",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    order_id: { type: "string", example: "ORD-12345" },
                    estado: { type: "string", example: "En tránsito" },
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
