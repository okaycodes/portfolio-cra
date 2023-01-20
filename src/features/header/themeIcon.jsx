import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeIcon({ switchTheme, themeMode, ...restProps }) {
  return (
    <Container {...restProps} onClick={switchTheme}>
      <Block themeMode={themeMode} />
      <MdOutlineDarkMode />
      <MdOutlineLightMode />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 50px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.text};
  font-size: 23px;
  color: ${(props) => props.theme.colors.bg};
  border-radius: 25px;
  cursor: pointer;
`;

const Block = styled.span`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.themeMode === "darkTheme" ? "left:0" : "left:50%")};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bg};
  transition: left 150ms linear;
`;
