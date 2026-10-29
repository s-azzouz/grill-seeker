/* ==========================================================================
   Grill Seeker - Cuisines page script
   ========================================================================== */

// ---------- Page elements ----------
const cuisineGrid = document.getElementById("cuisine-grid");

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
        card.appendChild(body);
        cuisineGrid.appendChild(card);
    });
}

// ---------- Start ----------
renderCuisines();