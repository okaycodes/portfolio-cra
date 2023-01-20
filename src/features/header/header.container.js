import { useState } from "react";
import styled from "styled-components";

import ThemeIcon from "./themeIcon";

export default function HeaderContainer({
  switchTheme,
  themeMode,
  scrollPastHeader,
}) {
  const navArray = ["about", "projects", "skills", "contact"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (id, index) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <Container scrollPastHeader={scrollPastHeader}>
      <Inner>
        <Logo src="./../../images/icons/logo.svg" />

        <Nav>
          <NavList>
            {navArray.map((navItem, index) => {
              return (
                <NavListItem
                  key={index}
                  onClick={() => handleClick(navItem, index)}
                  isActive={activeIndex === index}
                >
                  <NavListButton>{navItem.toUpperCase()}</NavListButton>
                </NavListItem>
              );
            })}
            <NavListItem>
              <NavListLink>RESUME</NavListLink>
            </NavListItem>
          </NavList>
        </Nav>
        <ThemeIcon switchTheme={switchTheme} themeMode={themeMode} />
      </Inner>
    </Container>
  );
}

const Container = styled.header`
  padding: 0 1.5em;
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: ${(props) =>
    props.scrollPastHeader && "0px 3px 5px 0px rgba(0, 0, 0, 0.2)"};
`;
// the height of the container is being determined by the padding on its tallest grandchild, NavListItem

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
`;
const Logo = styled.img`
  width: 120px;
`;

const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
`;

const Nav = styled.nav`
  min-width: 430px;
  margin: 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  letter-spacing: 1.5px;
`;

const NavListItem = styled.li`
  font-size: 13px;
  font-weight: 400;
  padding: 2em 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  ${(props) =>
    props.isActive &&
    `border-bottom: solid ${props.theme.colors.primary}; 
    color:${props.theme.colors.primary}`};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const NavListLink = styled.a`
  decoration: none;
`;

const NavListButton = styled.button`
  all: unset;
`;
