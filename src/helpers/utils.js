import { isMobileOnly, isTablet, isDesktop } from "react-device-detect";

/**
 *
 * @param {object} props key value pairs of props required to set classNames
 * @param {object} defaults key value pairs with keys same as props and values as default values
 * @requires props
 * @returns {string} a string of tailwind class names
 */
export const setDefaultClasses = (props, defaults) => {
  if (!props) return "";
  let classNames = "";
  Object.entries(props).forEach(([key, value]) => {
    if (!value && value !== false) {
      classNames += ` ${defaults[key]}`;
    }
  });
  return classNames.trimLeft();
};

/**
 *
 * @param {{mobile:?(string|number),tablet:?(string|number)
 *  pc:?(string|number),all: ?(string|number),other: (string|number)}} config
 */
export const setFromConfig = (config) => {
  // the config must have all values is array as keys
  const requiredKeys = ["mobile", "tablet", "pc"];
  if (config && typeof config === "object" && !Array.isArray(config)) {
    // used when the value is the same for all devices
    if (config.all) return config.all;

    if (config.other) {
      const map = {
        mobile: isMobileOnly,
        tablet: isTablet,
        pc: !isDesktop,
      };

      let oneKey = "";
      const configIsValid = requiredKeys.some((key) => {
        const val = config.hasOwnProperty(key);

        if (val) {
          oneKey = key;
        }
        return val;
      });
      if (configIsValid) {
        return map[oneKey] ? config[oneKey] : config.other;
      }

      throw new Error(
        `Invalid config, It must have the following keys: one of ["mobile", "tablet", "pc"]`
      );
    }

    const configIsValid = requiredKeys.every((key) =>
      config.hasOwnProperty(key)
    );
    if (configIsValid) {
      return isMobileOnly
        ? config.mobile
        : isTablet
        ? config.tablet
        : config.pc;
    }
  }

  throw new Error(
    `Invalid config, It must have the following keys: ${requiredKeys.join(
      ", "
    )} or all, or one of ["mobile", "tablet", "pc"] and other`
  );
};
