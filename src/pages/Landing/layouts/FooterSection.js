import { ReactComponent as YouTube } from "../svg/youtube.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as LinkedIn } from "../svg/linkedin.svg";
import OpeningTimes from "../components/OpeningTimes";
import tobii from "../../../assets/footer-tobii.png";
import monster from "../../../assets/footer-monster.png";

const FooterSection = () => {
  const socialIcons = [
    { id: 1, Icon: Facebook },
    { id: 2, Icon: Instagram },
    { id: 3, Icon: Twitter },
    { id: 4, Icon: YouTube },
    { id: 5, Icon: LinkedIn },
  ];

  const openingTimes = {
    Monday: "15:00 - 21:00",
    Tuesday: "15:00 - 21:00",
    Wednesday: "15:00 - 21:00",
    Thursday: "15:00 - 21:00",
    Friday: "12:00 - 18:00",
  };

  return (
    <footer className="w-full py-8 px-3 md:px-16 bg-dark-grey">
      <div className="flex flex-col items-center justify-evenly w-full py-16">
        <div className="flex justify-center flex-wrap w-full gap-4 md:gap-14 lg:gap-24">
          {socialIcons.map(({ id, Icon }) => (
            <Icon key={id} className="w-12 h-12 md:w-20 md:h-20" />
          ))}
        </div>
        <OpeningTimes
          className=" w-8/12 mt-10 h-80 text-xl flex flex-col justify-center items-center"
          data={openingTimes}
          noUnderline
        />
        <div className="flex justify-center gap-12 flex-wrap">
          <img src={tobii} alt="monster drink logo" />
          <img src={monster} alt="monster drink logo" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
