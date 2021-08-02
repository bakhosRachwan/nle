import { Link } from "react-scroll";
import classNames from "classnames";
import Navbar from "../components/Navbar";
import { ReactComponent as Design } from "../svg/design.svg";
import { ReactComponent as ArrowDown } from "../svg/arrow-down-circle.svg";
import { ReactComponent as YouTube } from "../../../svg/youtube.svg";
import { ReactComponent as Instagram } from "../../../svg/instagram.svg";
import { ReactComponent as Facebook } from "../../../svg/facebook.svg";
import headerBgVideo from "../../../assets/header-video-pc.mp4";
import headerBgVideoPoster from "../../../assets/history-section-bg.jpg";
import Heading from "../../../components/Heading";
import {} from "../../../components/Paragraph";

const Header = () => {
  const links = [
    { label: "About Us", to: "about" },
    { label: "Teams", to: "teams" },
    { label: "Events", to: "calendar" },
    { label: "Join us!", to: "join-us" },
  ];

  return (
    <header
      className={classNames(
        "w-full h-screen",
        "grid grid-cols-1 grid-rows-header",
        "relative",
        "bg-gradient-to-b from-black via-gray-900 to-black"
      )}
      id="header"
    >
      <video
        muted
        autoPlay
        loop
        poster={headerBgVideoPoster}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src={headerBgVideo} type="video/mp4" />
      </video>
      <div>
        <Navbar links={links} />
      </div>

      <section className="flex flex-col items-center justify-center  z-10">
        <Heading
          tag="h1"
          customSize
          className={classNames(
            "text-center text-primary mb-1 md:mb-8",
            "text-3xl  md:text-5xl lg:text-6xl sm:text-4xl"
          )}
        >
          Northern Lions <span className="md:block inline">Esports</span>
        </Heading>
        <Heading
          customSize
          normalFontFamily
          tag="h2"
          className={classNames(
            "text-xl uppercase text-white text-center",
            "mb-8 md:hidden block",
            " leading-tight"
          )}
        >
          From humble beginnings <span className="block"> to high ends</span>
        </Heading>
        <Link
          className={classNames(
            "py-2 px-5 cursor-pointer",
            "uppercase text-center text-2xl leading-none font-heading text-white",
            "border border-primary ",
            "bg-transparent"
          )}
          to="join-us"
          spy={true}
          offset={-125}
          duration={500}
          smooth="easeInOutQuad"
        >
          join us
        </Link>

        <div
          className={classNames(
            "w-16 h-56",
            "flex flex-col items-center justify-between",
            "md: md:top-auto md:bottom-auto left-7 lg:left-24",
            "hidden"
          )}
        >
          <YouTube className="w-14 h-12" />
          <Instagram className="w-14 h-12" />
          <Facebook className="w-14 h-12" />
        </div>
      </section>

      <div className="flex flex-row items-end pb-2">
        <div
          className={classNames(
            "relative",
            "flex flex-row items-end justify-between",
            "w-full mx-6 pb-5"
          )}
        >
          <Heading
            customSize
            tag="h2"
            className="text-xl text-white text-center hidden md:block"
          >
            From humble beginnings <span className="block"> to high ends</span>
          </Heading>

          <Link
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            to="about"
            className={classNames(
              "absolute left-2/4 md:top-2/4",
              "transform origin-center md:-translate-y-2/4 -translate-x-2/4",
              "cursor-pointer"
            )}
          >
            <ArrowDown className="w-14 h-14" />
          </Link>
          <Design className="hidden md:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;
