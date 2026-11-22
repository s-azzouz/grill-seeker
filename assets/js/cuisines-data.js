/* ==========================================================================
   Grill Seeker - cuisine information (used by the Cuisines page)
   ========================================================================== */

// Each cuisine has a "value" that matches the Cuisine filter on the homepage
const CUISINES = [
    {
        name: "Italian",
        value: "italian",
        description: "Fresh pasta and sauces. Often made with herbs and olive oil.",
        overview: "Italian cooking relies on a good quality ingredients, and it can varyfrom region to region, such as creamy risotto in the north to tomato-rich dishes in the south.",
        dishes: ["Spaghetti carbonara", "Margherita pizza", "Mushroom risotto"],
        imagealt: "Three plates of Italian food on a table, including carbonara, pesto pasta and a tomato pasta dish."
    },
    {
        name: "Japanese",
        value: "japanese",
        description: "Balanced, rich flavours. From sushi to ramen.",
        overview: "Japanese cuisine focuses on seasonal ingredients and is usually quite balanced, using rice, fish, soy sauce and miso at its heart.",
        dishes: ["Sushi", "Ramen", "Chicken teriyaki"],
        imagealt: "A platter of ramen with a variety of fillings and sauces"
    },
    {
        name: "Mexican",
        value: "mexican",
        description: "Punchy spices and fresh salsas. Examples include tacos, mole and more.",
        overview: "Mexican food is built on hearty food such ascorn, beans and chillies, with salsas and slow-cooked sauces such as mole.",
        dishes: ["Tacos al pastor", "Guacamole", "Chicken enchiladas"],
        imagealt: "A bowl of chilli con carne with fries, and tacos in the background"
    },
    {
        name: "Indian",
        value: "indian",
        description: "Fragrant spices and flavour rich curries. A whole lot of flavour.",
        overview: "Indian cooking blends spices such as cumin, turmeric and coriander, and can vary by region, from creamy northern curries to more coconut-based dishes in the south.",
        dishes: ["Butter chicken", "Chana masala", "Vegetable biryani"],
        imagealt: "A bowl with naan, and a variety of dips and various Indian foods"
    },
    {
        name: "Thai",
        value: "thai",
        description: "Sweet, sour, spicy. Every bite is a burst of flavour.",
        overview: "Thai cooking has a balance of sweet, sour, salty and spicy in every dish, using fresh herbs such as basil, lemongrass and coriander brings dishes to life.",
        dishes: ["Pad thai", "Green curry", "Tom yum soup"],
        imagealt: "A bowl of a thai dish with noodles, cashews, prawns and vegetables, with a lime wedge on the side"
    },
    {
        name: "French",
        value: "french",
        description: "Bon appetit. The French are known for classic techniques and sauces. From bistro meals to pastries.",
        overview: "French cuisine is reknowned for high class technique, from creating rich sauces to mouthwatering pastry, but they are also known for their simple regional home cooking.",
        dishes: ["Coq au vin", "Ratatouille", "Crêpes"],
        imagealt: "A table with olive bread, brioche buns in the background, and a couple of wine glasses"
    },
    {
        name: "Chinese",
        value: "chinese",
        description: "Noodles, dumplings and more.",
        overview: "Chinese cuisine has so much variety, from fiery Sichuan dishes to light Cantonese steaming. Rice, noodles and stir-frying are fundamental.",
        dishes: ["Kung pao chicken", "Pork dumplings", "Egg fried rice"],
        imagealt: "A table with a variety of dumplings, vegetables and some soup"
    },
    {
        name: "Greek",
        value: "greek",
        description: "Olive oil, herbs and fresh veg. Thats the Mediterranean dream.",
        overview: "Greek cooking favours olive oil, lemon, herbs and fresh vegetables, with grilled meats and feta too.",
        dishes: ["Moussaka", "Chicken souvlaki", "Greek salad"],
        imagealt: "A table with a mix of meats, dips and a pitta bread"
    }
];