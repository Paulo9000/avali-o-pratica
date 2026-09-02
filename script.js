// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// BOTÃO "DESCOBRIR O FUTURO"

const futureBtn = document.getElementById("futureBtn");
const futureMessage = document.getElementById("futureMessage");

futureBtn.addEventListener("click", () => {

    futureMessage.textContent =
        "🚀 Talvez a próxima grande fronteira da humanidade esteja a milhões de quilômetros daqui.";

    futureBtn.textContent = "Missão iniciada! ✓";
});


// ANIMAÇÃO SIMPLES AO ENTRAR NA TELA

const cards = document.querySelectorAll(
    ".card, .food-card, .info-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(card);
});
