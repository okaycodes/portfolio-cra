import ProjectItem from "./projectItem";
import styled from "styled-components";
import { projects } from "./projects.constants";
import Title from "../ui/title";
import { SectionBaseStyles } from "../common/styles";

export default function ProjectContainer() {
  const actionBtns = [
    { name: "all", event: () => console.log("all") },
    { name: "mobile", event: () => console.log("mobile") },
    { name: "frontend", event: () => console.log("frontend") },
    { name: "backend", event: () => console.log("backend") },
  ];
  return (
    <Container>
      <Title actionBtns={actionBtns}>PROJECTS</Title>
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

const Container = styled(SectionBaseStyles)`
   width: 85%
   max-width: 1100px;
   margin-bottom: 150px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  width: 90%;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
  grid-gap: 2em;
`;
