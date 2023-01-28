import styled from "styled-components";

export default function SelectBtn({ label, options, handleChange }) {
  return (
    <>
      <label htmlFor="standard-select">{label}</label>
      <SelectContainer>
        <Select id="standard-select" onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </Select>
        <span></span>
      </SelectContainer>
    </>
  );
}

const SelectContainer = styled.div`
  //   width: 100%;
  //   min-width: 15ch;
  //   max-width: 30ch;
  position: relative;
  align-self: center;
  width: 12ch;
  color: ${(props) => props.theme.colors.selectText};
  border-radius: 0.3em;
  cursor: pointer;
  line-height: 1.1;
  background-color: ${(props) => props.theme.colors.primary};
  /*   setting display grid here is noteworthy as it "forces" the after
  psuedo-element into a block display meaning no need to position it absolute*/
  display: grid;
  grid-template-areas: "select";
  align-items: center;

  //margin right of 0.6 should mirror the padding-right
  //on the styled.select element
  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    margin-right: 0.6em;
    background-color: ${(props) => props.theme.colors.selectText};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }
`;

const Select = styled.select`
  grid-area: select;
  appearance: none;
  background-color: transparent;
  padding: 0 1em 0 0;
  width: 100%;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  z-index: 1;
  padding: 0.5em 0.6em;
  border: none;

  &:focus + span {
    position: absolute;
    z-index: 0;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid ${(props) => props.theme.colors.text};
    border-radius: inherit;
  }
`;
