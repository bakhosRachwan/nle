import { Link } from "react-scroll";
import classNames from "classnames";
import SideLogo from "../components/HalfSideLogo";
import OpeningTimes from "../components/OpeningTimes";
import Input from "../components/Input";
import Heading from "../../../components/Heading";
import P from "../../../components/Paragraph";

const About = () => {
  const openingTimes = {
    Monday: "15:00 - 21:00",
    Tuesday: "15:00 - 21:00",
    Wednesday: "15:00 - 21:00",
    Thursday: "15:00 - 21:00",
    Friday: "12:00 - 18:00",
  };

  return (
    <section className=" w-full py-8 px-7 md:px-14 lg:px-16" id="about">
      <Heading size="base" className="text-primary py-4" tag="h2">
        about
      </Heading>

      <div className="flex w-full justify-between mb-5">
        <div className="flex-shrink-0 w-full max-w-2xl text-secondary">
          <P className="pb-5">
            Northern Lions Esports is an esports organization by students for
            students. Based in the building of NHL Stenden university of applied
            sciences we strive to create communities, train aspiring gamers,
            educate those interested in esports and above all: have fun. Since
            our founding in 2017 we’ve grown, developed and expanded and are
            currently competing in games like Rocket league and League of
            legends with teams on national and international level.
            <a className="mx-3 text-primary" href="/">
              Read more
            </a>
          </P>
          <P className="pb-5">
            Read our history{" "}
            <Link
              className=" cursor-pointer text-primary"
              to="history"
              spy={true}
              offset={-125}
              duration={500}
              smooth="easeInOutQuad"
            >
              here
            </Link>
          </P>
          <OpeningTimes className="my-5" data={openingTimes} />
          <form
            id="join-us"
            className={classNames(
              "flex flex-col w-full mx-auto lg:mx-0",
              "max-w-md mt-14 ",
              "border-2 px-5 py-6 2sm:p-7 border-primary rounded-md"
            )}
          >
            <Heading
              tag="h3"
              size="sm"
              className="text-primary pb-5 self-center"
            >
              JOIN US!
            </Heading>

            <Input type="email" label="e-mail" />
            <Input type="password" label="password" className="mt-5" />
            <Input type="password" label="confirm password" className="mt-5" />
            <button className="w-full py-2 uppercase rounded-md text-center mt-10 bg-primary">
              register
            </button>
          </form>
        </div>
        <SideLogo right />
      </div>
    </section>
  );
};

export default About;
