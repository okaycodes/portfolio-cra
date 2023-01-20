import styled from "styled-components";

import Title from "../ui/title";
import Button from "../ui/button";
import { SectionBaseStyles } from "../common/styles";

export default function ContactsContainer() {
  return (
    <Container>
      <Title>CONTACT ME</Title>
      <Button variant="SECONDARY">E-MAIL</Button>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
  margin-bottom: 100px;
`;
