# Mercadolibre frontend test -> Frontend

Esta es una prueba para la posición de Frontend Developer en MercadoLibre.

## Tecnologías

Para el desarrollo del mismo se usó:

- Node
- Typescript
- React
- Redux
- Redux thunk
- Reselect
- Axios
- Sweetalert2

## Planificado

Para el desarrollo del frontend, se realizó con anticipo al desarrollo un diagrama para graficar el flujo de navegación dentro de la aplicación. El mismo se puede ver en el siguiente link:
https://drive.google.com/file/d/1WWJbJhBW0CRL5MNbSSoSVCyEnWKlPLMM/view?usp=sharing

## Decisiones

A continuación voy a aclarar el por qué de las tecnologías utilizadas:

- Typescript: Fue agregado teniendo en cuenta escabilidad tanto del proyecto como del equipo de trabajo por sus conocidas características, principalmente el tipado estructurado que ayuda a reducir la cantidad de bugs en la aplicación. Aclaración: Si bien realicé trabajos previamente con Typescript, es un lenguaje que sigo aprendiendo y por lo tanto pueden haber casos de usos no tan óptimos.

- Redux: Elegido como mi manejador de estados por que en mi opinión para aplicaciones de larga escala como sería el caso de Mercadolibre es mas performante por sus acomples con memorizado de reselect, por la cantidad de personas en la comunidad y por el manejo de dispatchs que no re-renderiza los componentes a diferencia de otras librerías como ser Context API.

- Reselect: Para ayudar en performance por su habilidad de memorizado. Aclarar que se puede usar con otras librerías de manejos de estados, pero que acopla perfecto con redux.

- Redux thunk: Elegido como mi middleware, por en mi opinión funcionamiento más cómodo cuando se utiliza datas asíncronas proveyentes de APIs, a diferencia de otras alternativas como redux sagas.

- Axios: Elegido por su facilidad de uso y por el método nativo de la librería de crear clientes.

- Sweetalert: Elegido para notificación de errores por su facil uso y diseño de UI.

## Aclaraciones

- Tipado de interfaz de products: Fue tipado solamente lo utilizado y esencial de la respuesta al proveer de muchos campos la misma.
- Tomando de referncia la página de mercadolibre, se decidió hacer el rederigimiento a las respectivas páginas de productos después del fetcheo de la información y mejorar el UX del usuario.
- Uso de issues, labels, branches y nomeclatura para mostrar habilidades en uso de git y Github. Milestone no se agregó debido a que es un test.
- Parámetro de loading fue agregado en el estado pero no utilizado en la aplicación, esto fue por presunta futura escabilidad de la aplicación.
- El uso de variables, documentacion, funciones, etc (excpeto textos visibles en la UI) fue realizado en inglés para mayor facilidad en desarrollo con equipos de distintas nacionalidades y lenguas.
- Cuando se hace click en algunos items para ingresar al detalle del producto, aunque en la API de search esté listado, en las otras dos da 404.
- No fue agregado responsive debido a tiempos de entrega. Es algo totalmente posible de realizar en el futuro.
- Fue agregadad animación en home para mejora de UX en flujo de usuario

## Instalación y uso

Para poder inicializar el frontend, ejecutar los siguientes comandos:

```
  npm install
  npm start
```

Si se esta usando en desarrollo, deberá levantarse el middleware también siguiendo sus respectivas instrucciones.

### CI

Fue agregado tanto el middleware como la aplicación a los CIs de Heroku y Netlify en caso de error con levantado de aplicación. Los mismos se pueden ver en los siguientes URLS:

- Heroku: https://mercadolibre-frontend-test.herokuapp.com/api/
- Netlify: https://mercadolibre-frontend-test.netlify.app/
