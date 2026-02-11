function Evento() {
      const Text = document.getElementById("master_boton");
      Text.innerText = "Hola, que haremos hoy";
      const textoOriginal = boton.innerText;
      setTimeout(function() {
        Text.innerText = textoOriginal;
    }, 3000);
}

