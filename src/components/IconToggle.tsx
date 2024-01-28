import { useState } from 'react';

interface Props {
    toggleOff: string;
    toggleOn: string;
    onToggle: (b: boolean) => void;
}

// toggleOff: pause, toggleOn: play_arrow
// toggleOff: no_sound, toggleOn: volume_up
function IconToggle({ toggleOff, toggleOn, onToggle }: Props) {
    // Change toggle to on if it's off, and vice versa
    const [iconName, setIconName] = useState(toggleOff);

    const handleToggle = () => {
        iconName == toggleOff ? setIconName(toggleOn) : setIconName(toggleOff);
        onToggle(iconName === toggleOn ? true : false);
    };

    // Button
    return (<button onClick={handleToggle} className="material-symbols-rounded toggle-button white-text-color border-0 bg-transparent">{iconName}</button>)
}

export default IconToggle;