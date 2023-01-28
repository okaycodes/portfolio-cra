import { useState } from "react";
import styled from "styled-components";
import SelectBtn from "./select";
import Button from "./button";

export default function Title({ children, handleFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const options = [
    { name: "all", value: "all" },
    { name: "fullstack", value: "fullstack" },
    { name: "mobile", value: "mobile" },
    { name: "frontend", value: "frontend" },
    { name: "backend", value: "backend" },
  ];
  const handleClick = (value) => {
    setActiveFilter(value);
    handleFilter(value);
  };

  return (
    <Container>
      <Name>{children}</Name>
      {handleFilter && (
        <>
          <SelectBtnContainer>
            <SelectBtn
              options={options}
              handleChange={(e) => handleClick(e.target.value)}
            />
          </SelectBtnContainer>
          <ButtonsContainer>
            {options?.map((option) => (
              <Button
                isActive={activeFilter === option.value}
                onClick={() => handleClick(option.value)}
              >
                {option.name}
              </Button>
            ))}
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  margin-bottom: 100px;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
`;

const SelectBtnContainer = styled.div`
  @media (min-width: ${(props) => props.theme.bp.sm}) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    align-self: center;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
`;
