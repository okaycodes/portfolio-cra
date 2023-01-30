import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <Container>
      <BiCopyright />
      <p>Favour O. Okenana 2023</p>
    </Container>
  );
}

const Container = styled.footer`
   margin-top: 100px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding 1em 0;
   box-shadow: 1px -2px 3px 0px rgba(0,0,0,0.25);
   color: ${(props) => props.theme.colors.primary};
`;
