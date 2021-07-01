# Blackjack

Vamos a implementar un jugo de blackjack. Primero empieza el jugador, y tomará cartas hasta plantarse.
Después el ordenador tomará cartas hasta plantarse también

Para implementar la aplicación, vamos a utilizar solo HTML y JavaScript. Las barajas y las imágenes las obtendremos de la siguiente API - [Enlace](http://deckofcardsapi.com/)

[Video demostrativo](https://oscarm.tinytake.com/tt/NTU3MDc3Nl8xNzM0NTMyNw)

## Requisito 1: Obtener una nueva baraja de la API e inicializar aplicación

Al hacer click en "Empezar juego", generamos una nueva baraja.
Para ello, hay que hacer una peticion GET a https://deckofcardsapi.com/api/deck/new/shuffle/. Como parámetro de QueryString, le pasaremos uno de nombre __deck_count__; que siempre valdra 1 (pues solo queremos obtener una baraja).

Parsea el JSON recibido de la petición GET para informar en la vista de la aplicación de :

1. ID del mazo obtenido
2. Cartas restantes

# Requisito 2: Añadir fuentes de Google Font
Usa un tipo de letra [High-Impact Vernecular Display](https://fonts.google.com/featured/High-Impact+Vernacular+Display) en toda la aplicación

# Requisito 3: Tomar una carta

Haz visibles los botones Tomar Carta y Plantarse.
Al hacer click hay que tomar una carta de nuestra baraja.
Investiga como usar la API para tomar una carta de una baraja indetificada con el ID de baraja que hemos obtenido

# Requisito 4: Sumar el valor de la carta

Siguiendo las reglas de BlackJack; lleva un computo del valor de las cartas obtenido hasta ahora.
Guarda la información en el estado de la aplicación, pero asegurate que también existe información visual.
