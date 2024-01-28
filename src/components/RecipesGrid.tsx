import RecipeSquare from "./RecipeSquare";

interface Props {
  recipes: any;
  recipePageNum: number;
  totalRecipes: number;
  onSelectedRecipe: (s: string, n: number) => void;
  isSoundOn: boolean;
  prevPage: () => void;
  nextPage: () => void;
  recipeImgPath: string;
}

function RecipesGrid({ recipes, recipePageNum, totalRecipes, onSelectedRecipe, isSoundOn, prevPage, nextPage, recipeImgPath }: Props) {
  let twentyRecipes = recipes.slice(0 + recipePageNum, 20 + recipePageNum);

  // Turn objects into arrays, get 5 recipes for each row
  let recipeRow1 = twentyRecipes.slice(0, 5);
  let recipeRow2 = twentyRecipes.slice(5, 10);
  let recipeRow3 = twentyRecipes.slice(10, 15);
  let recipeRow4 = twentyRecipes.slice(15, 20);

  // Index values in JSON
  const recipeNameIndex = 0;
  const recipeHeartsIndex = 3;
  const imgSrcIndex = 6;

  // Creates invisible or visible recipe squares
  let createRecipeSquare = (recipeRow: any[]) => {
    // Invisible recipe square (no data) used so squares remain in grid form
    if (recipeRow == undefined)
      return <RecipeSquare 
                imgSrc="" 
                recipeName="" 
                recipeHearts={0} 
                onSelectedRecipe={onSelectedRecipe} 
                visibility="invisible" 
                recipeImgPath={recipeImgPath} 
              />
    // Visible recipe square (with data)
    else
      return <RecipeSquare 
                imgSrc={recipeRow[imgSrcIndex]} 
                recipeName={recipeRow[recipeNameIndex]} 
                recipeHearts={recipeRow[recipeHeartsIndex]} 
                onSelectedRecipe={onSelectedRecipe} 
                visibility="visible" 
                isSoundOn={isSoundOn} 
                recipeImgPath={recipeImgPath} 
              />
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Left arrow */}
        <button style={{ display: recipePageNum > 0 ? "block" : "none" }} onClick={prevPage} id="arrow-left-pos" className="position-absolute bg-transparent border-0 p-0">
          <img id="arrow-left-img" src="/images/arrow_left.png" alt="Left arrow"></img>
        </button>

        {/* Row 1 */}
        <div className="row pt-3 recipe-row-spacing justify-content-evenly">
          {createRecipeSquare(recipeRow1[0])}
          {createRecipeSquare(recipeRow1[1])}
          {createRecipeSquare(recipeRow1[2])}
          {createRecipeSquare(recipeRow1[3])}
          {createRecipeSquare(recipeRow1[4])}
        </div>
        {/* Row 2 */}
        <div className="row recipe-row-spacing justify-content-evenly">
          {createRecipeSquare(recipeRow2[0])}
          {createRecipeSquare(recipeRow2[1])}
          {createRecipeSquare(recipeRow2[2])}
          {createRecipeSquare(recipeRow2[3])}
          {createRecipeSquare(recipeRow2[4])}
        </div>
        {/* Row 3 */}
        <div className="row recipe-row-spacing justify-content-evenly">
          {createRecipeSquare(recipeRow3[0])}
          {createRecipeSquare(recipeRow3[1])}
          {createRecipeSquare(recipeRow3[2])}
          {createRecipeSquare(recipeRow3[3])}
          {createRecipeSquare(recipeRow3[4])}
        </div>
        {/* Row 4 */}
        <div className="row justify-content-evenly">
          {createRecipeSquare(recipeRow4[0])}
          {createRecipeSquare(recipeRow4[1])}
          {createRecipeSquare(recipeRow4[2])}
          {createRecipeSquare(recipeRow4[3])}
          {createRecipeSquare(recipeRow4[4])}
        </div>

        {/* Right arrow */}
        <button style={{ display: recipePageNum < (totalRecipes - 20) ? "block" : "none" }} onClick={ nextPage } id="arrow-right-pos" className="position-absolute bg-transparent border-0 p-0">
          <img id="arrow-right-img" src="/images/arrow_right.png" alt="Right arrow"></img>
        </button>
      </div>
    </div >
  )
}

export default RecipesGrid;