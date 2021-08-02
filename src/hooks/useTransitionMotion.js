import { useMemo, useCallback } from "react";
import { spring, presets, TransitionMotion } from "react-motion";
import { setFromConfig } from "../helpers";

/**
 * @typedef {{key:(string|number),data:any}} Item
 *
 * @typedef {{mobile: number, tablet: number , pc: number, other: number,
 *  direction: ?("x" | "y"),
 *  behavior:("gentle" | "wobbly" | "stiff" | "noWobble")}} ResponsiveConfig
 *
 * @typedef {{width: ?ResponsiveConfig, height: ?ResponsiveConfig,
 *  opacity: ?ResponsiveConfig, x: ?ResponsiveConfig,
 *  y: ?ResponsiveConfig, gap: ?ResponsiveConfig }} FinalStylesConfig
 *
 * @typedef {{width: ?number, height: ?number,
 *  opacity: ?number, x: ?number, y: ?number }} Styles
 */

/**
 *
 * @param {Item[]} items
 * @param {{finalStylesConfig:(FinalStylesConfig | (item: Item)=>FinalStylesConfig),
 *  defaultStyles:Styles }} param1
 */

export const useTransitionMotion = (
  items,
  { finalStylesConfig = {}, defaultStyles = {} } = {}
) => {
  const getDefaultStyles = useCallback(() => {
    return items.map(({ key, data }) => ({
      key: key + "",
      data,
      style: defaultStyles,
    }));
  }, [items, defaultStyles]);

  const getStyles = useCallback(() => {
    const styles = [];
    items.forEach(({ key, data }, i) => {
      const configData =
        typeof finalStylesConfig === "function"
          ? finalStylesConfig({ key, data })
          : finalStylesConfig;
      const gap = configData.gap;

      if (i !== 0 && gap) {
        // spacer
        const style = {};
        const gapVal = spring(
          setFromConfig(gap),
          presets[gap.behavior || "gentle"]
        );

        // if direction not specified, default is "y"
        if (gap.direction === "x") style.width = gapVal;
        else style.height = gapVal;
        Object.entries(configData).forEach(([key, value]) => {
          if (!style[key] && key !== "gap") {
            style[key] = spring(
              setFromConfig(value),
              presets[value.behavior || "gentle"]
            );
          }
        });

        styles.push({
          key: key + "---spacer",
          data: "",
          style,
        });
      }

      // actual data
      const style = {};
      Object.entries(configData).forEach(([key, value]) => {
        if (key !== "gap") {
          style[key] = spring(
            setFromConfig(value),
            presets[value.behavior || "gentle"]
          );
        }
      });
      styles.push({ key: key + "", data, style });
    });
    return styles;
  }, [items, finalStylesConfig]);

  const willEnter = useCallback(() => {
    return defaultStyles;
  }, [defaultStyles]);

  const willLeave = useCallback(() => {
    const beforeLeave = {};
    Object.keys(defaultStyles).forEach((key) => {
      if (["width", "height", "opacity"].includes(key)) {
        beforeLeave[key] = spring(0);
      }
    });
    return beforeLeave;
  }, [defaultStyles]);

  return useMemo(
    () => ({
      TransitionMotion,
      defaultStyles: getDefaultStyles(),
      styles: getStyles(),
      willEnter,
      willLeave,
    }),

    [getDefaultStyles, getStyles, willEnter, willLeave]
  );
};
