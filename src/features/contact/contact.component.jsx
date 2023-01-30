import styled from "styled-components";

import Button from "../ui/button";
// import { SiMedium } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RiStackOverflowFill } from "react-icons/ri";
// import { AiOutlineTwitter } from "react-icons/ai";

export default function Contacts() {
  // TODO: implement medium and twitter perhaps
  return (
    <Container>
      <Button
        variant="ICON"
        size="LARGE"
        as="a"
        href="https://www.linkedin.com/in/okenana"
        target="_blank"
      >
        <AiFillLinkedin />
      </Button>

      <Button
        variant="ICON"
        size="LARGE"
        as="a"
        href="https://www.github.com/okaycodes"
        target="_blank"
      >
        <AiOutlineGithub />
      </Button>

      <Button
        variant="ICON"
        size="LARGE"
        as="a"
        href="mailto: fo.okenana@gmail.com"
      >
        <AiOutlineMail />
      </Button>

      <Button
        variant="ICON"
        size="LARGE"
        as="a"
        href="https://stackoverflow.com/users/21054041/okaycodes"
        target="_blank"
      >
        <RiStackOverflowFill />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;
