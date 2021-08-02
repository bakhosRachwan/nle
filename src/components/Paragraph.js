import classNames from "classnames";
import PropTypes from "prop-types";

/**
 *
 * @param {{size:("sm"|"base"|"lg"|"xl"|"2xl"|"3xl")}} param0
 * @returns
 */
const Paragraph = ({ size = "base", className, children }) => {
  const getSizeClasses = () => {
    const sizesMap = {
      sm: "text-sm md:base lg:lg",
      base: "text-base md:text-lg lg:text-xl ",
      lg: "text-lg md:text-xl lg:text-2xl",
      xl: "text-xl md:text-2xl lg:text-3xl",
      "2xl": "text-2xl md:text-3xl lg:text-4xl",
      "3xl": "text-3xl md:text-4xl lg:text-5xl",
    };
    return sizesMap[size];
  };

  return (
    <p
      className={classNames(
        { [className]: className },
        getSizeClasses(),
        "leading-6"
      )}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Paragraph;
