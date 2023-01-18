import {
  Container,
  Logo,
  Icon,
  Nav,
  NavList,
  NavListItem,
  NavListLink,
  Contact,
} from "./header.styles";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.NavList = function HeaderNavList({ children, ...restProps }) {
  return <NavList {...restProps}>{children}</NavList>;
};

Header.NavListItem = function HeaderNavListItem({ children, ...restProps }) {
  return <NavListItem {...restProps}>{children}</NavListItem>;
};

Header.NavListLink = function HeaderNavListLink({ children, ...restProps }) {
  return <NavListLink {...restProps}>{children}</NavListLink>;
};

Header.Contact = function HeaderContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>;
};

Header.ThemeIcon = function HeaderThemeIcon({
  switchTheme,
  themeMode,
  ...restProps
}) {
  return (
    <Icon {...restProps} onClick={switchTheme}>
      {themeMode === "darkTheme" ? (
        <MdOutlineLightMode />
      ) : (
        <MdOutlineDarkMode />
      )}
    </Icon>
  );
};
