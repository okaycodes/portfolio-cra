import styled from "styled-components"


export const Container = styled.header`
    background: #232323;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5em;
    align-items: center;
`;
// the height of the container is being determined by the padding on its tallest grandchild, NavListItem

export const Logo = styled.img`
    width: 120px;
`;

export const Nav = styled.nav`
    min-width: 430px;
    margin: 0;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    letter-spacing: 1.5px;
`;

export const NavListItem = styled.li`
    font-size: 13px;
    font-weight: 400;
    border-bottom: ${props=> props.isActive && 'solid 2px #5CE1EC'};
    padding: 2em 0;
`;

export const NavListLink = styled.a`
    text-decoration: none;
    color: white;
    &:hover, &:focus{
        color: #00C2CB;
    }
`;

export const Contact = styled.a`
    cursor: pointer;
    font-size: 13px;
    color: black;
    background: #5CE1EC;
    padding: .5em 1em;
    border-radius: 18px;

    &:hover, &:focus{
        background: #00C2CB;
    }
`