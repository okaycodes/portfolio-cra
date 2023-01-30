import styled from "styled-components";
import Contacts from "./contact.component";

import Title from "../ui/title";

import { SectionBaseStyles } from "../common/styles";

export default function ContactsContainer() {
  return (
    <Container id="contact">
      <Title>CONTACT ME</Title>
      <Contacts />
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
  margin-bottom: 100px;
`;
