API de Recepción y Despacho - Centro de Distribución

Descripción

Esta API permite gestionar el proceso de recepción y despacho de productos en un centro de distribución. Proporciona endpoints para registrar la recepción de productos, gestionar inventarios y coordinar el despacho de órdenes.

Tecnologías

Lenguaje: JavaScript

Framework: Express

Base de Datos: PostgreSQL

Autenticación: JWT

Arquitectura: REST

Endpoints Principales

1. Autenticación

Login

POST /api/auth/login

{
  "username": "usuario",
  "password": "contraseña"
}

Registro de Usuario

POST /api/auth/register

{
  "username": "nuevo_usuario",
  "password": "contraseña",
  "role": "admin"
}

2. Recepción de Productos

Registrar Recepción

POST /api/Recibo/ReciboProductos

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

3. Despacho de Productos

Obtener Despacho por ID

GET /api/Despacho/Shipments/{id}

Instalación

Clonar el repositorio:

git clone https://github.com/tuusuario/api-centro-distribucion.git
cd api-centro-distribucion

Instalar dependencias:

npm install

Configurar variables de entorno:

cp .env.example .env

Ejecutar el servidor:

npm start

Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request con tus mejoras.

Licencia

MIT

