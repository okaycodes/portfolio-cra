import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectItem({ project }) {
  const { title, image, description, links, technologies } = project;
  return (
    <Container>
      <Description>
        <Title>{title}</Title>
        <Intro>
          {description.intro} <span>...more</span>
        </Intro>
        <FullTextWrapper>{description.fullText}</FullTextWrapper>

        <p>Tech: {technologies.join("")}</p>

        <Links links={links} />
      </Description>
      <Links links={links} />
      <Image src={image.src} alt={image.alt} />
    </Container>
  );
}

const Links = ({ links }) => {
  return (
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
  );
};

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

const LinksList = styled.ul`
  padding: 0 1em;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.bg};
  opacity: 0.85;
  padding: 0;
  font-size: 18px;
`;

const LinkItem = styled.li`
  list-style: none;
  padding: 0.4em 0.7em;
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

const Description = styled.div`
  padding: 0 1em;
  position: absolute;
  bottom: 0;
  height: 130px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  opacity: 0.95;
  font-size: 14px;
  transition: height 250ms linear;
  overflow: hidden;

  & > ${LinksList} {
    display: none;
    top: unset;
    right: unset;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${(props) => props.theme.fontSize.xl2};
  }

  &:hover {
    height: 100%;
  }

  //  turn off the sibling links display and turn on the child links display
  &:hover ~ ${LinksList} {
    display: none;
  }

  &:hover > ${LinksList} {
    display: flex;
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

const Intro = styled.p`
  ${Description}:hover & {
    display: none;
  }

  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const FullTextWrapper = styled.div`
  display: none;
  ${Description}:hover & {
    display: block;
  }
`;

const Technologies = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
