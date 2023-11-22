const links = document.querySelectorAll(".py-3");

const main = document.querySelector("#content");
const about = document.querySelector("#about");
const experience = document.querySelector("#experience");
const projects = document.querySelector("#projects");

const header = document.querySelector(".text-4xl");

document.addEventListener("scroll", function () {
    const headerTop = header.getBoundingClientRect().top;

    if (main.getBoundingClientRect().top <= 0 && experience.getBoundingClientRect().top >= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[1].classList.add("active");
    }

    if (experience.getBoundingClientRect().top <= headerTop && experience.getBoundingClientRect().bottom >= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[2].classList.add("active");
    }

    if (projects.getBoundingClientRect().top <= headerTop) {
        links.forEach((l) => l.classList.remove("active"));
        links[3].classList.add("active");
    }

    const sticky = document.querySelectorAll(".sticky");

    sticky.forEach((s) => {
        if (s.getBoundingClientRect().top === 0){
            s.classList.add("line");
        } else {
            s.classList.remove("line");
        }
    });
});
