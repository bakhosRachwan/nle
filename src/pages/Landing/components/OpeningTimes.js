import PropTypes from "prop-types";
import classnames from "classnames";
import Heading from "../../../components/Heading";
import P from "../../../components/Paragraph";

const OpeningTimes = ({ data, className }) => {
  return (
    <div
      className={classnames("text-secondary", {
        [className]: className,
      })}
    >
      <Heading size="sm" className="text-primary pb-3">
        OPENING TIMES:
      </Heading>

      {Object.entries(data).map(([day, time]) => (
        <div key={day + time} className="flex justify-between w-60 py-1">
          <P>{day}</P> <P className="text-gray-300">{time}</P>
        </div>
      ))}

      <P className="mt-4">Location Facility room B1.081 in the NHL building.</P>
    </div>
  );
};

OpeningTimes.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default OpeningTimes;
