/* ==========================================================================
   Grill Seeker - mobile menu (used on every page)
   ========================================================================== */

// ---------- Page elements ----------
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

// ---------- Opening and closing the menu ----------

// Runs when the user clicks the Menu button
menuToggle.addEventListener("click", function () {
    // Switch the "is-open" class on or off and remember which it is now
    const isOpen = mainNav.classList.toggle("is-open");

    // Tell screen readers whether the menu is open
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});