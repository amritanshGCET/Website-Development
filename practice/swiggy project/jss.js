// Animate headline text on load
window.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("main p");
    paragraphs.forEach((p, i) => {
        p.style.opacity = "0";
        p.style.transform = "translateY(20px)";
        setTimeout(() => {
            p.style.transition = "all 0.6s ease";
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        }, i * 300);
    });
});

// Input focus styling
const searchInput = document.querySelector('input[type="search"]');
searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#ffa64d";
});
searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#ff6600";
});

// You can extend this with scroll animations or image sliders if needed.
