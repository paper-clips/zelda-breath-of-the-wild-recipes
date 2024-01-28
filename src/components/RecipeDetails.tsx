import { useState, useEffect } from "react";

interface Props {
  selectedRecipe: any;
  isAnimationOn: boolean;
  recipeImgPath: string;
}

function RecipeDetails({ selectedRecipe, isAnimationOn, recipeImgPath }: Props) {
  const [description, setDescription] = useState("");
  let entireDescription = selectedRecipe.description;
  let i = 0;        // Index 
  let desc = "";    // Store description word by word
  let descArr = entireDescription.split(" ");

  // Animate description word by word on screen
  let letterAnim = () => {
    if (i < descArr.length) {
      desc += (descArr[i] + " ");
      setTimeout(letterAnim, 20, i++, descArr, desc);
    }
    setDescription(desc);
  }

  // Whenever new recipe selected, show animation (if toggle on)
  useEffect(() => {
    if (isAnimationOn)
      letterAnim();
    else
      setDescription(selectedRecipe.description);
  }, [selectedRecipe]);

  return (
    <>
      <img id="details-rectangle-img" src="./images/rectangle.png"></img>
      <div className="position-relative">
        <div id="details-rectangle-size" className="position-absolute">
          <div className="ps-3 pt-3 pb-3">
            {/* Recipe image */}
            <div id="details-rectangle-img-border">
              <div id="details-img-background" className="bg-dark justify-content-center d-flex">
                <img id="details-img" src={recipeImgPath+selectedRecipe.file} alt={selectedRecipe.name} ></img>
              </div>
            </div>
            {/* Recipe details */}
            <div id="details-text-size" className="details-text white-text-color">
              {/* Recipe name */}
              <h4 id="details-title">{selectedRecipe.name}</h4>
              {/* Recipe description */}
              <p id="details-paragraph">{description}</p>
              {/* Recipe ingredients */}
              <h6 id="details-ingredients-title">Ingredients:</h6>
              <ul id="details-ingredients">
                {selectedRecipe.ingredient1 && <li>{selectedRecipe.ingredient1}</li>}
                {selectedRecipe.ingredient2 && <li>{selectedRecipe.ingredient2}</li>}
                {selectedRecipe.ingredient3 && <li>{selectedRecipe.ingredient3}</li>}
                {selectedRecipe.ingredient4 && <li>{selectedRecipe.ingredient4}</li>}
                {selectedRecipe.ingredient5 && <li>{selectedRecipe.ingredient5}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeDetails;