import { useState, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { Motion, spring, presets } from "react-motion";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as LiveLogo } from "../svg/live-logo.svg";
import { setFromConfig } from "../../../helpers";

const Navbar = ({ links = [] }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  /* _______Configuration______ */
  const getConfig = (y) => ({
    navbar: {
      bgOpacity: {
        mobile: y >= 200 ? 1 : 0,
        tablet: y >= 300 ? 1 : 0,
        pc: y >= 300 ? 1 : 0,
      },
    },
    links: {
      y: {
        mobile: 5,
        tablet: y >= 300 ? 5 : 24 - y / 12.5,
        pc: y >= 300 ? 5 : 24 - y / 12.5,
      },
    },
    logo: {
      width: {
        mobile: y >= 200 ? 45 : 95 - y / 4,
        tablet: y >= 300 ? 65 : 165 - y / 3,
        pc: y >= 300 ? 65 : 165 - y / 3,
      },
      height: {
        mobile: y >= 200 ? 45 : 87 - y / 4,
        tablet: y >= 300 ? 57 : 157 - y / 3,
        pc: y >= 300 ? 57 : 157 - y / 3,
      },
      x: {
        mobile: y >= 200 ? 16 : 30 - y / 14.29,
        tablet: y >= 300 ? 16 : 40 - y / 12.5,
        pc: y >= 300 ? 16 : 40 - y / 12.5,
      },
      y: {
        mobile: y >= 200 ? 0 : 40 - y / 5,
        tablet: y >= 300 ? 0 : 60 - y / 12.5,
        pc: y >= 300 ? 0 : 60 - y / 12.5,
      },
    },
  });

  const config = getConfig(scrollY);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      if (scrollY !== 300) {
        setScrollY(300);
      }
    } else {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // clean up
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      style={{
        backgroundColor: `rgba(20,20,20,${setFromConfig(
          config.navbar.bgOpacity
        )})`,
      }}
      className={classnames(
        "w-full py-2",
        "fixed top-0 left-0",
        "flex justify-between",
        "z-50",
        { "shadow-lg": scrollY >= 300 }
      )}
    >
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
        className="cursor-pointer"
      >
        <Motion
          style={{
            width: spring(setFromConfig(config.logo.width), presets.gentle),
            height: spring(setFromConfig(config.logo.height), presets.gentle),
            y: spring(setFromConfig(config.logo.y), presets.gentle),
            x: spring(setFromConfig(config.logo.x), presets.gentle),
          }}
        >
          {({ width, height, x, y }) => (
            <LiveLogo
              style={{ width, height, transform: `translate(${x}px, ${y}px)` }}
              className="relative origin-center"
            />
          )}
        </Motion>
      </Link>

      <Motion
        style={{
          y: spring(setFromConfig(config.links.y), presets.gentle),
        }}
      >
        {({ y }) => (
          <div
            style={{ transform: `translateY(${y}px)` }}
            className={classnames(
              "hidden items-center",
              "mr-6 h-14",
              "font-heading text-2xl",
              "absolute top-0 right-0",
              "md:flex"
            )}
          >
            {links.map(({ label, to }) => (
              <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                key={label}
                className="text-secondary no-underline px-5 border-r  cursor-pointer"
              >
                {label}
              </Link>
            ))}
            <Logo className="ml-5 opacity-50" />
          </div>
        )}
      </Motion>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Navbar;
