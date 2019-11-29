import React, { useRef, useContext, useEffect } from "react";
import { animation } from "../../contexts/useAnimation";

export function Logo() {
  const [timeline, add] = useContext(animation);
  const ref = useRef(null);
  useEffect(() => {
    timeline.from(ref.current, 0.5, { y: 30, autoAlpha: 0 });
  });
  return (
    <img
      style={{ visibility: "hidden" }}
      ref={ref}
      src="logo.png"
      id={ref}
      className="logo"
    />
  );
}
