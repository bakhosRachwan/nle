import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import classnames from "classnames";
import { setDefaultClasses } from "../helpers";

const Button = ({
  children,
  textSize,
  textColor,
  color,
  outlined,
  bordered,
  rounded,
  round,
  className,
}) => {
  const btnClassNames = classnames(
    "font-heading",
    "uppercase",
    "leading-none",
    setDefaultClasses(
      { textSize, textColor },
      {
        textColor: "text-white",
        textSize: "text-2xl",
      }
    ),
    {
      ["text-" + textSize]: textSize,
      ["text-" + textColor]: textColor,
      ["text-" + color]: !textColor && outlined && color,
      ["bg-" + color]: color && !outlined,
      "bg-primary": !color && !outlined,
      border: bordered,
      [" border-" + color]: outlined && bordered && color,
      "flex items-center justify-center rounded-full p-5": round,
      "px-5 py-2": !round,
      rounded: rounded,
      [className]: className,
    }
  );
  return <button className={btnClassNames}>{children}</button>;
};

Button.propTypes = exact({
  children: PropTypes.any,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  outlined: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  round: PropTypes.bool,
});

export default Button;
