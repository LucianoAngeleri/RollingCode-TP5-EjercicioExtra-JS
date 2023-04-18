# Ejercicio Extra - Trabajo Práctico N°6
En este trabajo práctico realizamos diferentes ejercicios para aprender algunos conceptos básicos del lenguaje JavaScript.
Se resolvió haciendo uso de los conceptos aprendidos previamente en Trabajo Prácticos anteriores y se integraron nuevos conocimientos:
* DOM "Document Object Model":
    * `document.getElementByID`: para obtener un elemento con su ID
    * `document.querySelector('tag')`: para obtener un elemento con su tag
    * `document.querySelector('.container')`: para obtener un elemento con una clase
    * `document.querySelector('#nombreId')`: ara obtener un elemento con su ID
    * `document.getElementsByTagName('h1')` : devuelve un htmlCollection, a partir de un tag
    * `document.getElementById('tituloPrincipal')`: devuelve un objeto, a partir de un ID
    * `document.getElementsByClassName('container')`: devuelve un htmlCollection, a partir del nombre de la clase
    * `document.elemento.classlist.metodos()`: para agregar(`.add()`), remover(`.remove()`), reemplazar(`.replace()`) clases a los elementos, entre otros.
    * `document.elemento.className`: para escribir la clase del elemento.
    * `document.innerHTML`: para escribir dentro de un elemento.
    * `document.createElement("tag")`: para crear un elemento nuevo con un tag
 * BOM "Browser Object Model":
    * `window.setTimeout(funcion a ejecutar,intervalo en ms)`: para ejecutar una funcion luego de cierto tiempo
    * `window.setInterval(funcion a ejecutar,intervalo en ms)`: para ejecutar una funcion cada cierto tiempo
    * `clearInterval(IDintervalo)`: para detener el `setInterval`
## Uso de GIT
Dado que es requerimiento del Trabajo Práctico hacer un repositorio por cada ejercicio, se creó una carpeta por cada ejercicio de Trabajo Práctico. Dentro de cada carpeta de ejercicio, se tomó la estructura básica de careptas y archivos de los Trabajos Prácticos anteriores y se realiza el commit inicial. Luego se creó una rama `dev` a partir de la rama `main`. Por cada funcionalidad requerida en el ejercicio se creó una rama `nombreFuncialidad` donde se trabajó la resolución de dicha funcionalidad y luego se unieron los cambios a la rama `dev`. Una vez finalizado el ejercicio y comprobado su funcionamiento, se unió la rama `dev` a la rama `main` para tener todos los cambios. 
## Ejercicios JavaScript
### Prácticas con DOM y BOM
-------------------
#### Piedra, Papel o Tijeras 👊🏻 ✋🏻 ✌🏻
Crear un script con toda la logica necesaria que **solicite al usuario un movimiento (piedra - papel - tijera)** ,la **PC elija aleatoriamente un movimiento** y al final **mostrar por pantalla quien gano**, luego **preguntar si queremos jugar otra vez**.

## Autor
[**César Luciano Angeleri**](https://www.linkedin.com/in/cesar-luciano-angeleri/)
## Tecnologías utilizadas
* HTML
* CSS
* **JavaScript**
*  GIT y GitHub
