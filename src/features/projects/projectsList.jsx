import ProjectItem from "./projectItem";
import styled from "styled-components";
import { projects } from "../../constants/projects";

export default function ProjectContainer() {
  return (
    <Container>
      <Title>Projects</Title>
      <List>
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            links={project.linsks}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.section`
   width: 85%
   max-width: 1100px;
   margin-bottom: 150px;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl3};
  text-align: center;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  grid-gap: 2em;
`;
