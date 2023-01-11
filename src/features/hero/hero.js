import { Container, Title, Avatar, Text, TextAccent } from "./hero.styles";

export default function Hero({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Title = function HeroTitle({ children, restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Avatar = function HeroAvatar({ children, restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Hero.Text = function HeroText({ children, restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.TextAccent = function HeroTextAccent({ children, restProps }) {
  return <TextAccent {...restProps}>{children}</TextAccent>;
};
