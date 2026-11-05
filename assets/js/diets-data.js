/* ==========================================================================
   Grill Seeker - diet information (used by the Dietary Guide page)
   ========================================================================== */

// Each diet has a short description plus lists of what it includes and avoids
const DIETS = [
    {
        name: "Vegetarian",
        description: "No meat or fish. Plant foods make up most meals.",
        includes: ["Vegetables and fruit", "Grains and pulses", "Eggs and dairy (in most versions)"],
        avoids: ["Meat", "Poultry", "Fish and seafood"]
    },
    {
        name: "Vegan",
        description: "No animal products at all, in food or ingredients.",
        includes: ["Vegetables and fruit", "Grains, nuts and seeds", "Pulses and tofu"],
        avoids: ["Meat and fish", "Eggs and dairy", "Honey"]
    },
    {
        name: "Pescatarian",
        description: "Fish and seafood, but no other meat.",
        includes: ["Fish and seafood", "Vegetables and fruit", "Eggs and dairy (usually)"],
        avoids: ["Beef, pork and lamb", "Poultry"]
    },
    {
        name: "Gluten-free",
        description: "Avoids gluten, a protein found in some grains.",
        includes: ["Rice and potatoes", "Meat, fish and vegetables", "Gluten-free flours and oats"],
        avoids: ["Wheat, barley and rye", "Most bread, pasta and cakes", "Many sauces and ready meals"]
    },
    {
        name: "Dairy-free",
        description: "No milk or foods made from milk.",
        includes: ["Plant milks such as oat or soy", "Meat, fish and vegetables", "Olive oil and nuts"],
        avoids: ["Milk and cream", "Cheese and yoghurt", "Butter"]
    },
    {
        name: "Low-carb",
        description: "Fewer starchy and sugary foods, more protein and vegetables.",
        includes: ["Meat, fish and eggs", "Non-starchy vegetables", "Nuts and healthy fats"],
        avoids: ["Bread, pasta and rice", "Sugary foods and drinks", "Potatoes"]
    }
];