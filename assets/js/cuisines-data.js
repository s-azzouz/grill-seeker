/* ==========================================================================
   Grill Seeker - cuisine information (used by the Cuisines page)
   ========================================================================== */

// Each cuisine has a "value" that matches the Cuisine filter on the homepage
const CUISINES = [
    {
        name: "Italian",
        value: "italian",
        description: "Fresh pasta and simple sauces. Regional favourites to discover.",
        overview: "Italian cooking relies on a few good ingredients, and it changes a lot from region to region, from creamy risotto in the north to tomato-rich dishes in the south.",
        dishes: ["Spaghetti carbonara", "Margherita pizza", "Mushroom risotto"]
    },
    {
        name: "Japanese",
        value: "japanese",
        description: "Seasonal, balanced flavours. From sushi to warming ramen.",
        overview: "Japanese cuisine focuses on seasonal ingredients and balance, with rice, fish, soy sauce and miso at its heart.",
        dishes: ["Sushi", "Ramen", "Chicken teriyaki"]
    },
    {
        name: "Mexican",
        value: "mexican",
        description: "Bold spices and fresh salsas. Explore tacos, mole and more.",
        overview: "Mexican food is built on corn, beans and chillies, with bright salsas and slow-cooked sauces such as mole.",
        dishes: ["Tacos al pastor", "Guacamole", "Chicken enchiladas"]
    },
    {
        name: "Indian",
        value: "indian",
        description: "Fragrant spices and rich curries. Discover a world of flavour.",
        overview: "Indian cooking layers spices such as cumin, turmeric and coriander, and varies widely by region, from creamy northern curries to coconut-based dishes in the south.",
        dishes: ["Butter chicken", "Chana masala", "Vegetable biryani"]
    },
    {
        name: "Thai",
        value: "thai",
        description: "Sweet, sour and spicy flavours. Fresh herbs in every dish.",
        overview: "Thai cooking balances sweet, sour, salty and spicy in each dish, using fresh herbs such as basil, lemongrass and coriander.",
        dishes: ["Pad thai", "Green curry", "Tom yum soup"]
    },
    {
        name: "French",
        value: "french",
        description: "Classic techniques and sauces. From bistro meals to pastries.",
        overview: "French cuisine is known for technique, from rich sauces to delicate pastry, but also for simple regional home cooking.",
        dishes: ["Coq au vin", "Ratatouille", "Crêpes"]
    },
    {
        name: "Chinese",
        value: "chinese",
        description: "Regional dishes and traditions. Noodles, dumplings and more.",
        overview: "Chinese cuisine covers many regional styles, from fiery Sichuan dishes to light Cantonese steaming, often built around rice, noodles and stir-frying.",
        dishes: ["Kung pao chicken", "Pork dumplings", "Egg fried rice"]
    },
    {
        name: "Greek",
        value: "greek",
        description: "Olive oil, herbs and fresh veg. Simple Mediterranean cooking.",
        overview: "Greek cooking uses olive oil, lemon, herbs and fresh vegetables, with grilled meats, feta and slow-baked dishes.",
        dishes: ["Moussaka", "Chicken souvlaki", "Greek salad"]
    }
];