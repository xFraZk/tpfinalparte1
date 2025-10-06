function dipperHistoria() {
  if (pantallaDipper == 1) { // Pantalla Dipper 1
  
    image(dipperImgs[0], 0, -150, width, height);
    mostrarPanel("Dipper oyó que la estatua de Bill sigue intacta en lo mas profundo del \nbosque, la curiosidad le ganó y quiere ir a investigar.");
    botonSimple("Siguiente");


  } else if (pantallaDipper == 2) { // Pantalla Dipper 2
    image(dipperImgs[1], 0, 0, width, height);
    
    mostrarPanel("Se suben al auto rumbo a la ciudad para investigar, impulsados por la \ncuriosidad de Dipper sobre la estatua de Bill.");
    botonSimple("Siguiente");


  } else if (pantallaDipper == 3) { // Pantalla Dipper 3
    image(dipperImgs[2], 0, -70, width, height);
    mostrarPanel("Pero justo cuando todo parecía bajo control, algo les tapó la vista\ny antes de darse cuenta, ¡bam! fueron a dar de lleno contra un árbol.");
    botonesDobles("Caminar", "Ir a la ciudad");
    
  } else if (pantallaDipper == 4) { // Pantalla Dipper 4
    image(dipperImgs[3], 0, -110, width, height);
    mostrarPanel("En la ciudad, Dipper percibe una voz extraña, pero no logra identificar \nde quién se trata. ¿Quién será?");
    botonSimple("Siguiente");

  } else if (pantallaDipper == 5) { // Pantalla Dipper 5
    image(dipperImgs[4], 0, -60, width, height);
    mostrarPanel("¡Es Pacifica! Se ofrece a llevarlos a su casa a pedir ayuda para el auto \nchocado. ¿Qué deberían hacer?");
    botonesDobles("Caminar", "Ir a su casa");

  } else if (pantallaDipper == 6) { // Pantalla Dipper 6
    image(dipperImgs[5], 0, 0, width, height);
    mostrarPanel("Al llegar a la mansión, un estruendo inesperado los sobresalta; algo \nextraño está ocurriendo.");
    botonSimple("Siguiente");

  } else if (pantallaDipper == 7) { // Pantalla Dipper 7
    image(dipperImgs[6], 0, 0, width, height);
    mostrarPanel("Encuentran al leñador fantasma, quien los mira fijamente y los reta \na un duelo.");
    botonSimple("Siguiente");
    
  } else if (pantallaDipper == 8) { // Pantalla Dipper 8
    image(dipperImgs[7], 0, 0, width, height);
    fill(255);
    textFont(letra11);
    textSize(90);
    text("¡PIERDEN!", 100, 106);

    mostrarPanel("De repente, el leñador corta un árbol, y en un instante el tronco viene \ndirecto hacia ustedes.");
    botonSimple("Reiniciar");
  }
}
