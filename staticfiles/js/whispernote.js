document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".paper");

    // 3D Tilt interaction effect for the card
    if (card) {
        document.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(0px)`;
        });

        // Reset rotation smoothly when mouse leaves window
        document.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
            card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        });

        card.addEventListener("mouseenter", () => {
            card.style.transition = "none";
        });
    }

    // Interactive feature: Click anywhere on screen to bloom a tiny flower/petal effect
    document.addEventListener("click", (e) => {
        const symbols = ["✿", "❀", "✦", "🌸"];
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        const burst = document.createElement("div");
        burst.innerText = randomSymbol;
        burst.style.position = "absolute";
        burst.style.left = `${e.pageX}px`;
        burst.style.top = `${e.pageY}px`;
        burst.style.fontSize = "20px";
        burst.style.color = "#d87c8e";
        burst.style.pointerEvents = "none";
        burst.style.zIndex = "99";
        burst.style.transition = "all 0.8s ease-out";
        burst.style.transform = "translate(-50%, -50%) scale(0.5)";
        burst.style.opacity = "1";

        document.body.appendChild(burst);

        requestAnimationFrame(() => {
            burst.style.transform = `translate(-50%, -80px) scale(1.4) rotate(${Math.random() * 60 - 30}deg)`;
            burst.style.opacity = "0";
        });

        setTimeout(() => {
            burst.remove();
        }, 800);
    });
});