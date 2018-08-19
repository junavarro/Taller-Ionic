# Taller de ionic

Iniciamos con la aplicacion de Ionic.

Primer paso es crear nuestro proyecto de ionic ejecutando:
```bash
$ ionic start tallerGT tabs
```
Cada parte del proyecto se divide en 3 carpetas, para efectos del taller solo se tomara en cuenta la caperta de src.
Alli dentro estan las demas carpetas a trabajar.
Se ingresa a la carpeta de pages y ahi dentro de la carpeta home se identifican tres tipos de documentos: html, scss y ts. Aunque parezca muchas extensiones en realidad es volver a hacer lo que se hizo en los ejercicios pasados.

1. Para el html de home:

 * se van a usar los scss para colocar el color de esa forma y las letras.
 * Si puede le crea los marcos rectangulares.

2. Para el html de about:

 * Colocamos la imagen y el texto. La imagen esta en este # [link](src/assets/imgs)


3. Ahora a crear el provider para empezar a obtener los datos:
```bash
 $ ionic g provider diccionario
```
Y del provider usuarios vamos a copiar lo necesario para la llamada del get. Antes de correr esto debemos hacer el siguiente paso

  ## Antes de continuar:
4.  Vamos a crear la base de datos con el nombre db.json y tenerla fuera del proyecto de ionic y ejecuatar el comando
```bash
json-server db.json
```
Una vez hecho esto podemos seguir enlazando las partes
Ahora vamos a crear la vista que va a contener el diccionario.

  ```bash
  $ ionic g page DiccPage
  ```
  * Una vez alli vamos a crear una funcion que llame al get del diccionario.
  * En el html vamos a crear una ion-list cualquiera de los que tiene disponible  [IonicDocs](https://ionicframework.com/docs/components/)

  Una vez hecho todo esto y con el servidor arriba. Podemos porfin ejecutar la aplicacion. Para ver los datos.

5. Ejecutar la aplicacion de ionic.
```bash
 ionic serve
```
