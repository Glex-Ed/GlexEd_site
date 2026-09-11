# Optimización mobile completa

## Cambios

- Corregir los encabezados superiores de Home y Soluciones para que sus etiquetas no se deformen en mobile.
- Compactar únicamente en mobile las secciones, tarjetas y grillas indicadas de Home, Soluciones y Audiencias.
- Reducir FAQ en mobile y mantener intacto su diseño desde `md`.
- Dar 16px mínimos a los campos de Contacto y Footer, botones de envío de ancho completo y espacio seguro inferior en el Footer.
- Garantizar objetivos táctiles de 44px, gráficos contenidos u ocultos y logos completos de 112×56px en mobile.

## Validación

- Revisar visualmente Home, Soluciones, Audiencias y Contacto en 375×812, 390 y 430px.
- Confirmar ausencia de scroll horizontal y medir la altura total de `/soluciones` a 375px.
- Ejecutar las comprobaciones automáticas disponibles.

## Detalles técnicos

- Los cambios usarán utilidades base para mobile con restauración explícita mediante `md:` para conservar desktop.
- No se modificarán textos, datos ni lógica de formularios.