import styled from "styled-components";

export default function Button({
  iconName,
  children,
  onClick,
  type = "button",
  variant = "PRIMARY",
  size = "NORMAL",
  animateIconDown,
  animateIconLeft,
  animateIconRight,
  ...restProps
}) {
  switch (variant) {
    case "ICON":
      return (
        <IconButton
          iconSize={size}
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
    cursor: auto;
    color: ${(props) => props.theme.colors.disabled};
  }
`;

const PrimaryButton = styled(Base)`
  border: none;
  color: ${(props) => props.theme.colors.bg};
  background-color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.isActive && props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.text};
  }
`;

const SecondaryButton = styled(Base)`
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
  color: ${(props) => props.theme.colors.text};
  transition: transform 200ms;
  font-size: ${(props) => props.theme.fontSize.xl2};

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

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    font-size: ${(props) =>
      props.iconSize === "LARGE"
        ? props.theme.fontSize.xl4
        : props.theme.fontSize.xl2};
  }
`;
