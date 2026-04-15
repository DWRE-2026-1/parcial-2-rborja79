Actúa como un diseñador UI/UX senior y frontend developer especializado en React y CSS.

Necesito mejorar únicamente el diseño visual de una calculadora web ya funcional hecha en React. No debes cambiar la lógica de negocio ni el comportamiento matemático, solo la apariencia, distribución visual, proporciones, espaciado y consistencia estética.

## Objetivo visual
Quiero que la calculadora se vea como una calculadora moderna, minimalista, elegante y fácil de usar, inspirada en interfaces móviles actuales. Debe transmitir orden, limpieza, contraste correcto y buena jerarquía visual.

## Restricción principal
NO modificar la lógica de la calculadora.
NO reestructurar innecesariamente el flujo funcional.
NO agregar librerías pesadas de UI.
Trabajar principalmente sobre CSS y, solo si es estrictamente necesario, pequeños ajustes estructurales de JSX para mejorar layout visual.

## Enfoque exclusivo
Este trabajo debe enfocarse solo en:
- layout
- espaciado
- proporciones
- tamaños
- alineación
- jerarquía visual
- colores
- tipografía
- bordes
- sombras
- responsividad básica

No tocar:
- handlers
- operaciones
- useState
- lógica de cálculo
- validaciones funcionales

## Diseño general requerido
La aplicación debe mostrar:
- una calculadora centrada en pantalla
- un cuerpo principal compacto pero no demasiado angosto
- apariencia vertical tipo calculadora móvil
- esquinas redondeadas suaves
- fondo general con degradado moderno, sobrio y limpio
- contenedor principal con buen contraste respecto al fondo
- sombras suaves que den profundidad sin exagerar

## Proporciones del contenedor
Quiero que el cuerpo de la calculadora:
- sea ligeramente más ancho que una versión demasiado estrecha
- no se vea como un control remoto ni excesivamente alargado
- tenga una relación visual equilibrada entre alto y ancho
- mantenga padding interno suficiente para que los botones respiren
- tenga una distribución interna uniforme

## Display
El display debe:
- estar en la parte superior
- ser claramente distinguible del cuerpo de la calculadora
- tener fondo ligeramente diferente para marcar jerarquía
- mostrar el valor alineado a la derecha
- tener tipografía grande, limpia y muy legible
- soportar números largos sin romper el layout
- tener espacio interno suficiente
- verse moderno, limpio y centrado verticalmente

## Distribución visual del teclado
La calculadora debe usar una cuadrícula visual de 4 columnas con esta distribución:

Fila 1:
- backspace
- C
- %
- ÷

Fila 2:
- 7
- 8
- 9
- ×

Fila 3:
- 4
- 5
- 6
- −

Fila 4:
- 1
- 2
- 3
- +

Fila 5:
- +/-
- 0
- .
- =

Visualmente:
- las columnas deben estar bien alineadas
- las filas deben tener separación uniforme
- los botones deben verse proporcionados
- el teclado debe sentirse compacto pero no apretado

## Botones: estilo general
Todos los botones deben:
- tener tamaño consistente
- verse claramente clicables
- usar bordes redondeados modernos
- tener buena separación entre sí
- mantener alineación exacta en el grid
- tener una jerarquía visual clara según su tipo
- tener transición hover/focus/active simple y elegante
- evitar estilos exagerados o infantiles

## Jerarquía visual por tipo de botón
Quiero una diferenciación clara:

### Botones numéricos
- color oscuro o neutro
- contraste alto con el texto
- estilo sobrio
- deben parecer el grupo principal de entrada

### Botones de operación
- color cálido destacado, por ejemplo naranja
- deben sobresal visualmente respecto a los numéricos
- el usuario debe identificar rápido que son operadores

### Botón de igual
- color diferente y claramente especial, por ejemplo verde
- debe comunicar acción principal / confirmación

### Botón C
- color de advertencia o acción destructiva ligera, por ejemplo rojo
- debe destacar como acción de limpieza

### Botones utilitarios
(backspace, %, +/-)
- deben verse diferenciados, pero sin competir más que los operadores
- mantener consistencia con el resto del sistema

## Forma de los botones
Quiero que los botones:
- no sean demasiado delgados
- no se vean exageradamente altos y estrechos
- tengan una forma equilibrada entre rectángulo redondeado y tecla moderna
- el botón 0 puede ser ligeramente más ancho o visualmente importante si el layout lo permite sin romper el grid

## Tipografía
- usar una tipografía limpia, moderna, sans-serif
- números y símbolos muy legibles
- tamaño suficientemente grande
- pesos visuales consistentes
- buena relación entre tamaño del botón y tamaño del texto

## Espaciado
Mejora:
- padding interno del contenedor
- separación entre display y teclado
- separación entre filas
- separación entre columnas
- márgenes externos
- equilibrio visual general

El diseño no debe verse ni apretado ni demasiado vacío.

## Responsividad
Asegura que:
- se vea bien en pantalla de laptop
- se vea bien en móvil
- no se rompa el grid
- no se desborden botones ni display
- mantenga proporciones razonables en resoluciones pequeñas

## Sensación visual buscada
Quiero que el resultado transmita:
- simplicidad
- claridad
- orden
- interfaz moderna
- buena usabilidad
- apariencia académicamente presentable
- acabado pulido pero no sobrecargado

## Implementación esperada
Haz los ajustes visuales principalmente mediante CSS.
Si el proyecto usa:
- App
- Display
- Keypad
- CalculatorButton

mantén esa estructura si ya existe.

No rehagas la lógica.
No cambies la funcionalidad.
Solo mejora visualmente el proyecto con cambios precisos y bien justificados.

## Resultado esperado
La calculadora final debe verse:
- más equilibrada
- más profesional
- más natural como calculadora
- visualmente consistente
- lista para una entrega universitaria con buen puntaje en diseño visual