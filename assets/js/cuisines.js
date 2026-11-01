/* ==========================================================================
   Grill Seeker - Cuisines page script
   ========================================================================== */

// ---------- Page elements ----------
const cuisineGrid = document.getElementById("cuisine-grid");
const cuisineDialog = document.getElementById("cuisine-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogOverview = document.getElementById("dialog-overview");
const dialogDishes = document.getElementById("dialog-dishes");
const dialogRecipesLink = document.getElementById("dialog-recipes-link");
const dialogClose = document.getElementById("dialog-close");

// ---------- Showing the cuisine cards ----------

// Draws one card for every cuisine in the CUISINES list
function renderCuisines() {
    // Clear the grid first so nothing is shown twice
    cuisineGrid.innerHTML = "";

    CUISINES.forEach(function (cuisine) {
        const card = document.createElement("article");
        card.classList.add("cuisine-card");

        const body = document.createElement("div");
        body.classList.add("cuisine-card-body");

        const name = document.createElement("h2");
        name.textContent = cuisine.name;

        const description = document.createElement("p");
        description.textContent = cuisine.description;

        body.appendChild(name);
        body.appendChild(description);

        // Button that opens the detail view for this cuisine
        const learnMoreButton = document.createElement("button");
        learnMoreButton.type = "button";
        learnMoreButton.textContent = "Learn more";
        learnMoreButton.setAttribute("aria-label", "Learn more about " + cuisine.name + " cuisine");
        learnMoreButton.addEventListener("click", function () {
            openCuisineDialog(cuisine);
        });
        body.appendChild(learnMoreButton);
        card.appendChild(body);
        cuisineGrid.appendChild(card);
    });
}

// ---------- Cuisine detail dialog ----------

// Fills the dialog with one cuisine's information and opens it
function openCuisineDialog(cuisine) {
    dialogTitle.textContent = cuisine.name;
    dialogOverview.textContent = cuisine.overview;

    // Rebuild the list of popular dishes
    dialogDishes.innerHTML = "";
    cuisine.dishes.forEach(function (dish) {
        const item = document.createElement("li");
        item.textContent = dish;
        dialogDishes.appendChild(item);
    });

    // The link carries the chosen cuisine back to the homepage search
    dialogRecipesLink.href = "index.html?cuisine=" + encodeURIComponent(cuisine.value);

    cuisineDialog.showModal();
}

// Closes the dialog when the × button is clicked
dialogClose.addEventListener("click", function () {
    cuisineDialog.close();
});

// ---------- Start ----------
renderCuisines();