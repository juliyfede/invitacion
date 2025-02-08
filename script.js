document.addEventListener("DOMContentLoaded", function () {
    const fechaBoda = new Date("2025-03-22T00:00:00").getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        if (diferencia < 0) {
            document.getElementById("contador").innerHTML = "¡Hoy es el gran día!";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000); // Ahora se actualiza cada segundo
});
