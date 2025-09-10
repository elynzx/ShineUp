const mensajes = [
    "Tu pensamiento crítico transforma ideas en soluciones reales",
    "Tienes la capacidad de crear oportunidades donde otros ven problemas",
    "Tu creatividad es tu superpoder",
    "No todo tiene que estar perfecto para que sea valioso",
    "Tu bienestar no compite con tu rendimiento: lo potencia",
    "Respirar también es avanzar",
    "Un bloque de descanso bien planificado es tan técnico como un algoritmo",
    "Hoy puedes elegir cuidar tu energía sin culpa",
    "Cada módulo que completas es una victoria silenciosa.",
];

let indice = 0;

const mensajeEl = document.getElementById("message");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const okayBtn = document.getElementById("okay");
const closeBtn = document.getElementById("closeButton");

function actualizarMensaje() {
    mensajeEl.textContent = mensajes[indice];
}

//FUncion con efecto particulas
function lanzarEstrellas(origenX, origenY, cantidad = 15) {
    for (let i = 0; i < cantidad; i++) {
        const star = document.createElement("img");
        star.src = "assets/star.png";
        star.classList.add("star-particle");

        // posición inicial
        star.style.left = `${origenX}px`;
        star.style.top = `${origenY}px`;

        // dirección aleatoria
        const angle = Math.random() * 2 * Math.PI;
        const distance = 80 + Math.random() * 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        star.style.setProperty("--x", `${dx}px`);
        star.style.setProperty("--y", `${dy}px`);

        document.body.appendChild(star);

        // Elimina al finalizar
        star.addEventListener("animationend", () => star.remove());
    }
}

nextBtn.addEventListener("click", () => {
    indice = (indice + 1) % mensajes.length;
    actualizarMensaje();
});

prevBtn.addEventListener("click", () => {
    indice = (indice - 1 + mensajes.length) % mensajes.length;
    actualizarMensaje();
});

okayBtn.addEventListener("click", () => {
    const rect = okayBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    lanzarEstrellas(x, y, 15);
});

closeBtn.addEventListener("click", () => {
    window.close();
});

actualizarMensaje();
