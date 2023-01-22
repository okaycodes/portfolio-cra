import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import ThemeIcon from "./themeIcon";
import { navArray } from "./header.constants";

export default function Header({ switchTheme, themeMode }) {
  const { pathname, hash } = useLocation();
  const [scrollPastHeader, setScrollPastHeader] = useState(false);

  //   ensure the currentItem is consistent with pathname after reload
  const [activeItem, setActiveItem] = useState(
    hash ? hash.replace("#", "") : pathname.replace("/", "")
  );

  const handleClick = (navItem) => setActiveItem(navItem);

  //state to determine when to show box-shadow on header
  useEffect(() => {
    const getScrollPosition = () => {
      window.scrollY > 90
        ? setScrollPastHeader(true)
        : setScrollPastHeader(false);
    };
    window.addEventListener("scroll", getScrollPosition);
    return () => window.removeEventListener("scroll", getScrollPosition);
  }, []);

  return (
    <Container scrollPastHeader={scrollPastHeader}>
      <Inner>
        <NavListLink to="../">
          <Logo src="./../../images/icons/logo.svg" />
        </NavListLink>

        <Nav>
          <NavList>
            {navArray.map((navItem) => {
              return (
                <NavListItem key={navItem.name}>
                  <NavListLink
                    to={navItem.link}
                    state={{ from: pathname }}
                    isActive={activeItem === navItem.name}
                    onClick={() => handleClick(navItem.name)}
                  >
                    {navItem.name.toUpperCase()}
                  </NavListLink>
                </NavListItem>
              );
            })}
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
  width: 80px;
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

const NavListItem = styled.li``;

const NavListLink = styled(Link)`
  all: unset;
  cursor: pointer;
  padding: 2em 0;
  font-size: 13px;
  font-weight: 400;
  margin: 0
  color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.isActive && props.theme.colors.primary};
  border-bottom: ${(props) =>
    props.isActive && `solid 2px ${props.theme.colors.primary} `};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;
