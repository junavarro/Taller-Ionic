# Trabajo con TypeScript #

## Objetivos Generales: ##
    * Concocer el potencial de TypeScript.
    * Desrrollar programacion orientada a objetos.
## Objeticos Específicos ##
    * Utilizaz TypeScript para hacer peticiones a un API.

## Instalaciones ##
Primero vamos a instalar TypeScript en la computadora.
```bash
npm install -g typescript
npm install -g json-server
```
## Instrucciones ##

### Ejercicio 1 ###
* Creamos un caperta destinada solo a este proyecto y creamos una archivos llamado index.ts

* Insertamos la siguiente funcion.

```bash
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```
* Ejecutamos en terminal

```bash
index.js index.ts
```
* Agregamos el script del ejercico de html5 a la carpeta

* Modificamos nuestro script y proveemos el tipado.

```bash
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```
* Ahora veamos como agregar los datos estructurados.

```bash
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```
* Agregamos

```bash
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Juan", "E.", "Navarro");

document.body.innerHTML = greeter(user);
```

### Ejercicio 2 ###
* Con lo que ya teniamos definamos datos estructurados en un archivo .json dentro de una carpeta destinada a nuestro servidor.

```bash
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
* Liberemos dichos datos a un servidor y provemos usando esto en la consola.

```bash
json-server --watch db.json
```
Para efectos del taller nuestro servidor de prueba es http://localhost:3000/posts/1
