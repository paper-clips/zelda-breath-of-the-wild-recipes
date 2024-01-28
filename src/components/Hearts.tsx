import { useEffect } from "react";

interface Props {
  rowHearts: number;
  isAnimationOn: boolean;
  selectedRecipe: string;
  heartName: string;
  setHeartName: (s: string) => void;
}

function Hearts({ rowHearts, isAnimationOn, selectedRecipe, heartName, setHeartName }: Props) {

  // Whenever new recipe is selected
  useEffect(() => {
    if (isAnimationOn) {
      // Change heart key name (only used to make sure heart animation is synched)
      heartName == "heart" ? setHeartName("Heart") : setHeartName("heart");
    }
  }, [selectedRecipe]);

  const toggleAnimation = (animName: string) => {
    return {animationName: isAnimationOn ? animName : "none"};
  };

  // Place number of hearts the recipe will revive
  let renderHearts = (numHearts: number) => {
    const rowHearts = [];
    const remHearts = numHearts - (Math.floor(numHearts));  // Check if hearts is not a whole number, if so, get decimal remainder

    // Full hearts
    for (let i = 0; i < Math.floor(numHearts); i++) {
      rowHearts.push(<img key={heartName + i} style={ toggleAnimation("heart-animation-full") } src="./images/hearts/heart-red-full.png" alt="Heart" className="heart" ></img>)
    }
    // Half heart (at end)
    if (remHearts == 0.5) {
      rowHearts.push(<img key={heartName + (numHearts + 1)} style={ toggleAnimation("heart-animation-half") } src="./images/hearts/heart-red-half.png" alt="Heart" className="heart" ></img>)
    }
    // Quarter heart (at end)
    else if (remHearts == 0.25) {
      rowHearts.push(<img key={heartName + (numHearts + 2)} style={ toggleAnimation("heart-animation-quarter") } src="./images/hearts/heart-red-quarter.png" alt="Heart" className="heart" ></img>)
    }

    return rowHearts;
  };

  return renderHearts(rowHearts);
}

export default Hearts;