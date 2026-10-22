/* ==========================================================================
   Grill Seeker - main script
   ========================================================================== */

// ---------- Page elements ----------
const ingredientForm = document.getElementById("ingredient-form");
const ingredientInput = document.getElementById("ingredient-input");
const ingredientError = document.getElementById("ingredient-error");
const ingredientList = document.getElementById("ingredient-list");


// ---------- Stored data ----------

// The ingredients the user has added so far
let ingredients = [];

// ---------- Error message helpers ----------

// Shows a message under the ingredient box
function showError(message) {
    ingredientError.textContent = message;
    ingredientError.hidden = false;
}

// Hides the message again
function clearError() {
    ingredientError.textContent = "";
    ingredientError.hidden = true;
}
// ---------- Showing the ingredient tags ----------

// Draws one tag for every ingredient in the list
function renderIngredients() {
    // Clear the old tags first so nothing is shown twice
    ingredientList.innerHTML = "";

    ingredients.forEach(function (ingredient) {
        const tag = document.createElement("li");
        tag.classList.add("ingredient-tag");
        tag.textContent = ingredient;
        ingredientList.appendChild(tag);
    });
}

// ---------- Adding an ingredient ----------

// Runs when the user clicks Add or presses Enter
ingredientForm.addEventListener("submit", function (event) {
    // Stop the browser reloading the page
    event.preventDefault();

    // Remove extra spaces from the start and end
    const ingredient = ingredientInput.value.trim();

    // Presence check: do not accept an empty box
    if (ingredient === "") {
        showError("Please enter an ingredient.");
        return;
    }

    clearError();

    // Save the ingredient to the list
    ingredients.push(ingredient);
    console.log("Ingredients so far:", ingredients);

    // Clear the box ready for the next ingredient
    ingredientInput.value = "";
});