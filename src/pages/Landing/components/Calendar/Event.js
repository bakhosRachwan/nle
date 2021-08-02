import { getMonth, getTime, getYear } from "../../../../helpers";
import { isMobile, isTablet } from "react-device-detect";
import P from "../../../../components/Paragraph";
import Heading from "../../../../components/Heading";

const Event = ({ event, style }) => {
  const time = getTime(event.date);
  const month = getMonth(event.date);
  const year = getYear(event.date);

  return (
    <li style={style || {}} className="text-secondary">
      <Heading tag="h3" normalFontFamily>{`14 ${month}, ${year}`}</Heading>
      <hr className="  border-primary my-3" />
      <P>{`${time} - ${event.description}`}</P>
      <P>
        Link:{" "}
        <a className="text-primary" href="http://example.com">
          {isMobile && !isTablet ? "click here" : event.link}
        </a>
      </P>
    </li>
  );
};

export default Event;
