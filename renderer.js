const messages = [
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

const headingText = "Recuerda que...";
let index = 0;

// DOM elements
const message = document.getElementById("message");
const heading = document.getElementById("heading");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const okayBtn = document.getElementById("okay");
const closeBtn = document.getElementById("closeButton");

heading.textContent = headingText

// update the message text based on current index
function updateMessage() {
    message.textContent = messages[index];
}

//star particles - shoot effect function
function launchStars(origenX, origenY, amount = 15) {
    for (let i = 0; i < amount; i++) {
        const star = document.createElement("img");
        star.src = "assets/star.png";
        star.classList.add("star-particle");

        // initial position
        star.style.left = `${origenX}px`;
        star.style.top = `${origenY}px`;

        // random direction
        const angle = Math.random() * 2 * Math.PI;
        const distance = 80 + Math.random() * 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        star.style.setProperty("--x", `${dx}px`);
        star.style.setProperty("--y", `${dy}px`);

        document.body.appendChild(star);

        // remove effect after animation ends
        star.addEventListener("animationend", () => star.remove());
    }
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % messages.length;
    updateMessage();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + messages.length) % messages.length;
    updateMessage();
});

okayBtn.addEventListener("click", () => {
    const rect = okayBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    launchStars(x, y, 15);
});

closeBtn.addEventListener("click", () => {
    window.close();
});

updateMessage();
