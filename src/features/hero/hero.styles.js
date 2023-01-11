import styled from "styled-components";

export const Container = styled.section`
  min-height: 500px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl3};
  color: white;
  line-height: 1.6;
  display: inline;
`;

export const Text = styled.p``;

export const TextAccent = styled.p`
  display: inline;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin: 100px;
  background-color: white;
  border-radius: 50%;
`;
