import React, {
  Fragment,
  createContext,
  useRef,
  useContext,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import GsapTools from "gsap-tools";

import "./styles.scss";
import { AnimationProvider, animation } from "./contexts/useAnimation";
import { Navigation } from "./modules/Navigation/Index";

function HeaderContent() {
  const [timeline, add] = useContext(animation);
  const ref = useRef(null);
  let elements = [];
  useEffect(() => {
    timeline.staggerFrom(elements, 0.5, { y: 30, autoAlpha: 0 }, "-=2");
    timeline.from(ref.current, 0.5, { y: 30, autoAlpha: 0 }, "-=0.5");
  });
  let words = "About us".split(" ");
  return (
    <div className="header-content">
      <h1>
        {words.map((word, index) => (
          <span
            style={{ visibility: "hidden" }}
            key={index}
            id={index}
            ref={e => (elements[index] = e)}
          >
            {word}
          </span>
        ))}
      </h1>
      <p style={{ visibility: "hidden" }} ref={ref}>
        A mature tech company with strong opinions, a design mindset, and human
        values
      </p>
    </div>
  );
}

function StatItem() {
  const [timeline, add] = useContext(animation);
  const ref = useRef(null);
  useEffect(() => {
    timeline.from(ref.current, 0.5, { y: 30, autoAlpha: 0 }, "-=0.4");
    add(timeline);
  });
  return (
    <div style={{ visibility: "hidden" }} ref={ref} className="stat-item">
      <img alt="" src="icon-year.png" className="stats-icon" />
      <h2>2013</h2>
      <p>
        We've been around since 2013. We've made it this far, and plan to carry
        on.
      </p>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="stats-container">
      <StatItem />
      <StatItem />
    </div>
  );
}

function HeaderHero() {
  const backgroundRef = useRef(null);
  const imageRef = useRef(null);
  const [timeline, add] = useContext(animation);
  useEffect(() => {
    timeline.from(
      backgroundRef.current,
      0.5,
      {
        clipPath: "polygon(0px 0px, 0% 0px, 0% 100%, 0px 100%)",
        autoAlpha: 0
      },
      "-=0.4"
    );
    timeline.from(imageRef.current, 0.5, {
      x: 30,
      autoAlpha: 0
    });
  });
  return (
    <div
      style={{ visibility: "hidden" }}
      ref={backgroundRef}
      className="header-hero"
    >
      <img ref={imageRef} src="hero.png" />
    </div>
  );
}

function Header() {
  const [timeline, add] = useContext(animation);
  return (
    <header className="header-container">
      <HeaderContent />
      <HeaderHero />
      <StatsContainer />
    </header>
  );
}

function App() {
  return (
    <div className="layout">
      <AnimationProvider>
        <GsapTools />
        <Navigation />
        <Header />
      </AnimationProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
