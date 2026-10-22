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