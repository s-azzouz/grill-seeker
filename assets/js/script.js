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

    ingredients.forEach(function (ingredient, index) {
        const tag = document.createElement("li");
        tag.classList.add("ingredient-tag");
        tag.textContent = ingredient;

        // Remove button for this tag
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "\u00d7";
        removeButton.setAttribute("aria-label", "Remove " + ingredient);

        // Remove this ingredient when its button is clicked
        removeButton.addEventListener("click", function () {
            ingredients.splice(index, 1);
            renderIngredients();
        });

        tag.appendChild(removeButton);
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

    // Duplicate check: do not add the same ingredient twice (ignoring capital letters)
    const alreadyAdded = ingredients.some(function (item) {
        return item.toLowerCase() === ingredient.toLowerCase();
    });

    if (alreadyAdded) {
        showError(ingredient + " is already in your list.");
        return;
    }

    clearError();

    // Save the ingredient to the list
    ingredients.push(ingredient);
    renderIngredients();

    // Clear the box ready for the next ingredient
    ingredientInput.value = "";
});