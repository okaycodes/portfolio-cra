import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgShapeRhombus } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

import ThemeIcon from "./themeIcon";
import { navArray } from "./header.constants";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function Header({ switchTheme, themeMode }) {
  const { pathname, hash } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPastHeader, setScrollPastHeader] = useState(false);

  const navRef = useRef();
  useOutsideClick(navRef, () => setShowMenu(false));

  //   ensure the currentItem is consistent with pathname after reload
  const [activeItem, setActiveItem] = useState(
    hash ? hash.replace("#", "") : pathname.replace("/", "")
  );

  const handleClick = (navItem) => {
    setActiveItem(navItem);
    setShowMenu(false);
  };

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
        <Logo to="../">
          <img
            style={{ width: "100%" }}
            src="./images/icons/logo.svg"
            alt="logo"
          />
        </Logo>

        <Nav showMenu={showMenu} ref={navRef}>
          <NavList>
            <CloseIcon onClick={() => setShowMenu(false)} />
            {navArray.map((navItem) => {
              return (
                <NavListItem
                  key={navItem.name}
                  isActive={activeItem === navItem.name}
                >
                  <NavListIcon />
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <ThemeIcon switchTheme={switchTheme} themeMode={themeMode} />
          <Hamburger onClick={() => setShowMenu(true)} />
        </div>
      </Inner>
    </Container>
  );
}

const Container = styled.header`
  padding: 1.2em;
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
const Logo = styled(Link)`
  width: 80px;
`;

const Hamburger = styled(FaBars)`
  cursor: pointer;
  font-size: 25px;
  margin-left: 1em;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    display: none;
  }
`;

const CloseIcon = styled(IoCloseOutline)`
  cursor: pointer;
  font-size: 36px;
  position: absolute;
  top: 25px;
  right: 25px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    display: none;
  }
`;

const Nav = styled.nav`
  margin: 0;
  position: fixed;
  background-color: ${(props) => props.theme.colors.bg};
  width: 75%;
  max-width: 400px;
  height: 100%;
  top: 0;
  z-index: 3;
  right: ${(props) => (props.showMenu ? 0 : "-510px")};
  opacity: 0.95;
  padding-top: 5em;
  transition: right 200ms linear;
  @media (min-width: ${(props) => props.theme.bp.sm}) {
    position: static;
    background: none;
    width: 100%;
    min-width: 430px;
    padding: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1.5px;
  }
`;

const NavListItem = styled.li`
  padding: 0 2em;
  margin-bottom: 1em;
  color: ${(props) => props.isActive && props.theme.colors.primary};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    margin-bottom: 0;
    padding: 0;
  }
`;

const NavListIcon = styled(CgShapeRhombus)`
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-right: 1em;
  @media (min-width: ${(props) => props.theme.bp.sm}) {
    display: none;
    margin-right: 0;
  }
`;

const NavListLink = styled(Link)`
  all: unset;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.xl};
  border-bottom: ${(props) =>
    props.isActive && `solid 2px ${props.theme.colors.primary} `};

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    padding: 2em 0;
    font-size: 13px;
    font-weight: 400;
  }
`;
