import { Container, Title, Avatar, Text, TextAccent } from "./styles/home";

export default function Home({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Title = function HomeTitle({ children, restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.Avatar = function HomeAvatar({ children, restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Home.Text = function HomeText({ children, restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Home.TextAccent = function HomeTextAccent({ children, restProps }) {
  return <TextAccent {...restProps}>{children}</TextAccent>;
};
