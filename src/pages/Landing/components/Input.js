import classnames from "classnames";
import PropTypes from "prop-types";

const Input = ({ type, label, className }) => {
  return (
    <div className={classnames("w-full", { [className]: className })}>
      <label className="text-secondary text-2xl font-heading uppercase">
        {label}
      </label>
      <input
        type={type}
        className="w-full h-10 px-4 bg-secondary bg-opacity-80 rounded-md "
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
