import IconToggle from "./IconToggle";

interface Props {
  onAnimationToggle: (b: boolean) => void;
  onSoundToggle: (s: boolean) => void;
  prevPage: () => void;
  nextPage: () => void;
}

function BottomBar({ onAnimationToggle, onSoundToggle, prevPage, nextPage }: Props) {
  return (
    <div className="position-absolute" id="bar-bottom-pos">
      <img className="game-width" src="/images/bar-bottom.png" alt="Transparent bottom bar"></img>
      <div className="position-absolute container mw-100 top-0 bar-bottom-border gray-border-color">
        <div id="bar-bottom-height" className="row ps-5 pe-4 pt-2">
          <div className="col-1 h-50 d-flex align-items-center justify-content-start border-0">
            {/* Audio on/off button */}
            <IconToggle 
              onToggle={onSoundToggle} 
              toggleOff="volume_up" 
              toggleOn="no_sound" 
            />

            {/* Pause/Play animation button */}
            <IconToggle 
              onToggle={onAnimationToggle} 
              toggleOff="play_arrow" 
              toggleOn="pause" 
            />
          </div>
          <div className="col-8 bar-bottom-text white-text-color"></div>

          {/* Search button */}
          {/* <div className="col-1 me-4 pe-0 h-50 d-flex align-items-center justify-content-end bar-bottom-text white-text-color">
            <span>Search</span>
            <button className="material-symbols-rounded white-text-color bg-transparent border-0" aria-label="Search">cancel</button>
          </div> */}

          {/* Previous button */}
          <div className="col-1 me-1 pe-0 h-50 d-flex align-items-center justify-content-end bar-bottom-text white-text-color">
            <span>Previous</span>
            <button onClick={prevPage} className="material-symbols-rounded white-text-color bg-transparent border-0" aria-label="Previous">arrow_circle_left</button>
          </div>

          {/* Next button */}
          <div className="col-1 pe-0 h-50 d-flex align-items-center justify-content-end bar-bottom-text white-text-color">
            <span>Next</span>
            <button onClick={nextPage} className="material-symbols-rounded white-text-color bg-transparent border-0" aria-label="Next">arrow_circle_right</button>
          </div>

          {/* Filter button */}
          {/* <div className="col-1 pe-0 h-50 d-flex align-items-center justify-content-end bar-bottom-text white-text-color">
            <span>Filter</span>
            <button className="material-symbols-rounded white-text-color bg-transparent border-0" aria-label="Filter">hdr_auto</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BottomBar;