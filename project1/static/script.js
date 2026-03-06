const problemDisplay = document.getElementById("problem-display");
const n1Display = document.getElementById("n1");
const n2Display = document.getElementById("n2");
const btn = document.getElementById("get-number-btn");

btn.addEventListener("click", async () => {
    try {
        const response = await fetch("/rand_int");
        const data = await response.json();

        n1Display.textContent = data.n1;
        n2Display.textContent = data.n2;

        // Trigger the pop animation
        problemDisplay.classList.remove("pop");
        void problemDisplay.offsetWidth;
        problemDisplay.classList.add("pop");
    } catch (error) {
        n1Display.textContent = "!";
        n2Display.textContent = "!";
    }
});
