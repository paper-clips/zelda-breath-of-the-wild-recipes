import { useState } from "react";
import Hearts from "./Hearts";

interface Props {
  numHearts: number;
  isAnimationOn: boolean;
  selectedRecipe: string;
}

function TopBar({ numHearts, isAnimationOn, selectedRecipe }: Props) {
  // Need this state to change the name of each heart key that way each heart renders on new recipe selection
  // In short, makes sure heart animations are synched
  const [heartName, setHeartName] = useState("heart");

  // Number of hearts for each of the two rows
  let row1Hearts = numHearts <= 15 ? numHearts : 15;
  let row2Hearts = (numHearts > 15 && numHearts < 30) ? (numHearts % 15) : numHearts <= 15 ? 0 : 15;

  return (
    <div className="position-absolute" id="bar-top-pos" aria-label="Top bar: Includes number of hearts for recipe">
      <img className="game-width" src="./images/bar-top.png" alt="Transparent top bar"></img>
      <div className="position-absolute container mw-100 top-0 bar-top-border gray-border-color" aria-label="Top bar elements">
        <div id="bar-top-height" className="row align-items-center">
          {/* Heart rows */}
          <div className="col-4 bar-top-text ps-5 white-text-color">
            {/* Row 1 of hearts */}
            <div className="d-flex pb-1" aria-label="Hearts row top">
              <Hearts 
                heartName={heartName} 
                setHeartName={(s: string) => setHeartName(s)} 
                rowHearts={row1Hearts} 
                isAnimationOn={isAnimationOn} 
                selectedRecipe={selectedRecipe} 
              />
            </div>
            {/* Row 2 of hearts */}
            <div id="heart-row-size" className="d-flex" aria-label="Hearts row bottom">
              <Hearts 
                heartName={heartName} 
                setHeartName={(s: string) => setHeartName(s)} 
                rowHearts={row2Hearts} 
                isAnimationOn={isAnimationOn} 
                selectedRecipe={selectedRecipe} 
              />
            </div>
          </div>
          <div className="col-1 text-center bar-top-text white-text-color"></div>
          <h1 className="col-2 text-center bar-top-text bold-title white-text-color">Recipes</h1>
          <div className="col-5 text-center bar-top-text white-text-color"></div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;