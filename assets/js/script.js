/* ==========================================================================
   Grill Seeker - main script
   ========================================================================== */

// ---------- Page elements ----------
const ingredientForm = document.getElementById("ingredient-form");
const ingredientInput = document.getElementById("ingredient-input");
const ingredientError = document.getElementById("ingredient-error");
const ingredientList = document.getElementById("ingredient-list");
const resultsGrid = document.getElementById("results-grid");
const resultsStatus = document.getElementById("results-status");
const findRecipesButton = document.getElementById("find-recipes");

// ---------- API settings ----------

// Spoonacular recipe API
const API_BASE_URL = "https://api.spoonacular.com";
const API_KEY = "84e8e2a8e7bf41099390064ed46c95fa";

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

// ---------- Getting recipes from the API ----------

// Asks the API for recipes that use the given ingredients
async function fetchRecipes(ingredientNames) {
    // Join the ingredients into one comma-separated list for the web address
    const ingredientText = ingredientNames.map(encodeURIComponent).join(",");

    const url = API_BASE_URL + "/recipes/findByIngredients"
        + "?ingredients=" + ingredientText
        + "&number=6"
        + "&ranking=1"
        + "&apiKey=" + API_KEY;

    const response = await fetch(url);

    // Stop if the API answered with an error status
    if (!response.ok) {
        throw new Error("The recipe service returned status " + response.status);
    }

    return await response.json();
}

// ---------- Showing the recipe cards ----------

// Draws one card for every recipe the API returned
function renderRecipes(recipes) {
    // Clear any old cards first
    resultsGrid.innerHTML = "";

    recipes.forEach(function (recipe) {
        const card = document.createElement("article");
        card.classList.add("recipe-card");

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.title;

        const body = document.createElement("div");
        body.classList.add("recipe-card-body");

        const title = document.createElement("h3");
        title.textContent = recipe.title;

        const summary = document.createElement("p");
        summary.textContent = "Uses " + recipe.usedIngredientCount
            + " of your ingredients, "
            + recipe.missedIngredientCount + " more needed";

        body.appendChild(title);
        body.appendChild(summary);
        card.appendChild(image);
        card.appendChild(body);
        resultsGrid.appendChild(card);
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

        // Length check: keep entries to a sensible size
    if (ingredient.length > 30) {
        showError("Please keep ingredient names under 30 characters.");
        return;
    }

        // Format check: letters, spaces, hyphens and apostrophes only
    const validFormat = /^[\p{L}][\p{L}\s'-]*$/u;

    if (!validFormat.test(ingredient)) {
        showError("Please use letters only, for example: spinach.");
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

// ---------- Searching for recipes ----------

// Runs when the user clicks Find recipes
findRecipesButton.addEventListener("click", async function () {
    // Need at least one ingredient to search with
    if (ingredients.length === 0) {
        showError("Add at least one ingredient first.");
        return;
    }

    clearError();

    const recipes = await fetchRecipes(ingredients);
    renderRecipes(recipes);
});