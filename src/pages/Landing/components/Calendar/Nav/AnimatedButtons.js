import PropTypes from "prop-types";
import { useTransitionMotion } from "../../../../../hooks";
import CalNavButton from "./Button";

/**
 *
 * @typedef {{text:string, isActive: boolean,
 *  Icon:import("react").Component, id:string,
 *  style: import("react").CSSProperties, className:string }} ButtonProps
 *
 */

/**
 *
 * @param {{buttons: ButtonProps[]} param0
 */
const AnimatedButtons = ({ buttons }) => {
  const { TransitionMotion, defaultStyles, styles, willEnter, willLeave } =
    useTransitionMotion(
      buttons.map((b) => ({ key: b.text, data: b })),
      {
        /**
         *
         * @param {{key:(string|number),data:ButtonProps}} param0
         *
         */
        finalStylesConfig: ({ data: { Icon } }) => ({
          gap: { mobile: 0, tablet: 5, pc: 23, direction: "x" },
          opacity: { all: 1 },
          width: { mobile: 90, other: Icon ? 120 : 90 },
        }),
        defaultStyles: { width: 0, opacity: 0 },
      }
    );

  return (
    <TransitionMotion
      defaultStyles={defaultStyles}
      styles={styles}
      willLeave={willLeave}
      willEnter={willEnter}
    >
      {(styles) => (
        <>
          {styles.map(({ key, style, data }) => {
            /** @type ButtonProps */
            const allBtnProps = data ? data : {};
            const { style: ignore, ...buttonProps } = allBtnProps;
            return key.endsWith("---spacer") ? (
              <div key={key} style={style} className="cursor-default"></div>
            ) : (
              <CalNavButton key={key} style={style} {...buttonProps} />
            );
          })}
        </>
      )}
    </TransitionMotion>
  );
};

AnimatedButtons.propTypes = {
  buttons: PropTypes.array,
  expanded: PropTypes.bool,
  currentMonth: PropTypes.string,
  activeMonth: PropTypes.string,
  onMonthClick: PropTypes.func,
  className: PropTypes.string,
};

export default AnimatedButtons;
