function dipperPacifica() {
     
  if (pantallaPacifica == 1) { // Pantalla Pacífica 1
    image(dipperPacificaImgs[0], 0, 0, width, height);
    mostrarPanel("Caminaron al bosque y pronto encontraron una cueva oscura. Sin \npensarlo, entraron.")
    botonSimple("Siguiente");

  } else if (pantallaPacifica == 2) { // Pantalla Pacífica 2
  image(dipperPacificaImgs[1], 0, -120, width, height);
    mostrarPanel("Se encontraron con el cambiaformas, y su mirada extraña empezó a \nhelarles la sangre.")
    botonSimple("Siguiente");

  } else if (pantallaPacifica == 3) { // Pantalla Pacífica 3
    image(dipperPacificaImgs[2], 0, -90, width, height);
    mostrarPanel("Ford logró herir al cambiaformas, pero la zona era peligrosa; debían \nbuscar un lugar más abierto...")
    botonSimple("Ir al bosque");

  } else if (pantallaPacifica == 4) { // Pantalla Pacífica 4
    image(dipperPacificaImgs[0], 0, -90, width, height);
    mostrarPanel("Siguieron caminando, pero el bosque estaba demasiado silencioso. \n“¿Qué podría pasar…?”")
    botonSimple("Siguiente");

  } else if (pantallaPacifica == 5) { // Pantalla Pacífica 5
  image(dipperPacificaImgs[3], 0, 0, width, height);
    mostrarPanel("Se toparon con el multioso. Un escalofrío les recorrió la espalda \nmientras se preguntaban: ¿qué hacer ahora?")
    botonesDobles("Pelear", "Cantar");

  } else if (pantallaPacifica == 6) { // Pantalla Pacífica 6
    image(dipperPacificaImgs[4], 0, -90, width, height);
    mostrarPanel("¡El oso parecía fascinado por las canciones para chicas! Se quedó \narareando y bailando, y finalmente los dejó continuar su camino.")
    botonSimple("Salir de la cueva");
  } else if (pantallaPacifica == 7) { // Pantalla Pacífica 7
    image(dipperPacificaImgs[6], 0, -90, width, height);
    mostrarPanel("Por fin, un momento de paz y tranquilidad. Mientras caminaban entre \nel bosque, distinguieron una enorme figura de piedra… ¡era él!")
    botonSimple("Siguiente");

  } else if (pantallaPacifica == 8) { // Pantalla Pacífica 8
  image(dipperPacificaImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(80);
    text("¡FELICIDADES!", 50, 106);
    fill(255, 165, 0); 
  textFont(letra1);
  textSize(20);
    text("¡Finalmente encontraron la estatua de Bill Cipher! Sin dudas, sería la \natracción principal de la cabaña del misterio.", 10, 350)
    botonSimple("Reiniciar");
  }
}
