import styled from "styled-components";

import Contacts from "../contact/contact.component";
import { SectionBaseStyles } from "../common/styles";

export default function HeroContainer() {
  return (
    <Container id="about">
      {/* <Avatar></Avatar> */}
      <Intro>
        <Text>Hi there, My name is </Text>
        <Title>Favour O. Okenana.</Title>
        <Text mb="1em">
          {" "}
          I am a <TextAccent> Fullstack Software Developer. </TextAccent>
        </Text>
      </Intro>
      <Intro>
        <Text textAlign="left" mb="1em">
          I am a fullstack software developer specializing in frontend software
          development with over 2 years of experience building enterprise
          applications at a professional level. Over the years I've worked with
          incredible and talented individuals building applications targeting
          both web and mobile platfroms.
        </Text>
        <Text textAlign="left">
          I take great pleasure in learning new technologies and architecting
          scalable, clean and performant applications.
        </Text>
      </Intro>
      <ContactsContainer>
        <Contacts />
      </ContactsContainer>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
  padding-top: 200px;
  align-items: center;
  min-height: 500px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl3};
  margin: 0;
  padding: 0;
  line-height: 1.6;
`;

const Text = styled.p`
  display: block;
  margin: 0;
  margin-bottom: ${(props) => props.mb};
  text-align: ${(props) => props.textAlign};
`;

const TextAccent = styled.span`
  display: inline;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin: 190px 0 100px;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 50%;
`;
// additional 90px is added to the avatar to account for the
// default height of the fixed header

const Intro = styled.div`
  font-size: 1.25rem;
  width: 85%;
  max-width: 750px;
  text-align: center;
`;

const ContactsContainer = styled.div`
  margin-top: 75px;
`;
