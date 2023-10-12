// Primero, necesitamos obtener referencias a nuestro video y nuestra sección
let video = document.querySelector('#miVideo');
let seccion = document.querySelector('#miSeccion');

// Luego, definimos los puntos en los que queremos detener nuestro video para las animaciones.
// Estos puntos están en segundos.
let puntosDeParada = [10, 20, 30];

// Ahora, creamos nuestro ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: seccion,
  start: "top top",
  end: "+=100%",
  pin: true,
  scrub: true,
  onUpdate: self => {
    // Aquí es donde controlamos la reproducción de nuestro video.
    // Calculamos la duración del video basándonos en el progreso de nuestro scroll.
    let tiempoVideo = self.progress * video.duration;

    // Verificamos si nuestro tiempoVideo está cerca de uno de nuestros puntos de parada.
    for (let i = 0; i < puntosDeParada.length; i++) {
      if (Math.abs(tiempoVideo - puntosDeParada[i]) < 0.5) {
        // Si estamos cerca de un punto de parada, pausamos el video y hacemos nuestra animación.
        video.pause();

        // Aquí es donde deberías poner tu animación.
        // Cuando tu animación termine, asegúrate de reanudar la reproducción del video.
        miAnimacion().then(() => {
          video.play();
        });

        // Salimos del bucle porque ya encontramos un punto de parada cercano.
        break;
      }
    }

    // Si no estamos cerca de un punto de parada, simplemente actualizamos el tiempo del video.
    video.currentTime = tiempoVideo;
  }
});
