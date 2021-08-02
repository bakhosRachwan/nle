import classNames from "classnames";
import PropTypes from "prop-types";
import rightLogo from "../svg/logo-right-half.svg";
import leftLogo from "../svg/logo-left-half.svg";

const Logo = ({ right, left }) => {
  const getBgUrl = () => {
    if (right) return rightLogo;
    if (left) return leftLogo;

    // default
    return rightLogo;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${getBgUrl()})`,
      }}
      className={classNames(
        "hidden w-full",
        "2sm:block",
        "opacity-10",
        "bg-top",
        "lg:object-cover lg:bg-no-repeat"
      )}
    ></div>
  );
};

Logo.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
};
export default Logo;
