document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector(".heart-container");
    const numHearts = 150; // Más corazones para mayor detalle
    const scale = 30; // Aumenta el tamaño del corazón

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Fórmula paramétrica para la forma de un corazón
        let t = (i / numHearts) * (2 * Math.PI); 
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        // Ajuste de posición y tamaño
        heart.style.left = `calc(50% + ${x * scale}px)`;
        heart.style.top = `calc(50% - ${y * scale}px)`;
        heart.style.fontSize = "25px"; // Corazones más grandes
        heartContainer.appendChild(heart);
    }
});
