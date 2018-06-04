### PROYECTO N° 1 CIFRADO Y DESCIFRADO CESAR ###

### Definición del producto:

El producto que realice fue desarrollado para cualquier grupo de usuarios que quiera encriptar y desencriptar sus mensajes, pero antes de ingresar a 
la página web el usuario tiene que ingresar la clave secreta predeterminada ==>  bienvenido  <== y hacer clic en el boton entrar. Luego se le dirige a una segunda web donde
el usuario podra ingresar su mensaje en la caja de texto 1 y luego escribir cuantos espacios desea avanzar con la caja llave y al dar clic en el boton 
cifrar el resultado aparecera en la caja de texto 2 con su mensaje cifrado y lo mismo seria para el descifrado, se tiene que ingresar el mensaje previamente cifrado
en la caja de texto 1, el usuario tiene que darse cuenta o saber cuantos espacios escribira en la caja llave para descifrar correctamente su mensaje
y dar clic en el boton descifrar su mensaje quedara descifrado.



###Como realice el proyecto:

* Se realizo un Prototipo:

Antes de programar mi aplicación web primero hice un prototipo y lo dibuje en una hoja bond, despues de dibujar mi prototipo. 


* Estructura HTML:
Así que comence a hacer toda la estructura en html de la aplicación web donde asigne un título de bienvenida al usuario "WELCOME TO CIPHER", en la parte inferiror esta otro mensaje que dice "Ingresa la clave correcta" luego se encuenta una pequeña caja de texto donde los usuarios podran escribir la contraseña y mas abajo se encuentra el botón entrar, si el usuario ingresa la clave correcta se le direcciona a otra app web, esta web tiene el título "CIFRAR Y DESCIFRAR TU MENSAJE" en la parte de abajo esta un texto que dice "Escribe tu mensaje", después están dos cajas de texto, en la primera caja el usuario podra escribir su mensaje y en la segunda podra ver el resultado y en el medio de las dos cajas esta un pequeño input llamado llave donde se puede escribir cuantos espacios se desea para el cifrado y descifrado, al lado derecho de llave estan tres botones el primero se llama "Cifrar" el segundo "Descifrar" y el tercero "Resetear".


*Estilos con CSS:
Terminando el HTML el siguiente paso fue dar estilos con CSS, puse una imagen de fondo para mi aplicación web tambien le di efectos a mis botones con hover. 


*Programación en JavaScript:
Despues de haber dado unos estilos basicos a la web comence con la parte de la programación con Javascript, para eso tuve que crear funciones en el archivo index.js de mi boton cifrado, boton decifrado, para el boton entrar y para  mi boton resetear. Cada una de estas funciones escucha al evento click y de acuerdo a eso realiza diferentes operaciones que yo programe. 
En el archivo cipher.js estan las formulas de mi cifrado y descifrado.

Para mejorar la parte visual de mi página web tuve que mejorar los estilos con CSS de mi página web y también la hice adaptable a cualquier tipo de pantalla, el "Responsive Design" esto lo realice en CSS con los media queries para que se adapte a diferentes tipos de pantallas como celulares, tablets, laptops y pc.

##Producto Final

<------------Función de la App Web-------------->

La aplicación web que realice es una gran alternativa para un grupo de usuarios que desean cifrar y descifrar mensajes que contengan letras mayusculas, minusculas y espacios, de una manera sencilla.

Nota: La contraseña es asignada por el programador de la aplicación web. 


