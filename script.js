// Toggle Ingredients
const toggleIngredientsBtn = document.getElementById("toggleIngredients");
const ingredientsSection = document.getElementById("ingredientsSection");

toggleIngredientsBtn.addEventListener("click", () => {

    ingredientsSection.classList.toggle("hidden");

    if (ingredientsSection.classList.contains("hidden")) {
        toggleIngredientsBtn.textContent = "Show Ingredients";
    } else {
        toggleIngredientsBtn.textContent = "Hide Ingredients";
    }
});


// Toggle Steps
const toggleStepsBtn = document.getElementById("toggleSteps");
const stepsSection = document.getElementById("stepsSection");

toggleStepsBtn.addEventListener("click", () => {

    stepsSection.classList.toggle("hidden");

    if (stepsSection.classList.contains("hidden")) {
        toggleStepsBtn.textContent = "Show Steps";
    } else {
        toggleStepsBtn.textContent = "Hide Steps";
    }
});


// Cooking Steps Logic
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextStep");
const startCookingBtn = document.getElementById("startCooking");
const progressBar = document.getElementById("progressBar");

let currentStep = 0;

// Start Cooking
startCookingBtn.addEventListener("click", () => {

    stepsSection.classList.remove("hidden");
    toggleStepsBtn.textContent = "Hide Steps";

    steps.forEach(step => {
        step.classList.remove("active-step");
    });

    currentStep = 0;
    steps[currentStep].classList.add("active-step");

    updateProgressBar();

    startTimer();
});

// Next Step
nextBtn.addEventListener("click", () => {

    if (currentStep < steps.length - 1) {

        steps[currentStep].classList.remove("active-step");

        currentStep++;

        steps[currentStep].classList.add("active-step");

        updateProgressBar();
    }
});

// Update Progress Bar
function updateProgressBar() {

    let progress = ((currentStep + 1) / steps.length) * 100;

    progressBar.style.width = progress + "%";
}


// Timer Function
let timerStarted = false;

function startTimer() {

    if (timerStarted) return;

    timerStarted = true;

    let totalTime = 45 * 60;

    const timerElement = document.getElementById("timer");

    const countdown = setInterval(() => {

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(countdown);
            timerElement.textContent = "Recipe Complete!";
        }

    }, 1000);
}