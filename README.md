# 💰 Crypto Quoter

Bienvenido a **Crypto Quoter**, una aplicación web que permite consultar en tiempo real el valor de diversas criptomonedas en distintas monedas fiduciarias. 🚀  

## 🔗 Demo en Vivo

Prueba la aplicación en vivo haciendo clic en el siguiente enlace:  

🔗 [Demo en vivo](https://cryptocurrency-alejandrette.netlify.app/)  

## ⚙️ Tecnologías Utilizadas

- **React ⚛️**: Biblioteca para construir interfaces de usuario interactivas y dinámicas.  
- **TypeScript 📝**: Mejora la seguridad y mantenibilidad del código mediante tipado estático.  
- **Vite ⚡**: Herramienta de desarrollo ultrarrápida para aplicaciones modernas.  
- **Zustand 🧩**: Librería ligera para gestionar el estado global de la aplicación.  
- **Axios 🔄**: Cliente HTTP para realizar solicitudes a la API de CryptoCompare.  
- **Tailwind CSS 🎨**: Framework de diseño para crear una interfaz moderna y responsiva.  

## 🌍 Características

✔ **Consulta en tiempo real** 📊  
Obtén información sobre el precio actual, máximo y mínimo del día, variación en 24 horas y última actualización.  

✔ **Selección de Criptomonedas y Monedas Fiat** 💱  
Elige entre una variedad de criptomonedas y monedas fiduciarias para realizar la conversión.  

✔ **Gestión del Estado con Zustand** 🔄  
La aplicación mantiene los datos de consulta utilizando **Zustand**, lo que la hace más eficiente.  

✔ **Diseño Responsivo** 📱💻  
Adaptado para funcionar en dispositivos móviles, tabletas y escritorios.  

## 📦 Instalación y Uso

- 1️ Clona el repositorio  

```bash
git clone https://github.com/alejandrette/Crypto-Quoter.git
cd Crypto-Quoter
```

- 2️ Instala las dependencias

```bash
npm install
```

-3 Ejecuta la aplicación

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:5173` 🚀

### 📑 Funcionamiento de la Aplicación

- 1 Seleccionar Moneda y Criptomoneda
  - Escoge la moneda fiduciaria de referencia (USD, EUR, etc.).
  - Selecciona la criptomoneda que deseas cotizar (Bitcoin, Ethereum, etc.).
- 2️ Obtener Cotización
  - Haz clic en el botón "Quote" para obtener los valores en tiempo real.
- 3️ Ver Información
  - Se mostrará el precio actual, los valores más altos y bajos del día, la variación en 24 horas y la última actualización.

### 📚 Gestión de Estado con Zustand

La aplicación usa Zustand para manejar el estado de las criptomonedas y sus datos de cotización.

```ts
export const useCrypto = create<CryptoState>((set) => ({
  cryptos: [],
  cryptosData: {} as CryptosData,
  fetchCryptos: async () => { ... },
  fetchData: async (cryptocurrency) => { ... }
}));
```

### 🚀 Desarrollo Futuro

- 🔹 Historial de Cotizaciones 📜
Guardar las cotizaciones realizadas para futuras consultas.

- 🔹 Autenticación de Usuarios 🔑
Permitir a los usuarios guardar sus criptomonedas favoritas.

- 🔹 Notificaciones y Alertas 📩
Configurar alertas de precios para criptomonedas específicas.
