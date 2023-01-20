import styled from "styled-components";
import { proficient } from "./skills.constants";
import { SectionBaseStyles } from "../common/styles";

import Title from "../ui/title";

export default function SkillsContainer() {
  const actionBtns = [
    { name: "all", event: () => console.log("all") },
    { name: "mobile", event: () => console.log("mobile") },
    { name: "frontend", event: () => console.log("frontend") },
    { name: "backend", event: () => console.log("backend") },
  ];

  return (
    <Container id="skills">
      <Title actionBtns={actionBtns}>SKILLS</Title>
      <SkillList>
        {proficient.map((skill) => {
          return <Skill key={skill.name}>{skill.name}</Skill>;
        })}
      </SkillList>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)``;

const SkillList = styled.ul`
  display: flex;
  max-width: 800px;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 100px;
`;

const Skill = styled.li`
  margin: 0.5em;
  padding: 0.7em 1em;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.65);
  font-size: ${(props) => props.theme.fontSize.lg};
`;
