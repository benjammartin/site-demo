import React, { useRef, useContext, useEffect } from "react";

import { animation } from "../../contexts/useAnimation";

export function MainMenu() {
  const [timeline, add] = useContext(animation);
  const ref = useRef(null);
  useEffect(() => {
    timeline.from(ref.current, 0.5, { y: 30, autoAlpha: 0 }, "-=0.2");
  });
  return (
    <ul
      style={{ visibility: "hidden" }}
      ref={ref}
      className="menu-container main"
    >
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Stories</a>
      </li>
      <li>
        <a>Libray</a>
      </li>
      <li>
        <a>Stories</a>
      </li>
    </ul>
  );
}
