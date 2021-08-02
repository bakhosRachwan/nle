import SideLogo from "../components/HalfSideLogo";
import Heading from "../../../components/Heading";
import P from "../../../components/Paragraph";

const HistorySection = () => {
  return (
    <section className="w-full py-8 px-7 md:px-14 lg:px-16" id="history">
      <div className="flex mb-5">
        <SideLogo left />
        <div className="flex-shrink-0 w-full max-w-2xl text-secondary">
          <Heading tag="h2" className="text-primary py-4">
            history
          </Heading>
          <P className="pb-5">
            In October 2017 Michel “HugMePlease” Waanders founded Stenden NHL
            Esports, also known as the Stenden NHL Lionkings. A month after the
            launch the organization already had 50 members, proving the interest
            of students into professional gaming.
          </P>
          <P className="pb-5">
            This esports organization would represent Stenden NHL and
            participate in the Dutch College League, the highest level of play
            for college based League of Legends teams. After securing a spot
            directly via an open qualifier for the DCL with a win record of
            16-1, the Lionkings would participate in the 2018 season and be
            active in the Dutch Premier League, ending the season in 4th.
          </P>
          <P className="pb-5">
            Highlight of the season was a show match where the Lionkings would
            play with and against the professional players from the Unicorns of
            Love, which the Lionkings would eventually lose after a dominant
            performance from professional midlaner Exile. After the season the
            organization would switch its main focus towards education,
            resulting in a split from Stenden NHL and rebranding towards
            Northern Lions Esports.
          </P>
          <P className="pb-5">
            Although no official connection remained, a collaboration between
            Northern Lions and Stenden NHL resulted in the opening of the gaming
            facility in March 2019, forming the base to build a growing
            community with students and gamers from across the globe we still
            have today.
          </P>

          <P className="pb-5">
            Although the COVID-19 pandemic disturbed our daily activities, it
            wouldn’t stop us from connecting with eachother. In May, Northern
            Lions Esports would host the Quarantine games: Tournaments on League
            of Legends, Rocket League and Counter strike: Global offensive with
            teams competing for a prize pool. Since the summer holiday of 2020
            we’ve been hard at work with a complete overhaul of the
            organization. More people, a brand new gaming facility and a bigger
            identity overall.
          </P>
          <P className="pb-5">
            For more information about our future,{" "}
            <a href="/" className="text-primary">
              look here
            </a>
          </P>
          <P className="pb-5">
            Read more on our facility{" "}
            <a href="/" className="text-primary">
              here
            </a>
          </P>
          <P className="pb-5">
            Read more on our Chief Designer{" "}
            <a href="/" className="text-primary">
              here
            </a>
          </P>
        </div>
      </div>
    </section>
  );
};
export default HistorySection;
