// =====================================
// Sticky Navbar
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(8,8,19,0.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(8,8,19,.90)";
        header.style.boxShadow = "none";
    }
});

// =====================================
// Active Navigation
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =====================================
// Smooth Scroll
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// =====================================
// Typing Effect
// =====================================

const typingText = document.querySelector(".hero-left h2");

const words = [
    "AI & Data Science Student",
    "Full Stack Developer",
    "Java Programmer",
    "Python Developer",
    "Machine Learning Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();

// =====================================
// Reveal Animation
// =====================================

const reveals = document.querySelectorAll(
    ".project-card,.skill,.education-card,.certificate-card,.about-container,.image-box"
);

function revealOnScroll() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =====================================
// Floating Cards Animation
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    setInterval(() => {

        const x = Math.random() * 10 - 5;
        const y = Math.random() * 10 - 5;

        card.style.transform =
            `translate(${x}px, ${y}px)`;

    }, 2500 + index * 500);

});

// =====================================
// Mouse Glow Effect
// =====================================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.background = "#7b3ff2";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(8px)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 9 + "px";
    glow.style.top = e.clientY - 9 + "px";

});

// =====================================
// Scroll Progress Bar
// =====================================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#7b3ff2";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.body.scrollHeight - window.innerHeight;

    const progressWidth =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// =====================================
// Button Ripple Effect
// =====================================

document.querySelectorAll(".btn1,.btn2,.hire-btn")
.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

    });

document.addEventListener("mousemove",(e)=>{

    particles.rotation.y =

        (e.clientX/window.innerWidth)*0.5;

    particles.rotation.x =

        (e.clientY/window.innerHeight)*0.5;

    });

// =====================================
// Contact Form
// =====================================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// =====================================
// Console Message
// =====================================

console.log(
"%cWelcome to Sarthak Roy's Portfolio",
"color:#7b3ff2;font-size:20px;font-weight:bold;"
);