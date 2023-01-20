import styled from "styled-components";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "PRIMARY",
  ...restProps
}) {
  switch (variant) {
    case "PRIMARY":
      return (
        <PrimaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </PrimaryButton>
      );

    case "SECONDARY":
      return (
        <SecondaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </SecondaryButton>
      );
  }
}

const Base = styled.button`
  padding: 0.5em 1.2em;
  cursor: pointer;
  transition: all 300ms;
`;

export const PrimaryButton = styled(Base)`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: black;
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 1em 2em;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.xl1};
  background-color: ${(props) => props.theme.colors.bg};
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.bg};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
