const projectSlides = document.querySelectorAll(".project-slide");

const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");
// Select project counter
const projectCounter = document.getElementById("projectCounter");

// start at the first project
let currentProject = 0;

// displays selected project
function showProject(index) {
    // hides all project slides
    projectSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    // only shows selected project slide
    projectSlides[index].classList.add("active");

    // updates counter to show the current project number
    projectCounter.textContent =
        (index + 1) + " / " + projectSlides.length;
}

//The navigation for the next button  
nextProject.addEventListener("click", function() {

    currentProject =
        (currentProject + 1) % projectSlides.length;

    showProject(currentProject);
});


// The navigation to go back a previous project
prevProject.addEventListener("click", function() {

    currentProject =
        (currentProject - 1 + projectSlides.length)
        % projectSlides.length;

    showProject(currentProject);
});