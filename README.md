# Blackjack

Vamos a implementar un jugo de blackjack. Primero empieza el jugador, y tomará cartas hasta plantarse.
Después el ordenador tomará cartas hasta plantarse también

Para implementar la aplicación, vamos a utilizar solo HTML y JavaScript. Las barajas y las imágenes las obtendremos de la siguiente API - [Enlace](http://deckofcardsapi.com/)

## Requisito 1

Al hacer click en "Empezar juego", generamos una nueva baraja.
Para ello, hay que hacer una peticion GET a https://deckofcardsapi.com/api/deck/new/shuffle/. Como parámetro de QueryString, le pasaremos uno de nombre __deck_count__; que siempre valdra 1 (pues solo queremos obtener una baraja).

Parsea el JSON recibido de la petición GET para informar en la vista de la aplicación de :

1. ID del mazo obtenido
2. Cartas restantes