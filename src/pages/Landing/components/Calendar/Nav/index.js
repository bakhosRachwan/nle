import PropTypes from "prop-types";
import classNames from "classnames";
import AnimatedNavButtons from "./AnimatedButtons";

/**
 *
 * @param {{buttons:{text:string, isActive: boolean,
 *  Icon:any, style: import("react").CSSProperties, className:string }[],
 *  expanded: boolean, onMonthChange:(event:Event)=>void,}} param0
 * @returns
 */
const CalendarNav = ({
  buttons,
  expanded,
  onMonthChange = (event) => void 0,
}) => {
  return (
    <div
      style={{ backgroundColor: "#222" }}
      onClick={onMonthChange}
      className={classNames(
        "overflow-hidden",
        "flex",
        "border",
        "border-dark",
        "text-white",
        "rounded",
        "w-max",
        "focus:outline-none"
      )}
    >
      <AnimatedNavButtons buttons={expanded ? buttons : buttons.slice(0, 1)} />
    </div>
  );
};

CalendarNav.propTypes = {
  onMonthChange: PropTypes.func,
  buttons: PropTypes.array,
  expanded: PropTypes.bool,
};

export default CalendarNav;
