import styled from "styled-components";

export default function Button({
  iconName,
  children,
  onClick,
  type = "button",
  variant = "PRIMARY",
  ...restProps
}) {
  switch (variant) {
    case "ICON":
      return <IconButton>{children}</IconButton>;

    case "SECONDARY":
      return (
        <SecondaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </SecondaryButton>
      );

    default:
      return (
        <PrimaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </PrimaryButton>
      );
  }
}

const Base = styled.button`
  padding: 0.5em 1.2em;
  cursor: pointer;
  transition: all 300ms;
`;

const PrimaryButton = styled(Base)`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: black;
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
  }
`;

const SecondaryButton = styled(Button)`
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

const IconButton = styled(Base)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0em;
  background: none;
  border: none;
  font-size: ${(props) => props.theme.fontSize.xl2};
  color: ${(props) => props.theme.colors.text};
`;

const IconButtonName = styled.p`
  font-size: ${(props) => props.theme.fontSize.s};
`;
