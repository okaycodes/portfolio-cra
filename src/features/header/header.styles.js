import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5em;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: ${(props) =>
    props.scrollPastHeader && "0px 3px 5px 0px rgba(0, 0, 0, 0.2)"};
`;
// the height of the container is being determined by the padding on its tallest grandchild, NavListItem

export const Logo = styled.img`
  width: 120px;
`;

export const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const Nav = styled.nav`
  min-width: 430px;
  margin: 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  letter-spacing: 1.5px;
`;

export const NavListItem = styled.li`
  font-size: 13px;
  font-weight: 400;
  padding: 2em 0;
  border-bottom: ${(props) =>
    props.isActive && `solid ${props.theme.colors.primary}`};
`;

export const NavListLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  &:hover,
  &:focus {
    color: var(--color-secondary);
  }
`;

export const Contact = styled.a`
  cursor: pointer;
  font-size: 13px;
  color: black;
  background: var(--color-primary);
  padding: 0.5em 1em;
  border-radius: 18px;

  &:hover,
  &:focus {
    background: var(--color-secondary);
  }
`;
