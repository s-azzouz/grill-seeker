/* ==========================================================================
   Grill Seeker - Dietary Guide page script
   ========================================================================== */

// ---------- Page elements ----------
const dietGrid = document.getElementById("diet-grid");

// ---------- Helpers ----------

// Builds a heading and a bulleted list from an array of short phrases
function buildList(headingText, items) {
    const wrapper = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = headingText;

    const list = document.createElement("ul");
    items.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    wrapper.appendChild(heading);
    wrapper.appendChild(list);
    return wrapper;
}

// ---------- Showing the diet cards ----------

// Draws one card for every diet in the DIETS list
function renderDiets() {
    // Clear the grid first so nothing is shown twice
    dietGrid.innerHTML = "";

    DIETS.forEach(function (diet) {
        const card = document.createElement("article");
        card.classList.add("diet-card");

        const name = document.createElement("h2");
        name.textContent = diet.name;

        const description = document.createElement("p");
        description.textContent = diet.description;

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(buildList("Often includes", diet.includes));
        card.appendChild(buildList("Usually avoids", diet.avoids));
        dietGrid.appendChild(card);
    });
}

// ---------- Start ----------
renderDiets();