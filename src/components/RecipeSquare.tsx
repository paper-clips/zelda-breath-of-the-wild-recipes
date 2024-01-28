import cursor from "/sounds/Cursor.wav";

interface Props {
    imgSrc: string;
    recipeName: string;
    recipeHearts: number;
    onSelectedRecipe: (s: string, n: number) => void;
    visibility: string;
    isSoundOn?: boolean;
    recipeImgPath: string;
}

function RecipeSquare({ imgSrc, recipeName, recipeHearts, onSelectedRecipe, visibility, isSoundOn, recipeImgPath }: Props) {
    const cursorSound = new Audio(cursor);

    const onRecipeSquareClick = () => {
        onSelectedRecipe(recipeName, recipeHearts); 
        isSoundOn && isSoundOn ? cursorSound.play() : cursorSound.pause();
    };

    return (
        <button onClick={onRecipeSquareClick} className={visibility + " col-2 recipe-button p-0 border-0 bg-transparent"}>
            <img className="recipe-square-img" src="/images/square.png"></img>
            <div className="position-relative">
                <div className="position-absolute d-flex align-items-center justify-content-center recipe-square">
                    <div className="recipe-border d-flex align-items-center justify-content-center">
                        <img className="recipe-img" src={recipeImgPath+imgSrc} alt={recipeName} ></img>
                    </div>
                </div>
            </div>
        </button >
    )
}

export default RecipeSquare;