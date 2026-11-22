# Grill Seeker

Grill Seeker is a site created for the general public, for parents, people living on their own, or anyone who cooks for themselves or other people. It provides a solution to those who want inspiration regarding what to cook, and can find recipes based on the ingredients they have available.

**Live site:** https://s-azzouz.github.io/grill-seeker/
**Repository:** https://github.com/s-azzouz/grill-seeker

## Contents

1. [Purpose and value](#purpose-and-value)
2. [Target audience and user stories](#target-audience-and-user-stories)
3. [Features](#features)
4. [UX design](#ux-design)
5. [Technologies used](#technologies-used)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Version control and development process](#version-control-and-development-process)
9. [Known issues and limitations](#known-issues-and-limitations)
10. [Credits and attribution](#credits-and-attribution)
11. [Use of AI assistance](#use-of-ai-assistance)

## Purpose and value

With the ever-constant busy lives that we all live, between work, childcare, socialising and our hobbies, we are expected to decide what to eat every day, and while it may not seem like much of a chore, it can really weigh us down, and it’s just one extra thing to think about. Grill Seeker aims to solve this problem by giving you instant recipe ideas based on the ingredients you have and the style of dish you want to make. A pantry-based search was chosen to allow users to have the option to use recipes with ingredients they already have, rather than random results that force them to go shopping and purchase items they may never use again. This means that it won’t be a full shop every day for new ingredients, and it minimises wastage.

**Value to users**
- Saves time thinking about recipe ideas
- Minimises wastage and saves money by using ingredients already owned
- Provides recipe inspiration

**Value to the site owner**
- Provides a repeat audience, users returning daily or multiple times a week for recipes
- Can build a paid tier which allows a more tailored experience or a wider selection of recipes
- Good to build an audience and users to funnel meal plans or further business ventures

## Target audience and user stories

This site is perfect for those who struggle with recipe ideas. Of course, this is a wide range of people, from athletes, who are constantly searching for recipes, to parents who want some ideas on what to cook for their children, and anyone who simply wants more inspiration in the kitchen or can't decide what to cook. Across the board, many people struggle with coming up with what to eat, and Grill Seeker aims to solve that problem.

As a parent, I want to have access to a variety of recipes that take away the mental load of deciding what to cook every day. This is so that I can pick something in a matter of seconds and know what to make. (met using the Filters, recipe cards and Cuisines page).

As an athlete who does a healthy weekly shop, I want to get ideas on what those ingredients I buy can create so that I can meet my nutritional goals. (Met using Ingredient search and Dietary Guide).

As someone who works long hours, I want to have a service that can make the decision for me on what to cook so that I can have a bit more time to relax after work. (met using Surprise me).

## Features

### Existing features
- **Ingredient search:**
 This feature allows users to input the ingredients they are in possession of, or want to use. When they run the search, the site will provide a variety of recipe cards that match the inputted ingredients. This ties back to the purpose of utilising chosen ingredients, in order to save time, money and mental load.

- **Input validation:**
  - Every ingredient inputted to the ingredient box is verified before adding and the search.
  - An empty entry is rejected, and returns a message to the user requesting an ingredient input.
  - Number and symbols in the entry returns a rejection, requesting valid ingredient names.
  - Repeated ingredient entries returns a message to the user that the ingredient is already on the list.
  - The error/rejection messages appear next to entry box, clearly informing the user on what is wrong and what they need to change.

- **Filters (cuisine and category):** 
  - Users can narrow down search results by filtering cuisine, dish category, or both at the same time, by using the filter options.
  - Filters can be added alongside the ingredients entered, returning recipe cards that fit the pantry inputs and the style of dish according to the user.
  - Changing the filter updates the results instantly, allowing the user to explore various styles of dish. This meets the claim of "choose the style of dish you want to make" from the purpose section.

- **Surprise me:** 
  - Users who don't want to add ingredients can press the "Surprise me" button, for the site to choose a random recipe.
  - The button still can pull from the cuisine and category filters, so the user can still tailor the recipe to their desire.
  - This removes another element of the decision making, which suits those who dont want to input ingredients, such as the user who works long hours and just wants the decision to be made for them.

- **Recipe cards and links:** 
  - Every recipe is displayed as a card, allowing the user to scan their options.
  - Cards display recipe image and the title, as well as how many ingredients the user owns if they have inputted ingredients.
  - Each recipe has a "view recipe" button which links the user to the full recipe, where they have access to ingredients needed and cooking method.
  - The "view recipe" link opens in a new tab, so the user can keep their progress on the site and return to it after.

- **Cuisines page and detail view:** The Cuisines page allows users to browse by cuisine instead of searching by ingredient.
  - Each cuisine displays as a card with a photo, the cuisine name, a short description of the cuisine, and a Learn more button.
  - Selecting "Learn more" opens an in-depth view on top of the page, with more information on the cuisine and suggested recipes.
  - A "See recipes" button in the detailed view redirects the user to available recipes that match that cuisine.
  - The detail view contains a close button, which returns the user to the cuisine cards without leaving the page.

- **Dietary Guide:** The Dietary Guide is a page which provides information on common diets, in order to educate the user on what each one consists of before choosing recipes.
  - Each diet shows up as a card. The page shows Vegetarian, Vegan, Pescatarian, Gluten-free and Low-carb.
  - Every card includes a short piece of information, including what the diet includes and what it avoids.
  - This guide is for educational purposes only. It does not filter recipe results and bears no functionality aside from the text.

- **About page:** The About page provides the user with the purpose of Grill Seeker, so they can understand the site without any other research.
  - The page opens with a heading and a short tagline: "Helping you decide what to cook with what you already have."
  - A "Why it exists" section describes the problem the site solves.
  - A "Who it is for" section lists who the site is designed for.
  - A "How it works" section provides three short steps: add ingredients, optionally pick a cuisine or category, then choose Find recipes or Surprise me. This simplifies the experience for the user.
  - The page links to the Cuisines page and the Dietary Guide, to encourage users to explore more of the site before they cook.
  - A "Where the recipes come from" section mentions the Spoonacular API, with a link that opens in a new tab.

- **404 page and redirect:** If a user tries to visit a page that doesn't exist, a custom 404 page is displayed, rather than a browser error.
  - The page contains the Grill Seeker logo, a message saying "Sorry, no food here!" and directs the user back to the homepage. This means the user does not need to use the back button on the browser.
  - The page maintains the same styling and fonts as the rest of the site, to keep the design consistent across the board.
- **Responsive navigation and mobile menu:** The navigation has been designed to adapt to the screen size, so that the full page is accessible on mobile devices as well as larger screens.
  - On devices with smaller screens, the navigation links are hidden behind the Menu button, placed at the top left of the header, and the logo is centred next to it.
  - When the "menu" button is pressed, a row of links appears, which directs to Home, Cuisines, Dietary Guide and About.
  - The current page is in bold and underlined on the list of navigation links, which indicates to the user the page that they are currently on.
  - If the user presses menu again when the list is open, it will remove the list, similar to a dropdown menu.
  - This navigation is different on the desktop version, where the links are always visible.

### Possible future features
- **Diet filtering:** This would be a feature that would allow users to select a diet from the Dietary Guide page, and add it as a filter to their recipe search, to get a more tailored list of results.
- **Nutrition information:** Showing nutritional information and details on the recipe cards, for example protein or calories, would be a useful feature to allow users to see how the meals affect their dietary goals.
- **Saved recipes:** This would require an account system, but allowing users to save their favourite recipes would prove helpful to allow users to return to the site and build a personalised list of favourites.

## UX design

### Design process
[How you planned the design, e.g. which tool you used for wireframes, what you decided first (layout, colours, navigation), and why.]

### Wireframes
Wireframes were created before building, one per screen size. Each is shown below with a note on how it was followed or changed.

| Page | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Home | ![Home desktop wireframe](assets/images/wireframe-home-desktop.png) | ![Home tablet wireframe](assets/images/wireframe-home-tablet.png) | ![Home mobile wireframe](assets/images/wireframe-home-mobile.png) |
| Cuisines | ![Cuisines desktop wireframe](assets/images/wireframe-cuisines-desktop.png) | ![Cuisines tablet wireframe](assets/images/wireframe-cuisines-tablet.png) | ![Cuisines mobile wireframe](assets/images/wireframe-cuisines-mobile.png) |

**How the wireframes were followed:** [What matched the final site, and what changed and why.]

### Design decisions
- **Colour palette:** A warm cream background colour, with dark green text and logo. I went for a terracotta color on the buttons and accent in the logo. The panel is pale sage, to highlight the ingredients search box. I decided to choose warm colours as I want this to feel like a cosy, friendly site that induces a comfortable feeling for users. Comfort plays a big role in food and hence why I designed it this way.
- **Typography:** I used serif typeface for the headings, and a clean sans-serif for the body text and the buttons. DM serif for the headings and Inter for the body text and buttons. These fonts are easy to read, and don't look too "professional", giving off more of a friendly look.
- **Layout and information hierarchy:** Each page opens with a large heading and a short line after with more detail, providing the user with the purpose of the page straight away. Content is always placed in cards and grouped sections, in order of priority. For example, the ingredient search is placed first on the homepage. The cuisine page and dietary cards also utilise the same structure, to ensure that the information is easy to scan and find.
- **Navigation:** The logo has been centred in the header, with the same links available on every page. On mobile devices, the links are hidden behind a menu button, and the current page is highlighted through bold and underlined text. This allows users to note where they are on the website.
- **Feedback to the user (loading, errors, confirmation):** When an ingredient is rejected, this relates to the text content. The search rejects special characters and numbers, and will return an error message such as "Please use letters only, for example: spinach.". After inputting valid ingredients, the page displays "Finding recipes" while the recipes load.

### Accessibility
- **Semantic structure:** Pages utilise semantic HTML elements (header, nav, main, section and footer), and every page has a main heading followed by the section headings, making the structure clear to screen readers.
- **Language:** The site is in English, as declared in the HTML. 
- **Image alternative text:** The logo and cuisine images have descriptive alt text, and the logo's descriptive text explains where the link goes. The recipe cards pull their images from the Spoonacular API, so its not possible to include descriptive texts for those options.
- **Form labels:** The ingredient box and dropdown menus from the category and cuisine boxes have labels, so the user understands what the sections are for.
- **Navigation:** The navigation is labelled as the main navigation, and the users current page is marked with bold and underlined text, so users can understand where they are in the site.
- **Mobile menu:** The Menu button is a real functional button, which can be used with the keyboard. It uses aria-expanded and aria-controls to tell assistive technology whether the menu is open and which element it controls.
- **External links:** All the links to other sites open in a new tab, and their labels note this (for example, "Spoonacular API (opens in a new tab)"), so users know what to expect.
- **Colour contrast:** [State the result of a contrast check, e.g. "Text and button colours were checked with a contrast checker and meet WCAG AA." Only write this once you've checked.]
- **Readable text and responsive layout:** Text is a suitable size and legible, and the layout also adapts to phone, tablet and desktop screens. Zooming in on the page also does not break the site.

### Deliberate departures from design guidelines
- No deliberate departures from design guidelines were made.


## Technologies used

- HTML5, CSS3 and JavaScript.
- External API: Spoonacular (complexSearch endpoint), used to search for recipes from the ingredients, cuisine and category that the user desires.
- Hosting and version control: Git and GitHub for version control, and the live site utilises GitHub pages.
- Design tool: Figma for the wireframes.
- Fonts: DM Serif Display for headings and Inter for body text. Loaded from google fonts.
- Code editor: VS Code.

## Testing

### Validation
| Tool | Files checked | Result | Fixes made |
|------|---------------|--------|------------|
| W3C HTML Validator | TODO | TODO | TODO |
| W3C CSS (Jigsaw) Validator | TODO | TODO | TODO |
| JavaScript linter | TODO | TODO | TODO |

### Manual test log
| # | Feature | Steps | Expected result | Actual result | Pass/Fail |
|---|---------|-------|-----------------|---------------|-----------|
| 1 | TODO | TODO | TODO | TODO | TODO |

### Responsive and browser testing
*Screen sizes and browsers tested.* TODO

### User story testing
*How each user story was checked, with screenshots.* TODO

### Bugs found and fixed
| Bug | Cause | Fix |
|-----|-------|-----|
| TODO | TODO | TODO |

### Bugs not fixed
*Any known problem that remains, and why.* TODO

### Deployed version check
The site is hosted on GitHub Pages from the main branch of the repository. The method was as follows

1. Logged in to GitHub and open the repository: https://github.com/s-azzouz/grill-seeker
2. Selected the **Settings** tab.
3. In the left-hand menu, selected **Pages**.
4. Under **Build and deployment**, set the source to **Deploy from a branch**.
5. Chose the **main** branch and the **/ (root)** folder, then selected **Save**.
6. Wait a few minutes, then refresh the Pages settings. The live link appeared at the top: https://s-azzouz.github.io/grill-seeker/
7. The GitHub link updates with each updated commit, so every push to the main branch updated the live site automatically.

### Deploying to GitHub Pages
The site is hosted on GitHub Pages from the main branch of the repository.

The GitHub link updates with each updated commit.

**Before deploying, the following was checked:**
- No commented-out code left in the files.
- All internal links work, including the 404 page.
- The live site was compared with the development version. Added a link to the Testing section.

### Running locally
1. Tested by opening the repository on GitHub and selecting **Code**, then copying the HTTPS link.
2. In a terminal, running `git clone` followed by the copied link.
3. Opening the project folder in a code editor (Visual Studio Code).
4. Added Spoonacular API key
5. Opening `index.html` in a browser, and using an extension (Live Server).

## Version control and development process

Git and GitHub were used for version control throughout the development of the project. Every feature and fix was committed separately, and features were verified as they were built, in order to address problems as they arose.

**Development stages**
1. **Setup:** This was the creation of the repository and folder structure, ensuring separate folders for different uses (CSS,JS,Images etc).
2. **Core search:** This stage was the creation of the ingredient input, validation and API requests.
3. **Results and filters:** At this stage recipe cards were added, along with category and cuisine filters, and the Surprise Me button.
4. **Extra pages:** This was the development of the Cuisines page, detail view, and the Dietary and 404 page.
5. **Responsive design and accessibility:** Added the mobile menu, and addressed the fixed layout and contrast issues.
6. **Testing and deployment:** Validating the code, addressing bugs that were discovered, and deployment to GitHub Pages.

**Commit messages**
Commits are consistent throughout, explaining the change to provide a clear view of how the website was developed and to aid with version control. Main structure of the pages is larger commits, but this is to provide a clear starting point to build on.

The full commit history of the project can be seen in the github link: (https://github.com/s-azzouz/grill-seeker/commits/main).

## Known issues and limitations

- **API key visible in the front-end code:** The Spoonacular API key is stored in the JavaScript file, so it is visible to anyone who looks at the page source or repository, allowing them to see and use it as they like. This is because the site has no back end to hide the key in, and the project is strictly front-end only. A possible fix would be to send requests through a small server holding the key, however that is outside the scope of this unit. The key is deployed on a free plan, so there is no risk of a charge, rather the possibility of the usage limit being reached, rather than incurring a charge.
- **API daily request limit:** The API used (Spoonacular) limits the amount of requests per day. Once the limit has been reached, the searches will not return results until the limit resets. In testing the limit was not reached, so the result once this limit has been hit is unclear.
- **Dietary Guide does not filter results:** The Dietary Guide is useful for providing common diets, but there is no connection to the recipe search, therefore users are not yet able to filter recipes based on diet. This has been mentioned in the possible future features.

## Credits and attribution

### Code
| What | Source | Where used |
|------|--------|------------|
| TODO | TODO | TODO |

### Data
- All Recipe data is pulled from the Spoonacular API: (https://spoonacular.com/food-api).
- The information on Cuisines and Dietary Guide pages were sourced by ChatGPT, and rewritten by me.

### Images
All cuisine images are obtained from Unsplash.com, and the Logo was designed by myself on Canva.

### Fonts and other resources
- [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) and [Inter](https://fonts.google.com/specimen/Inter), this was loaded from Google Fonts.

## Use of AI assistance

Claude was used as an assistant to keep track of the projects progress, and ChatGPT to help summarise cuisine information, but all code was written by hand.