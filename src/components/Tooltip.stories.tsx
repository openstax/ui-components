import { TooltipGroup } from './Tooltip';
import { Placement } from 'react-aria';
import "./stories.css";

// The 'More information' default is the same on every instance, so name the subject with ariaLabel.
export const Default = () => <div className="story-tooltip-wrapper">
  {(['right', 'top', 'bottom'] as Placement[]).map((placement, i) =>
    <div className="story-tooltip-row" key={i}>
      <TooltipGroup placement={placement} ariaLabel={`More information about ${placement} placement`}>
        Tooltip content goes here.
      </TooltipGroup>
      {placement}
    </div>
  )}
  </div>
;
