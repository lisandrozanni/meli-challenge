# Mercado Libre Challenge

El proyecto está hecho con `React` en el lado del cliente y con `Node.js` junto a `Express` en el lado del servidor. Se utilizó `Sass` en lugar de CSS para los estilos. También se realizaron los tests con `Jest` utilizando `React Testing Library`, librería ya integrada en create-react-app.

## Configuración

Primero instalamos todas las dependencias con el siguiente comando:
``` 
npm install
```

Luego, ejecutamos el comando para levantar en simultáneo el cliente y el servidor:
```
npm run app
```

Esto se logra gracias al módulo `concurrently`, el cual permite tener dos puertos distintos para poder probar de manera integrada toda la aplicación.


Para correr los tests ejecutamos:
```
npm run test
```

