import { useState } from "react";
import CategoryIcon from "./CategoryIcon";

interface Props {
  isSoundOn: boolean;
  slideSound: HTMLAudioElement;
  onCategoryChoice: (s: string) => void;
  setRecipePageNum: (n: number) => void;
}

// Categories of recipes
enum Category {
  All = "All",
  Vegetarian = "Vegetarian",
  Seafood = "Seafood",
  Meat = "Meat",
  Dessert = "Dessert",
  Monster = "Monster",
  Sides = "Sides"
}

function CategoriesRow({ isSoundOn, slideSound, onCategoryChoice, setRecipePageNum }: Props) {
  const [currIconNum, setCurrIconNum] = useState(1);    // Current selected recipe category

  // Set the category of recipes selected
  const handleCategorySelection = (num: number) => setCurrIconNum(num);

  return (
    <div className="container">
      <div id="category-icons-text" className="row justify-content-center ps-5 pe-5 text-center pb-1 category-icons-row white-text-color gray-border-color">
        {/* All (1) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.All} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={1} 
          iconName="restaurant" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Vegetarian (2) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Vegetarian} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={2} 
          iconName="psychiatry" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Seafood (3) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Seafood} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={3} 
          iconName="set_meal" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Meat (4) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Meat} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={4} 
          iconName="pets" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Dessert (5) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Dessert} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={5} 
          iconName="icecream" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Monster (6) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Monster} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={6} 
          iconName="skull" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />

        {/* Sides (7) */}
        <CategoryIcon 
          currIconNum={currIconNum} 
          category={Category.Sides} 
          onCategorySelection={handleCategorySelection} 
          newCategoryNum={7} 
          iconName="soup_kitchen" 
          isSoundOn={isSoundOn} 
          slideSound={slideSound} 
          onCategoryChoice={onCategoryChoice} 
          setRecipePageNum={setRecipePageNum} 
        />
      </div>
    </div>
  )
}

export default CategoriesRow;