import styled from "styled-components";

export const SectionBaseStyles = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Divider = styled.hr`
  width: 68%;
  border: none;
  max-width: 1400px;
  border-top: 1.2px solid ${(props) => props.theme.colors.primary};
  margin: 100px auto;
`;
