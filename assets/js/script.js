/* ==========================================================================
   Grill Seeker - main script
   ========================================================================== */

// ---------- Page elements ----------
const ingredientForm = document.getElementById("ingredient-form");
const ingredientInput = document.getElementById("ingredient-input");
const ingredientError = document.getElementById("ingredient-error");

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

    // Temporary: we will replace this with real tags later
    console.log("Ingredient entered:", ingredient);
    
    // Clear the box ready for the next ingredient
    ingredientInput.value = "";
});