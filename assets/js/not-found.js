/* ==========================================================================
   Grill Seeker - 404 page script
   ========================================================================== */

// ---------- Settings ----------
const HOMEPAGE_ADDRESS = "/grill-seeker/index.html";
const REDIRECT_DELAY_SECONDS = 5;

// ---------- Page elements ----------
const redirectMessage = document.getElementById("redirect-message");

// ---------- Redirect to the homepage ----------

// Tell the user what is about to happen (read out once by screen readers)
redirectMessage.textContent = "You will be taken to the homepage in "
    + REDIRECT_DELAY_SECONDS + " seconds.";

// Send the user to the homepage after a short pause
setTimeout(function () {
    // "replace" swaps this page in the history, so the Back button
    // does not bring the user straight back to the missing page
    window.location.replace(HOMEPAGE_ADDRESS);
}, REDIRECT_DELAY_SECONDS * 1000);