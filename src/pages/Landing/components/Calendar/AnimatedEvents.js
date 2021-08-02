import { useTransitionMotion } from "../../../../hooks";
import PropTypes from "prop-types";
import Event from "./Event";

const AnimatedEvents = ({ events }) => {
  const { TransitionMotion, defaultStyles, styles, willEnter, willLeave } =
    useTransitionMotion(
      events.map((e) => ({ key: e.id, data: e })),
      {
        finalStylesConfig: {
          gap: { all: 32, direction: "y", behavior: "stiff" },
          height: { mobile: 125, tablet: 113, pc: 115, behavior: "stiff" },
          opacity: { all: 1 },
        },
        defaultStyles: { height: 0, opacity: 0 },
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
        <ul className="my-8 p-2 w-full 2sm:max-w-xl flex-shrink-0">
          {styles.map(({ key, style, data }) => {
            if (!data)
              return <div key={key} style={style} className="w-full"></div>;
            else return <Event key={key} style={style} event={data} />;
          })}
        </ul>
      )}
    </TransitionMotion>
  );
};

AnimatedEvents.propTypes = {
  events: PropTypes.array,
};

export default AnimatedEvents;
// 95
