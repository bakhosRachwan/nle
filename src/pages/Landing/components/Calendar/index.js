import { useState, useEffect, useCallback } from "react";
import { monthsShort, monthsFull } from "../../../../helpers";
import { isMobileOnly } from "react-device-detect";
import { ReactComponent as ArrowRight } from "../../svg/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../svg/arrow-left.svg";
import CalendarNav from "./Nav";
import AnimatedEvents from "./AnimatedEvents";
import SideLogo from "../HalfSideLogo";
import rightLogoSVG from "../../svg/logo-right-half.svg";

const Calendar = ({ events, shortDates, numMonths = isMobileOnly ? 3 : 6 }) => {
  const [currentMonth] = useState(new Date().getMonth());
  const [activeMonth, setActiveMonth] = useState(currentMonth);
  const [activeEvents, setActiveEvents] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [months] = useState(
    shortDates || isMobileOnly ? monthsShort : monthsFull
  );
  const [navButtons, setNavButtons] = useState([]);

  /* ________Calendar Nav Logic________ */

  /**
   *
   * @param {Event} event
   * @returns
   */
  const onMonthChange = (event) => {
    let clickedMonth = +event.target.getAttribute("id");

    if (!clickedMonth) return;
    // placement matters here
    if (!expanded) return setExpanded(true);
    if (clickedMonth === currentMonth) setExpanded(false);

    // change active Month
    setActiveMonth(clickedMonth);
  };

  const getNavBtnText = useCallback(
    (month) => {
      if (months.indexOf(month) === currentMonth) {
        return isMobileOnly ? month : "This Month";
      }
      return month;
    },
    [currentMonth, months]
  );

  const isActive = useCallback(
    (month) => (expanded ? month === activeMonth : false),
    [activeMonth, expanded]
  );

  const getButtonIcon = useCallback(
    (month) =>
      month === currentMonth ? (expanded ? ArrowLeft : ArrowRight) : undefined,
    [currentMonth, expanded]
  );

  /* ________Calendar Nav Side Effects________ */

  useEffect(() => {
    setNavButtons(
      months.slice(currentMonth, currentMonth + numMonths).map((m, i) => {
        const index = i + currentMonth;
        return {
          text: getNavBtnText(m),
          isActive: isActive(index),
          Icon: getButtonIcon(index),
          id: index + "",
        };
      })
    );
  }, [currentMonth, getButtonIcon, getNavBtnText, isActive, months, numMonths]);

  useEffect(() => {
    setActiveEvents(
      events.filter((event) => new Date(event.date).getMonth() === activeMonth)
    );
  }, [activeMonth, events]);

  return (
    <>
      <CalendarNav
        buttons={navButtons}
        expanded={expanded}
        onMonthChange={onMonthChange}
      />
      <section className="2sm:flex 2sm:gap-x-12 lg:gap-x-24">
        <AnimatedEvents events={activeEvents} />
        <SideLogo url={rightLogoSVG} />
      </section>
    </>
  );
};

export default Calendar;
