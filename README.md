# API de Recepción y Despacho - Centro de Distribución

## Descripción

Esta API permite gestionar el proceso de recepción y despacho de productos en un centro de distribución. Proporciona endpoints para registrar la recepción de productos, gestionar inventarios y coordinar el despacho de órdenes.

---

## Tecnologías

- **Lenguaje:** JavaScript
- **Framework:** Express
- **Base de Datos:** PostgreSQL
- **Autenticación:** JWT
- **Arquitectura:** REST

---

## Endpoints Principales

### 1. Autenticación

#### Login

**POST** `/api/auth/login`

```json
{
  "username": "usuario",
  "password": "contraseña"
}
```

#### Registro de Usuario

**POST** `/api/auth/register`

```json
{
  "username": "nuevo_usuario",
  "password": "contraseña",
  "role": "admin"
}
```

---

### 2. Recepción de Productos

#### Registrar Recepción

**POST** `/api/Recibo/ReciboProductos`

```json
{
  "sku": "SKU-112233",
  "descripcion": "Teléfono inteligente 128GB",
  "categoria": "Electrónica",
  "codigoBarras": "7501122334455",
  "peso": 0.5,
  "volumen": 0.002,
  "cantidad": 100,
  "packQuantity": 10,
  "fechaRecepcion": "2025-03-24T16:00:00Z",
  "estado": "En revisión",
  "observaciones": "Revisión de componentes en proceso"
}
```

---

### 3. Despacho de Productos

#### Obtener Despacho por ID

**GET** `/api/Despacho/Shipments/{id}`

---

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/api-centro-distribucion.git
   cd api-centro-distribucion
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. Configurar variables de entorno:

    Crear un archivo `.env` con las siguientes variables:

    ```env
    SALT_ROUNDS=<10>
    SECRET_JWT_KEY=<key>
    SECRET_KEY=<keysecret>
    DATABASE_URL=<mongodb+srv://usuario:password@cluster.mongodb.net/nombreBD>
    ```

4. **Ejecutar el servidor:**

   ```bash
   npm start
   ```

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request con tus mejoras.

---

## Licencia

MIT
