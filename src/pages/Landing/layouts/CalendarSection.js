import Calendar from "../components/Calendar";
import Heading from "../../../components/Heading";

const CalendarSection = () => {
  const events = [
    {
      id: 1,
      date: "2021-07-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 2,
      date: "2021-07-14T06:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 3,
      date: "2021-07-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 4,
      date: "2021-07-14T18:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 5,
      date: "2021-07-14T19:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 6,
      date: "2021-07-14T12:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 7,
      date: "2021-08-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 8,
      date: "2021-08-14T06:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 9,
      date: "2021-08-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 10,
      date: "2021-08-14T18:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 11,
      date: "2021-08-14T19:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 12,
      date: "2021-08-14T12:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 13,
      date: "2021-09-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 14,
      date: "2021-09-15T06:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 15,
      date: "2021-09-24T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
    {
      id: 16,
      date: "2021-10-14T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 17,
      date: "2021-10-19T06:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 18,
      date: "2021-11-22T17:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },

    {
      id: 19,
      date: "2021-11-30T06:00:00.000Z",
      description: "Prime League - Northern Lions VS Meta logic breaker",
      link: "Link: https://www.twitch.tv/northernlionsesports",
    },
  ];

  return (
    <section className="p-3 lg:px-6 xl:px-16 " id="calendar">
      <hr className="border-primary mb-3 mt-6" />
      <Heading size="base" tag="h2" className="text-primary pt-8 mb-8">
        Calendar
      </Heading>
      <Calendar events={events} />
    </section>
  );
};

export default CalendarSection;
