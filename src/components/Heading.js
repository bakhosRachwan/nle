import classNames from "classnames";
import PropTypes from "prop-types";

/**
 *
 * @param {{tag:("h1"|"h2"|"h3"|"h4"|"h5"|"h6"),
 *  size:("sm"|"base"|"lg"|"xl"|"2xl"|"3xl"),
 *  normalFontFamily:boolean, customSize:boolean, overrideAll:boolean}} param0
 * @returns
 */
const Heading = ({
  tag = "h2",
  size = "base",
  normalFontFamily,
  overrideAll,
  customSize,
  className,
  children,
}) => {
  const getSizeClasses = () => {
    /** Creates responsive text classes
     * @param {number} size - starting size of text for xl tailwind classes.
     *  size = 1 represents "text-xl", size = 2 represents "text-2xl" etc.
     */
    const genTextSizes = (size) => {
      const calcSize = normalFontFamily ? size : size + 2;

      if (calcSize === 0) return "text-base md:text-lg lg:text-xl";

      return `text-${calcSize > 1 ? calcSize : ""}xl md:text-${
        calcSize + 1
      }xl lg:text-${calcSize + 2}xl`;
    };

    const sizesMap = {
      sm: 0,
      base: 1,
      lg: 2,
      xl: 3,
      "2xl": 6,
      "3xl": 5,
    };
    return genTextSizes(sizesMap[size]);
  };

  const Tag = tag;

  return (
    <Tag
      className={classNames({
        [className]: className,
        "font-heading": !normalFontFamily && !overrideAll,
        [getSizeClasses()]: !customSize && !overrideAll,
        "font-normal leading-none": !overrideAll,
      })}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  normalFontFamily: PropTypes.bool,
  customSize: PropTypes.bool,
  overrideAll: PropTypes.bool,
};

export default Heading;
