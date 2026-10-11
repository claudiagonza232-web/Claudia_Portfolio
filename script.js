const projectSlides = document.querySelectorAll(".project-slide");

const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");
const projectCounter = document.getElementById("projectCounter");

let currentProject = 0;

function showProject(index) {

    projectSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    projectSlides[index].classList.add("active");

    projectCounter.textContent =
        (index + 1) + " / " + projectSlides.length;
}

nextProject.addEventListener("click", function() {

    currentProject =
        (currentProject + 1) % projectSlides.length;

    showProject(currentProject);
});

prevProject.addEventListener("click", function() {

    currentProject =
        (currentProject - 1 + projectSlides.length)
        % projectSlides.length;

    showProject(currentProject);
});