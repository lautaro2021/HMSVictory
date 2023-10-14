// Obtén una referencia al elemento div donde se mostrarán las imágenes
const galeriaDiv = document.getElementById("section__two__image__container");

// Ruta base de las imágenes (ajusta esto según tu estructura de carpetas)
const rutaBase = '/media/ship/';

// Número total de imágenes que deseas cargar
const numImagenes = 49;

// Bucle para cargar y mostrar las imágenes
for (let i = 1; i <= numImagenes; i++) {
    // Crea un elemento de imagen
    const imagen = document.createElement("img");
    
    imagen.id = `ship__frame`;
    imagen.className = `section__two__frame__num${i}`
    
    // Establece la ruta de la imagen
    const rutaImagen = `${rutaBase}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    // Establece el atributo "src" de la imagen con la ruta
    imagen.src = rutaImagen;
    
    // Agrega la imagen al elemento div de la galería
    galeriaDiv.appendChild(imagen);
}


//SECTION 3
const divContainer = document.getElementById("section__1");

//PART 1


const rutaImgPartOne = '/media/section1/';

const totalImagesPartOne = 119;

for (let i = 1; i <= totalImagesPartOne; i++) {

    const imagen = document.createElement("img");
    
    imagen.id = `section__three__ship__frame`;
    
    const rutaImagen = `${rutaImgPartOne}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    imagen.src = rutaImagen;
    
    divContainer.appendChild(imagen);
}

//PART 2

const rutaImgPartTwo = '/media/section2/';

const totalImagesPartTwo = 120;

for (let i = 0; i <= totalImagesPartTwo; i++) {

    const imagen = document.createElement("img");
    
    imagen.id = `section__three__ship__frame__two`;
    
    const rutaImagen = `${rutaImgPartTwo}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    imagen.src = rutaImagen;
    
    divContainer.appendChild(imagen);
}

//PART 3

const rutaImgPartThree = '/media/section3/';

const totalImagesPartThree = 122;

for (let i = 0; i <= totalImagesPartThree; i++) {

    const imagen = document.createElement("img");
    
    imagen.id = `section__three__ship__frame__three`;
    
    const rutaImagen = `${rutaImgPartThree}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    imagen.src = rutaImagen;
    
    divContainer.appendChild(imagen);
}

//PART 4

const rutaImgPartFour = '/media/section4/';

const totalImagesPartFour = 130;

for (let i = 0; i <= totalImagesPartFour; i++) {

    const imagen = document.createElement("img");
    
    imagen.id = `section__three__ship__frame__four`;
    
    const rutaImagen = `${rutaImgPartFour}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    imagen.src = rutaImagen;
    
    divContainer.appendChild(imagen);
}

//PART 4

const rutaImgPartFive = '/media/section5/';

const totalImagesPartFive = 94;

for (let i = 0; i <= totalImagesPartFive; i++) {

    const imagen = document.createElement("img");
    
    imagen.id = `section__three__ship__frame__five`;
    
    const rutaImagen = `${rutaImgPartFive}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    imagen.src = rutaImagen;
    
    divContainer.appendChild(imagen);
}




