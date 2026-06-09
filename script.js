// Smooth Fade-In Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});

// Add fade-in class automatically

sections.forEach(section => {
    section.classList.add("fade-in");
});

// Resume Download Message

const resumeBtn = document.querySelector(".btn");

resumeBtn.addEventListener("click", () => {
    alert("Your resume download will start shortly.");
});

// Highlight Active Navigation Link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        link.style.color = "#38bdf8";

    });

});