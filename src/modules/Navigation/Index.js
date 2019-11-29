import React, { useRef, useContext, useEffect } from "react";
import { Logo } from "./Logo";
import { MainMenu } from "./Main";
import { SecondMenu } from "./Second";

export function Navigation() {
  return (
    <div className="naviguation">
      <Logo />
      <MainMenu />
      <SecondMenu />
    </div>
  );
}
