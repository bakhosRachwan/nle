import classNames from "classnames";
import PropTypes from "prop-types";

/**
 *
 * @param {{text:string, isActive: boolean,
 *  Icon:import("react").JSXElementConstructor,
 *  style: import("react").CSSProperties, id: string
 *  className:string }} param0
 * @returns
 */
const button = ({ id, text, Icon, isActive, style = {}, className }) => {
  return (
    <button
      id={id | ""}
      style={style}
      className={classNames(
        "flex items-center justify-evenly",
        "py-1 leading-none",
        "text-base",
        "rounded overflow-hidden",
        "w-max whitespace-nowrap ",
        " hover:text-primary",

        {
          [className]: className,
          "bg-gray-700": isActive,
        }
      )}
    >
      {Icon && <Icon className="inline w-5 h-5" />}
      {text}
    </button>
  );
};

button.propTypes = {
  text: PropTypes.string,
  Icon: PropTypes.object,
  isActive: PropTypes.bool,
  id: PropTypes.string,
  activeMonth: PropTypes.string,
  className: PropTypes.string,
};

export default button;
