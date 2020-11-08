# Aplicación de notas

Versión 3: 
 + las notas se leen/guardan en un **fichero** en formato JSON.
 + la aplicación (app.js):
   + usa módulos propios (notas.js) para organizar el código.
   + usa módulos del núcleo de Node (fs) para lectura/escritura de ficheros.
   + usa módulos de terceros:
     + para interpretar los comandos en línea y ejecutar las funciones (yargs)
     + para colorear la salida en la consola (chalk)

##### Enunciado
> ubicar la fuente de datos en un archivo externo e interactuar con ellos mediante la línea de comandos, implementando las siguientes funciones:

````javascript
const crearNota(lasNotas, titulo, cuerpo) : nueva dimensión
const borrarNota(lasNotas, titulo): laNotaBorrada
const ordenarNotas(lasNotas, opcion) : notasOrdenadas
const buscarTextoEnNotas(lasNotas, texto): laNota
````

Para testar esta solución:
>npm install

>node app
>+ add --titulo="..." --cuerpo="..."
>+ remove --titulo="..."
>+ sort --criterio="..."
>+ find --texto="..."