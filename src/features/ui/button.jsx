import styled from "styled-components";

export default function Button({
  iconName,
  children,
  onClick,
  type = "button",
  variant = "PRIMARY",
  animateIconDown,
  animateIconLeft,
  animateIconRight,
  ...restProps
}) {
  switch (variant) {
    case "ICON":
      return (
        <IconButton
          onClick={onClick}
          animateIconDown={animateIconDown}
          animateIconLeft={animateIconLeft}
          animateIconRight={animateIconRight}
          {...restProps}
        >
          {children}
        </IconButton>
      );

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
  &:disabled {
    color: ${(props) => props.theme.colors.disabled};
  }
`;

const PrimaryButton = styled(Base)`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: ${(props) => props.theme.colors.bg};
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
  transition: transform 200ms;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: ${(props) => props.animateIconLeft && "translateX(-10%)"};
    transform: ${(props) => props.animateIconRight && "translateX(10%)"};
    transform: ${(props) => props.animateIconDown && "translateY(10%)"};
  }

  //  overwrite color and transform from hover
  &:disabled {
    color: ${(props) => props.theme.colors.disabled};
    transform: translateX(0);
    transform: translateY(0);
  }
`;
