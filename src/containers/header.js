import { Header } from "./../components";
import { useState } from "react";

export default function HeaderContainer() {
  const navArray = ["HOME", "ABOUT", "SKILL SET", "PROJECTS", "EXPERIENCE"];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Header>
      <Header.Logo src="./../../images/icons/logo.svg" />
      <Header.Nav>
        <Header.NavList>
          {navArray.map((navItem, index) => {
            return (
              <Header.NavListItem
                key={index}
                onClick={() => setActiveIndex(index)}
                isActive={activeIndex === index}
              >
                <Header.NavListLink href="#">{navItem}</Header.NavListLink>
              </Header.NavListItem>
            );
          })}
        </Header.NavList>
      </Header.Nav>
    </Header>
  );
}
