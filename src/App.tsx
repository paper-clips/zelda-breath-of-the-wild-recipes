import { useState } from 'react';
import slide from "/sounds/Slide.wav";
import * as data from "./data.json";
import TopBar from './components/TopBar';
import CategoriesRow from './components/CategoriesRow';
import RecipesGrid from './components/RecipesGrid';
import RecipeDetails from './components/RecipeDetails';
import BottomBar from './components/BottomBar';
import './App.css';

function App() {
  const recipes = data.recipes;                // Object made of all the recipes and each of the elements (from JSON file)
  const slideSound = new Audio(slide);         // Sound of sliding sound (usually when select other category or clicking on next/previous)
  const recipeImgPath = "./images/recipes/";   // Path where recipe images are
  
  const [selectedRecipe_name, setSelectedRecipe_name] = useState("Creamy Heart Soup");                          // Keep track of which recipe was clicked on (tracked using recipe name)
  const [recipePageNum, setRecipePageNum] = useState(0);                                                        // Number of recipes currently displayed on screen, grouped by 20 (each page) (0 -> first page, 20 -> second page, 40 -> third page, etc.)
  const [selectedRecipe_hearts, setSelectedRecipe_hearts] = useState(recipes["Creamy Heart Soup"].numHearts);   // Number of hearts for selected recipe (shown on top left corner of screen)
  const [isAnimationOn, setisAnimationOn] = useState(true);                                                     // Set animations on screen on/off (heart animation and recipe description)
  const [isSoundOn, setIsSoundOn] = useState(true);                                                             // Set sounds on/off
  const [selectedCategory, setselectedCategory] = useState("All");                                              // Set whichever category of recipes is selected (default is all, else it's vegetarian, meat, seafood, etc.)
  
  // Gather only recipes based on selected category (Ex: only seafood recipes)
  const recipeCategoryIndex = 5;                  // Category index in JSON file
  let checkIfRecipeInCategory = (rec: any[]) => {
    // Returns ALL recipes (no specific category was selected)
    if (selectedCategory == "All")
      return rec;
    // Checks whether the recipe is in the selected category (checks first array value of catagory in JSON file) (ex: "category": [*"Meat"*, "Seafood"])
    else if (rec[recipeCategoryIndex][0] == selectedCategory)
      return rec[recipeCategoryIndex];
    // Checks second array value of catagory in JSON file (ex: "category": ["Meat", *"Seafood"*])
    else if (rec[recipeCategoryIndex][1] == selectedCategory)
      return rec[recipeCategoryIndex];
    // If recipe is in the selected recipe, returns recipe
    else 
      return rec[recipeCategoryIndex] == selectedCategory;
  }
  
  let rec: any = recipes;       // Changed recipes type to "any" so recipesInCategory function works
  // Filter recipes, so only recipes in current selected category are chosen
  let recipesInCategory = Object.keys(recipes).map((key) => [key, rec[key].id, rec[key].description, rec[key].numHearts, rec[key].effect, rec[key].category, rec[key].file, rec[key].alt, rec[key].ingredient1, rec[key].ingredient2, rec[key].ingredient3, rec[key].ingredient4, rec[key].ingredient5]).filter(checkIfRecipeInCategory);
  // Total number of recipes in selected category (will change if changing category)
  let totalRecipesInCategory = recipesInCategory.length;

  // When user clicks on recipe square, sets current recipe selected (name) and number of hearts for the recipe
  const handleRecipeSelection = (recipeName: string, heartsNum: number) => {
    setSelectedRecipe_name(recipeName);
    setSelectedRecipe_hearts(heartsNum);
  };

  // When user clicks on next/previous page, keeps track of recipe pages (0, 20, 40, 60, etc.)
  const handleRecipePageSelection = (num: number) => setRecipePageNum(num);

  // When user clicks on previous page (left arrow or previous button)
  let prevPage = () => {
    // Over 20 recipes (can go to previous page)
    if (recipePageNum > 0) {
      // Show previous recipes (subtract 20, since 20 recipes fit in one page, and get previous recipes)
      handleRecipePageSelection(recipePageNum - 20);
      // Play slide sound
      if (isSoundOn)
        slideSound.play();
    }
    // Less than or only 20 recipes (stay on same page)
    else
      recipePageNum;
  };
  // When user clicks on next page (right arrow or next button)
  let nextPage = () => {
    // Check if there's recipes on the next page
    if (recipePageNum < (totalRecipesInCategory - 20)) {
      // Show next recipes (add 20, since 20 recipes fit in one page, and get next recipes)
      handleRecipePageSelection(recipePageNum + 20);
      // Play slide sound
      if (isSoundOn)
        slideSound.play();
    }
    else
      recipePageNum;
  };

  return (
    <div className="d-flex min-vh-100 min-vw-100">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        {/* Link background image */}
        <img className="game-width" src="images/linkImage.png" alt="Screenshot of Link next to a stack of planks surrounded by greenery" 
        />

        {/* Game screen */}
        <div className="position-relative">
          {/* Top bar */}
          <TopBar 
            numHearts={selectedRecipe_hearts} 
            isAnimationOn={isAnimationOn} 
            selectedRecipe={selectedRecipe_name}
          />

          {/* Center screen */}
          <div className="position-absolute container">
            <div id="center-screen" className="position-absolute row game-width pt-3 ps-5">
              <div className="col-6 ps-4 pe-4">
                {/* Row of categories to select from */}
                <CategoriesRow 
                  isSoundOn={isSoundOn} 
                  slideSound={slideSound} 
                  onCategoryChoice={(cat: string) => setselectedCategory(cat)} 
                  setRecipePageNum={(num: number) => setRecipePageNum(num)}
                />

                {/* Grid of selectable recipes */}
                <RecipesGrid 
                  recipePageNum={recipePageNum} 
                  totalRecipes={totalRecipesInCategory} 
                  recipes={recipesInCategory} 
                  onSelectedRecipe={handleRecipeSelection} 
                  isSoundOn={isSoundOn} 
                  prevPage={prevPage} 
                  nextPage={nextPage} 
                  recipeImgPath={recipeImgPath} 
                />
              </div>

              {/* Recipe details on the right of the screen */}
              <div className="col-6 d-flex p-0 pb-4 align-items-end justify-content-end">
                <RecipeDetails 
                  selectedRecipe={recipes[selectedRecipe_name as keyof typeof recipes]} 
                  isAnimationOn={isAnimationOn} 
                  recipeImgPath={recipeImgPath} />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <BottomBar 
            onAnimationToggle={(toggle: boolean) => setisAnimationOn(toggle)} 
            onSoundToggle={(toggle: boolean) => setIsSoundOn(toggle)} 
            prevPage={prevPage} 
            nextPage={nextPage} />
        </div>
      </div>
    </div>
  )
}

export default App;