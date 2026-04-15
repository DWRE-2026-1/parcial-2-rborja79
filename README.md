# Calculadora de Teclado Numérico con React.js

## Descripción
Calculadora básica de dos operandos con operaciones de suma, resta, multiplicación y división.

## Requisitos Técnicos
- **Componentización:** Display, Keypad, CalculatorButton
- **Estado:** useState de React
- **Interactividad:** Solo clics en botones (sin teclado físico)
- **Validaciones:** Manejo de decimales y división por cero

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Despliegue en Vercel

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Vercel detectará automáticamente Vite
3. Deploy automático en cada push

## Estructura del Proyecto

```
src/
├── App.jsx              # Lógica principal de la calculadora
├── App.css              # Estilos
├── main.jsx             # Punto de entrada
└── components/
    ├── CalculatorButton.jsx
    ├── Display.jsx
    └── Keypad.jsx
```

## Funcionalidades
- Operaciones: suma (+), resta (-), multiplicación (*), división (/)
- Botón C para limpiar
- Soporte para números decimales
- Manejo de división por cero (muestra "Error")

---

## Registro de Prompts (Bitácora)

Ver archivo `PROMPTS.md` para la documentación del proceso de desarrollo.
