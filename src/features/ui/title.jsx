import { useState } from "react";
import styled from "styled-components";
import Button from "./button";

export default function Title({ children, handleFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const actionBtns = ["all", "fullstack", "mobile", "frontend", "backend"];
  const handleClick = (value) => {
    setActiveFilter(value);
    handleFilter(value);
  };

  return (
    <Container>
      <Name>{children}</Name>
      {handleFilter && (
        <ButtonsContainer>
          {actionBtns?.map((action) => (
            <Button
              isActive={activeFilter === action}
              onClick={() => handleClick(action)}
            >
              {action}
            </Button>
          ))}
        </ButtonsContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  margin-bottom: 100px;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  align-self: center;
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
`;
