import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;  
    background-color: ${props=>props.theme.colors.accent};
`;

export const Inner = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2em 0;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    margin: 0;
    margin-bottom: 1em;
    color: white;
    & span{
        color: ${props=>props.theme.colors.primary};
    }
`;

export const List = styled.div`
`;

export const ListTitle = styled.h3`
    margin-right: 2em;
`;

export const ListItems = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding: 0;
    font-size: ${props=>props.theme.fonts.small};
    margin-bottom: 2em;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2em;

`;

export const Icon = styled.img`
    height: 45px;
    width: 45px;
    padding: 5px;
    background-color: white;
    border-radius: 6px;
`;

export const Name = styled.p`
    
`;