# Grill Seeker

Grill seeker is a site created for the general public, for parents, people living on their own, or anyone who cooks for themselves or other other people. It provides a solution to those who want inspiration regarding what to cook, and can find recipes based on the ingredients they have available.

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

*Who the site is for.* TODO

This site is perfect for those who struggle with recipe ideas. Of course, this is a wide range of people, from athletes, who are constantly searching for recipes, to parents who want some ideas on what to cook for their children, and anyone who simply wants more inspiration in the kitchen or can't decide what to cook. Across the board, many people struggle with coming up with what to eat, and Grill Seeker aims to solve that problem.

As a parent, I want to have access to a variety of recipes that take away the mental load of deciding what to cook every day. This is so that I can pick something in a matter of seconds and know what to make. (met using the Filters, recipe cards and Cuisines page).
As an athlete who does a healthy weekly shop, I want to get ideas on what those ingredients I buy can create so that I can meet my nutritional goals. (Met using Ingredient search and Dietary Guide).
As someone who works long hours, I want to have a service that can make the decision for me on what to cook so that I can have a bit more time to relax after work. (met using Surprise me).

## Features

### Existing features
- **Ingredient search:**
 This feature allows users to input the ingredients they are in possession of, or want to use. When they run the search, the site will provide a variety of recipe cards that match the inputted ingredients. This ties back to the purpose of utilising chosen ingredients, in order to save time, money and mental load.
-**Input validation:**
  - Every ingredient inputted to the ingredient box is verified before adding and the search.
  - An empty entry is rejected, and returns a message to the user requesting an         ingredient input.
  - Number and symbols in the entry returns a rejection, requesting valid ingredient names.
  - Repeated ingredient entries returns a message to the user that the ingredient is already on the list.
  - The error/rejection messages appear next to entry box, clearly informing the user on what is wrong and what they need to change.
- **Filters (cuisine and category):** 
  - Users can narrow down search results by filtering cuisine, dish category, or both at the same time, by using the filter options.
  -Filters can be added alongside the ingredients entered, returning recipe cards that fit the pantry inputs and the style of dish according to the user.
  - Changing the filter updates the results instantly, allowing the user to explore various styles of dish. This meets the claim of "choose the style of dish you want to make" from the purpose section.
- **Surprise me:** 
  - Users who dont want to add ingredients can press the "Surprise me" button, for the site to choose a random recipe.
  - The button still can pull from the cuisine and category filters, so the user can still tailor the recipe to their desire.
  - This removes another element of the decision making, which suits those who dont want to input ingredients, such as the user who works long hours and just wants the decision to be made for them.

- **Recipe cards and links:** 
  - Every recipe is displayed as a card, allowing the user to scan their options.
  - Cards display recipe image and the title, as well as how many ingredients the user owns if they have inputted ingredients.
  - Each recipe has a "view recipe" button which links the user to the full recipe, where they have access to ingredients needed and cooking method.
  - The "view recipe" link opens in a new tab, so the user can keep their progress on the site and return to it after.
- **Cuisines page and detail view:** TODO
- **Dietary Guide:** TODO
- **About page:** TODO
- **404 page and redirect:** TODO
- **Responsive navigation and mobile menu:** TODO

### Possible future features
- TODO

## UX design

### Design process
*How the design was planned, and the reasoning behind it.* TODO

### Wireframes
*Wireframes created before building, one per screen size. Add each image with a short note on how it was followed or changed.* TODO

| Page | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Home | TODO | TODO | TODO |
| Cuisines | TODO | TODO | TODO |

### Design decisions
- **Colour palette:** TODO
- **Typography:** TODO
- **Layout and information hierarchy:** TODO
- **Navigation:** TODO
- **Feedback to the user (loading, errors, confirmation):** TODO

### Accessibility
- TODO

### Deliberate departures from design guidelines
*List any choice that goes against common UX advice, with the reason.* TODO

## Technologies used

- HTML5, CSS3 and JavaScript (written by me)
- External API: TODO
- Hosting and version control: TODO
- Design tool: TODO
- Fonts: TODO

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
*How the live site was compared with the development version.* TODO

## Deployment

### Deploying to GitHub Pages
1. TODO

### Running locally
1. TODO

## Version control and development process

*How Git and GitHub were used, with the stages of development.* TODO

## Known issues and limitations

- **API key visible in the front-end code:** TODO
- **API daily request limit:** TODO

## Credits and attribution

### Code
| What | Source | Where used |
|------|--------|------------|
| TODO | TODO | TODO |

### Data
- TODO

### Images
| Image | Photographer | Source and link |
|-------|--------------|-----------------|
| TODO | TODO | TODO |

### Fonts and other resources
- TODO

## Use of AI assistance

*A short, honest note on how AI tools were used, following the course's guidance.* TODO