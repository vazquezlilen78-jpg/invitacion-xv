// Música
const musica = document.getElementById("musica");
const btn = document.getElementById("btn-musica");
btn.addEventListener("click", () => {
    if (musica.paused) { musica.play(); btn.textContent = "⏸️"; }
    else { musica.pause(); btn.textContent = "🎵"; }
});

// Cuenta regresiva
const eventoFecha = new Date("Feb 20, 2026 18:00:00").getTime();
const reloj = document.getElementById("reloj");  // asegúrate que coincide con el id

setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = eventoFecha - ahora;

    if(distancia < 0){
        reloj.innerHTML = "¡Es hoy! 🎉";
        return;
    }

    const dias = Math.floor(distancia / (1000*60*60*24));
    const horas = Math.floor((distancia % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((distancia % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((distancia % (1000*60)) / 1000);

    reloj.innerHTML = ${dias}d ${horas}h ${minutos}m ${segundos}s;
}, 1000);
// RSVP
document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("mensaje").textContent = "¡Gracias por confirmar! 💕";
});
