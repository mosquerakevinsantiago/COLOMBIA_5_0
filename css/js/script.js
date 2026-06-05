document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const btnInfo = document.getElementById("btnInfo");
if (btnInfo) {
    btnInfo.addEventListener("click", () => {
        document.getElementById("temas").scrollIntoView({ behavior: "smooth" });
    });
}

const cards = document.querySelectorAll(".card, .tema-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

setTimeout(() => {
    cards.forEach(card => card.classList.add("show"));
}, 1500);

cards.forEach(card => observer.observe(card));

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;
    header.style.boxShadow = window.scrollY > 50
        ? "0 4px 30px rgba(0, 210, 255, 0.15), 0 2px 10px rgba(0,0,0,.4)"
        : "0 2px 10px rgba(0,0,0,.08)";
});

document.querySelectorAll(".image-placeholder img").forEach(img => {
    img.addEventListener("error", () => {
        img.src = "https://via.placeholder.com/600x400?text=Imagen";
    });
});

const videoLaunchCard  = document.getElementById('videoLaunchCard');
const modalVideoPlayer = document.getElementById('modalVideoPlayer');
const videoModalClose  = document.getElementById('videoModalClose');
const html5VideoPlayer = document.getElementById('html5VideoPlayer');

const closeVideoModal = () => {
    if (modalVideoPlayer) modalVideoPlayer.classList.remove('open');
    if (html5VideoPlayer) {
        html5VideoPlayer.pause();
        html5VideoPlayer.currentTime = 0;
    }
};

if (videoLaunchCard) {
    videoLaunchCard.addEventListener('click', () => {
        modalVideoPlayer.classList.add('open');
        html5VideoPlayer.play();
    });
}

if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);

if (modalVideoPlayer) {
    modalVideoPlayer.addEventListener('click', (e) => {
        if (e.target === modalVideoPlayer) closeVideoModal();
    });
}

const languageSelect    = document.getElementById('languageSelect');
const dropdownLabel     = document.getElementById('dropdownLabel');
const dropdownStyledView = document.querySelector('.dropdown-styled-view');

if (dropdownStyledView && languageSelect) {
    dropdownStyledView.addEventListener('click', () => {
        languageSelect.focus();
        languageSelect.dispatchEvent(new MouseEvent('mousedown'));
    });
}

if (languageSelect && dropdownLabel) {
    languageSelect.addEventListener('change', () => {
        dropdownLabel.textContent = languageSelect.options[languageSelect.selectedIndex].text;
    });
}
