import React, {
  Fragment,
  createContext,
  useRef,
  useContext,
  useEffect
} from "react";

import { TimelineLite } from "gsap";
import { add } from "gsap-tools";

export const animation = createContext();

export const AnimationProvider = ({ children }) => {
  const timeline = new TimelineLite({ id: "prismic", paused: false });
  useEffect(() => {
    console.log(timeline);
    add(timeline);
  });
  return (
    <animation.Provider value={[timeline, add]}>
      <main>{children}</main>
    </animation.Provider>
  );
};
