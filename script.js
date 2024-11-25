let player;

// Función que inicializa el reproductor de YouTube
function onYouTubeIframeAPIReady() {
  console.log("API de YouTube lista");
  player = new YT.Player('videoPlayer', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Detectar cambios en el estado del video
function onPlayerStateChange(event) {
  console.log("Estado del video cambió:", event.data);
  
  // Si el video terminó (estado 0)
  if (event.data === YT.PlayerState.ENDED) {
    console.log("El video terminó. Desplazando al formulario...");
    scrollToQuizForm();
  }
}

// Función para desplazarse al formulario
function scrollToQuizForm() {
  console.log("Ejecutando scrollToQuizForm");
  const quizForm = document.getElementById('quizForm');
  if (quizForm) {
    quizForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.error("No se encontró el formulario con ID 'quizForm'");
  }
}
