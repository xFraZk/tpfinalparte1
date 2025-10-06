let dipper = [];
let mabel = [];

let letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12, letra13, letra14;
let linterna, star, fondo, logo;

let pantallaPacifica = 2;
let pantallaDipper = 1;
let pantallaInicio = 0;

let dipperImgs = [];
let dipperPacificaImgs = [];
let dipperTotal = 8;
let dipperPacificaTotal = 8;


function preload() {

for (let i = 0; i < dipperPacificaTotal; i++) {
    dipperPacificaImgs[i] = loadImage("assets/img/Dipper_Ford/DipperPacifica_" + i + ".jpeg");
  }
  
for (let i = 0; i < dipperTotal; i++) {
    dipperImgs[i] = loadImage("assets/img/Dipper_Ford/Dipper_" + i + ".jpeg");
  }

//PANTALLA DE INICIO
fondo = loadImage('assets/img/inicio/home.png');
logo = loadImage("assets/img/inicio/Gravity_Falls_logo.png");


// PANTALLA DE INICIO - ICONOS

linterna = loadImage("assets/img/inicio/icons/linterna.png");
star = loadImage("assets/img/inicio/icons/star.png");


//FUENTES

letra1 = loadFont("assets/fonts/Poppins/Poppins-Black.ttf")
letra2 = loadFont("assets/fonts/Poppins/Poppins-ExtraBold.ttf")
letra3 = loadFont("assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf")
letra4 = loadFont("assets/fonts/Poppins/Poppins-ExtraLight.ttf")
letra5 = loadFont("assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf")
letra5 = loadFont("assets/fonts/Poppins/Poppins-Italic.ttf")
letra6 = loadFont("assets/fonts/Poppins/Poppins-Light.ttf")
letra7 = loadFont("assets/fonts/Poppins/Poppins-LightItalic.ttf")
letra8 = loadFont("assets/fonts/Poppins/Poppins-Medium.ttf")
letra9 = loadFont("assets/fonts/Poppins/Poppins-MediumItalic.ttf")
letra10 = loadFont("assets/fonts/Poppins/Poppins-Regular.ttf")
letra11 = loadFont("assets/fonts/Poppins/Poppins-SemiBold.ttf")
letra12 = loadFont("assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf")
letra13 = loadFont("assets/fonts/Poppins/Poppins-Thin.ttf")
letra14 = loadFont("assets/fonts/Poppins/Poppins-ThinItalic.ttf")
letra15 = loadFont("assets/fonts/Patrick_Hand/PatrickHand-Regular.ttf")
}

function setup() {
  createCanvas(640, 480);
  
}


function draw() {

  


  //maquina de estados finitos = logica de pantallas
  if ( pantallaInicio == 0 ) {
    image(fondo, 0, 0, width, height);
    image(logo, 122, 30);
    
    push();
    fill(47, 25, 6);
    strokeWeight(3);
    // Boton 1 - Dipper
    stroke(208, 158, 96);
    rect(220, 270, 200, 40);
    fill(47, 25, 6);
    image(linterna, 230, 273, 30, 30);
    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Dipper / Ford", 270, 296)
      pop();

    push();
    //Boton 2
    fill(47, 25, 6);
    strokeWeight(3);
    stroke(208, 158, 96);

    rect(220, 320, 200, 40);
    fill(47, 25, 6);
    image(star, 227, 324, 30, 30);
    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Mabel / Stan", 272, 348);


    pop();

    //Boton3
    push();
    stroke(208, 158, 96);
    strokeWeight(3);
    fill(47, 25, 6);
    rect(220, 373, 200, 40);


    textFont(letra1);
    textSize(20);
    fill(208, 158, 96);
    stroke(47, 25, 6);
    text("Créditos", 272, 400);
    pop();
  } else if (pantallaInicio == 1) {
    dipperHistoria();
  }   else if (pantallaInicio == 2) { 
    dipperPacifica(); 
  }
}

  
function mousePressed() {

  if (pantallaInicio == 0) { // Botón "Comenzar"
    if (mouseX >= 220 && mouseX <= 420 && mouseY >= 270 && mouseY <= 310) {
      pantallaInicio = 1;  
      pantallaDipper = 1; 
      pantallaPacifica = 2;
    }

  } else if (pantallaDipper == 1) { // Botón siguiente
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 2;
    }

  } else if (pantallaDipper == 2) { 
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 3;
    }

  } else if (pantallaDipper == 3) { 
    if (mouseX >= 350 && mouseX <= 550 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 4;
    }

  } else if (pantallaDipper == 4) { 
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 5;
    }

  } else if (pantallaDipper == 5) { 
    if (mouseX >= 350 && mouseX <= 550 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 6;

    } else if (mouseX >= 79 && mouseX <= 279 && mouseY >= 410 && mouseY <= 450) {

      pantallaInicio = 2; 
      pantallaPacifica = 1; 
}

  } else if (pantallaDipper == 6) { 
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 7;
    }

  } else if (pantallaDipper == 7) { 
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaDipper = 8;
    }

  } else if (pantallaDipper == 8) { 
    if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
      pantallaInicio = 0; // volver al inicio
    }
  } 
  
  if (pantallaPacifica == 1) { // Botón siguiente
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 2;
      }

    } else if (pantallaPacifica == 2) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 3;
      }

    } else if (pantallaPacifica == 3) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 4;
      }

    } else if (pantallaPacifica == 4) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 5;
      }

    } else if (pantallaPacifica == 5) {
      if (mouseX >= 350 && mouseX <= 550 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 6;
      }

    } else if (pantallaPacifica == 6) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 7;
      }

    } else if (pantallaPacifica == 7) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaPacifica = 8;
      }

    } else if (pantallaPacifica == 8) {
      if (mouseX >= 239 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450) {
        pantallaInicio = 0;
      }

    }
  
  
}
