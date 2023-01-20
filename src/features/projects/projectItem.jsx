import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectItem({ title, image, description, links }) {
  return (
    <Container>
      <LinksList>
        <LinkItem>
          <Link href={links.github} target="_blank">
            <FiExternalLink />
          </Link>
        </LinkItem>

        <LinkItem>
          <Link href={links.demo} target="_blank">
            <AiOutlineGithub />
          </Link>
        </LinkItem>
      </LinksList>

      <Image src={image.src} alt={image.alt} />
      <Description>
        <Title>{title}</Title>
        {description}
      </Description>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  height: 380px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.65);
`;

const Title = styled.h3`
   font-size: ${(props) => props.theme.fontSize.lg}
   color: ${(props) => props.theme.colors.primary}
   margin: 0;
   padding: 0;
`;

const LinksList = styled.ul`
  padding: 0 1em;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.bg};
  opacity: 0.85;
  padding: 0;
`;

const LinkItem = styled.li`
  list-style: none;
  padding: 0.4em 0.7em;
  font-size: 18px;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 0 1em;
  position: absolute;
  bottom: 0;
  height: 120px;
  background-color: ${(props) => props.theme.colors.bg};
  opacity: 0.85;
`;
