# Laboratorio Módulo 3 - Bundling

Desde el archivo _package.json_ comprobamos la versión de _vite_ que hemos instalado. Y los scrips básicos de desarrollo local:

```
"scripts": {
    "start": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
```

En las dependencias de desarrollo comprobamos la configuración de Typescript ("typescript": "^7.0.2") y el plugin que detecta y muestra los errores en la terminal ("vite-plugin-checker": "^0.14.5").

```
"devDependencies": {
    "typescript": "^7.0.2",
    "vite": "^8.3.0",
    "vite-plugin-checker": "^0.14.5"
  }
```

Podemos comprobar el tamaño del bundle mediante el comando _npm run build_. El resultado se muestra en la terminal.

<img src="./vite-project/img/run_build.png" />

Para crear variables de entorno:

- Contamos con un archivo _.env_, que en este caso se encuentra visible para poder comprobar su funcionamiento.
- En el archivo _config.ts_ que se encuentra en la carpeta _src_ definimos el valor de nuestras variables de entorno para poder usarlas de una manera más fácil.
- En el archivo _index.tsx_ mostramos el contenido por consola.

Esta información se muestra en el entorno de desarrollo (_npm start_).

- Creamos un archivo _.env.production_ con los valores que queremos para nuestro entorno de producción. Al igual que con el _.env_ lo dejamos visible (en caso de un proyecto real estos archivos deberían estar en la carpeta _.gitignore_)

Ahora si hacemos un _npm run build_ y _npm run preview_ accedemos a la vista de esta nueva variable de entorno. l mensaje por consola cambia y se muestra lo que hemos establecido en el _.env.production._

En el archivo _index.tsx_ mostramos un h1 a través del DOM y al que le damos estilos por medio de css.module.

## Opcional

Para que al hacer la build también genere los ficheros de forma comprimida (GZIP y BROTLI), instalamos el plugin _vite-plugin-compression2_.
En el archivo _vite.config.ts_ realizamos la configuración necesaria y ya podemos ponerlo en marca con _npm run build_

```
export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    compression({
      algorithms: ["gzip"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithms: ["brotliCompress"],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    modulePreload: { polyfill: false },
  },
});
```
