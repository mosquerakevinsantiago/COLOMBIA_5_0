const btnInfo = document.getElementById("btnInfo");

if(btnInfo){
    btnInfo.addEventListener("click", () => {
        document.getElementById("temas").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.1
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }

    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});

const images = document.querySelectorAll(".image-placeholder img");

images.forEach(img => {

    img.addEventListener("error", () => {

        img.src = "https://via.placeholder.com/600x400?text=Imagen";

    });

});