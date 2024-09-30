interface Props {
    currIconNum: number;
    category: string;
    onCategorySelection: (n: number) => void;
    newCategoryNum: number;
    iconName: string;
    isSoundOn: boolean;
    slideSound: HTMLAudioElement;
    onCategoryChoice: (s: string) => void;
    setRecipePageNum: (n: number) => void;
}

function CategoryIcon({ currIconNum, category, onCategorySelection, newCategoryNum, iconName, isSoundOn, slideSound, onCategoryChoice,  setRecipePageNum }: Props) {
    // Color of the category button (selected=white, not selected=gray)
    const grayColor = "rgba(255, 255, 255, 0.35)";
    const whiteColor = "rgba(240, 240, 240, 0.85)";

    // When user clicks on category
    const onCategoryClick = () => {
        isSoundOn ? slideSound.play() : slideSound.pause();     // Play sound if sound is on
        onCategorySelection(newCategoryNum);                    // Toggles category icon clicked
        onCategoryChoice(category);                             // Toggle category clicked
        setRecipePageNum(0);                                    // Start recipes on first page of category
    };

    return (
        <div className="col p-0" style={{ width: 0 }} aria-label={category}>
            <p className="mb-1 category-title">{currIconNum == newCategoryNum ? category : ""}</p>
            <button onClick={ onCategoryClick } aria-label={category} style={currIconNum == newCategoryNum ? { color: whiteColor } : { color: grayColor }} className="material-symbols-rounded category-icons-img bg-transparent border-0">{iconName}</button>
        </div>
    );
}

export default CategoryIcon;